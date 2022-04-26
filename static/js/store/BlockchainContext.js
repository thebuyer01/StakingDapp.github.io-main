import { createContext, useState, useEffect } from "react";
import Web3 from "web3";
import Web3Modal from "web3modal";
import { providers } from "../utils/Web3Provider";
import { ABI, NFTABI } from "../utils/abi";
import { toast } from "react-toastify";

const BlockchainContext = createContext({
  notification: null,
  showModal: function () { },
  hideModal: function () { },
});

export const BlockchainContextProvider = (props) => {
  const [provider, setProvider] = useState();
  const [web3Instance, setWeb3Instance] = useState();
  const [web3Modal, setWeb3Modal] = useState();
  const [Contract, setContract] = useState();
  const [account, setAccount] = useState();
  const [walletBalance, setWalletBalance] = useState("0.00000");
  const [ischange, setIschange] = useState(true)
  const [tokenStaked, setTokenStaked] = useState('0')
  const [tokenStakedByuser, setTokenStakedByUser] = useState('0')
  const [ownerCount, setOwnerCount] = useState('0')
  const [nftContract, setNftContract] = useState()
  const [unstakedNft, setUnstakedNft] = useState()
  const [stakedNft, setStakedNft] = useState()
  const [approveStatus, setApproveStatus] = useState(false)
  const [totalReward, setTotalReward] = useState(0)
  const [rewardPerday, setRewardPerday] = useState('0')
  const [constantReward, setConstantReward] = useState('0')

useEffect(()=>{
  connectToWallet('noWallet')
},[])
  useEffect(() => {
    if (provider && account && web3Instance.currentProvider.isMetaMask === true && ischange) {
      setIschange(false)
      provider.on("accountsChanged", (accounts) => {
        fetchDataFromContract(Contract, web3Instance, accounts[0],nftContract);
        accounts.length > 0 && setAccount(accounts[0]);
      });
    }
  });

  const connectToWallet = async (type) => {
    if (type === "noWallet") {
      const web3 = new Web3(process.env.REACT_APP_RPF_NODE);
      const contractInstance = new web3.eth.Contract(
        ABI,
        process.env.REACT_APP_CONTRACT
      );
      const nftcontractInstance = new web3.eth.Contract(
        NFTABI,
        process.env.REACT_APP_NFT_CONTRACT
      );
      setNftContract(nftcontractInstance)
      setContract(contractInstance);
      setWeb3Instance(web3);
      setProvider(provider);
      fetchDataFromContract(contractInstance, web3, null, nftcontractInstance);
    } else {
      const web3Modal = new Web3Modal({
        cacheProvider: true,
        providerOptions: providers,
        theme: "dark",
      });
      let provider;
      await web3Modal
        .connect(web3Modal)
        .then((res) => {
          provider = res;
        })
        .catch((err) => {
          provider = process.env.REACT_APP_RPF_NODE;
        });
      const web3 = new Web3(provider);
      const account = await web3.eth.getAccounts();
      const contractInstance = new web3.eth.Contract(
        ABI,
        process.env.REACT_APP_CONTRACT
      );
      const nftcontractInstance = new web3.eth.Contract(
        NFTABI,
        process.env.REACT_APP_NFT_CONTRACT
      );
      setContract(contractInstance);
      setNftContract(nftcontractInstance)
      account.length > 0 && setAccount(account[0]);
      setWeb3Instance(web3);
      setProvider(provider);
      setWeb3Modal(web3Modal);
      fetchDataFromContract(contractInstance, web3, account[0], nftcontractInstance);
      localStorage.setItem('account', account[0])
    }

  };

  const fetchDataFromContract = async (contract, web3, account, NFTcontract) => {
    if (contract && NFTcontract && !account) {
      await contract.methods.tokensStaked().call((error, result) => {
        if (!error) {
          setTokenStaked(result)
        }
      });
      await contract.methods.amountOfStakers().call((error, result) => {
        if (!error) {
          setOwnerCount(result)
        }
      });
    }
    if (contract && account && NFTcontract) {
      await contract.methods.tokensStaked().call((error, result) => {
        if (!error) {
          setTokenStaked(result)
        }
      });
      await contract.methods.balanceOf(account).call((error, result) => {
        if (!error) {
          setWalletBalance(web3.utils.fromWei(result))
        }
      });
      await contract.methods.tokensStakedByUser(account).call(async(error, result) => {
        if (!error) {
          setTokenStakedByUser(result)
          await contract.methods.coinAmountPerRewardUnit().call((error, rew) => {
            if (!error) {
              const finalRewardPerday = result * rew * 2
              setRewardPerday(web3.utils.fromWei(finalRewardPerday.toString()))
              setConstantReward(web3.utils.fromWei(rew) * 2)
            }
          });
        }
      });
      await contract.methods.amountOfStakers().call((error, result) => {
        if (!error) {
          setOwnerCount(result)
        }
      });
      await contract.methods.stakedNFTSByUser(account).call((error, result) => {
        if (!error) {
          setStakedNft(result)
        }
      });
      await NFTcontract.methods.walletOfOwner(account).call((error, result) => {
        if (!error) {
          setUnstakedNft(result)
        }
      });

      checkEnable(web3, account)
      pendingHarvest(web3, contract, account)
    }
  };

  const pendingHarvest = async (web3, contract, account) => {
    if (account) {
      await contract.methods.stakedNFTSByUser(account).call((error, result) => {
        if (!error) {
          result && result.map(async (item) => {
            console.log('here ', item)
            await contract.methods.pendingRewards(account,item).call((error, res) => {
              if (!error) {
                console.log('yes', res)
                setTotalReward(old => old + +(web3.utils.fromWei(res)))
              }
            });
          })
        }
      });
    }
  };


  const invest = async (tokenId) => {
    if (account) {
      await Contract.methods
        .stake(tokenId)
        .send(
          { from: account },
          (error, result) => {
            if (!error) {
            }
          }
        )
        .on("receipt", function (receipt) {
          toast.success("Stake Successfully");
          fetchDataFromContract(Contract, web3Instance, account,nftContract);
        });
    }
  };

  const investAll = async () => {
    if (account) {
      console.log(unstakedNft)
      await Contract.methods
        .stakeBatch(unstakedNft)
        .send(
          { from: account },
          (error, result) => {
            if (!error) {
            }
          }
        )
        .on("receipt", function (receipt) {
          toast.success("Stake Successfully");
          fetchDataFromContract(Contract, web3Instance, account,nftContract);
        });
    }
  };

  const withdraw = async () => {
    if (account) {
      await Contract.methods
        .harvestBatch(account)
        .send({ from: account }, (error, result) => {
          if (!error) {
          }
        })
        .on("receipt", function (receipt) {
          toast.success("Claim Successfully");
          fetchDataFromContract(Contract, web3Instance, account,nftContract);
        });
    }
  };

  const unStake = async (tokenId) => {
    if (account) {
      await Contract.methods
        .unstake(tokenId)
        .send({ from: account }, (error, result) => {
          if (!error) {
          }
        })
        .on("receipt", function (receipt) {
          toast.success("Unstake Successfully");
          fetchDataFromContract(Contract, web3Instance, account,nftContract);
        });
    }
  };

  const unStakeAll = async () => {
    if (account) {
      await Contract.methods
        .unstakeBatch(stakedNft)
        .send({ from: account }, (error, result) => {
          if (!error) {
          }
        })
        .on("receipt", function (receipt) {
          toast.success("Unstake Successfully");
          fetchDataFromContract(Contract, web3Instance, account,nftContract);
        });
    }
  };


  const disconnectWallet = async () => {
    await web3Modal.clearCachedProvider();
    setAccount(null);
    localStorage.removeItem("WEB3_CONNECT_CACHED_PROVIDER");
    localStorage.removeItem("walletconnect");
    localStorage.removeItem("account")
    setProvider(null);
  };

  const approveYourself = async () => {
    if (account) {
      if (nftContract && account) {
        try {
          nftContract.methods
            .setApprovalForAll(process.env.REACT_APP_CONTRACT, true)
            .send({ from: account }, (error, result) => {
              if (!error) {

              }
            })
            .on("receipt", (receipt) => {
              toast.success("Enable Successfully");
              setApproveStatus(true)
            })
            .on("error", (err) => {
               toast.error(err);
            });
        } catch (error) {
          console.log("Failed: " + error);
        }
      }
    } else {
      //toast.error("Please connect to your wallet");
    }
  };

  const checkEnable = async (web3, account) => {
    const NFTContract = new web3.eth.Contract(
      NFTABI,
      process.env.REACT_APP_NFT_CONTRACT
    );
    await NFTContract.methods
      .isApprovedForAll(account, process.env.REACT_APP_CONTRACT)
      .call((error, result) => {
        if (!error) {
          if (result > 0) {
            setApproveStatus(true)
            console.log('is approve')
          } else {
            setApproveStatus(false)
            console.log('not approve')
          }
        }
      });
  };



  const context = {
    provider: provider,
    web3Instance: web3Instance,
    Contract: Contract,
    account: account,
    walletBalance: walletBalance,
    handleConnectToWallet: connectToWallet,
    handleDisconnectWallet: disconnectWallet,
    invest: invest,
    withdraw: withdraw,
    tokenStaked: tokenStaked,
    tokenStakedByuser: tokenStakedByuser,
    ownerCount: ownerCount,
    approveYourself: approveYourself,
    checkEnable: checkEnable,
    approveStatus: approveStatus,
    unStake: unStake,
    unstakedNft: unstakedNft,
    stakedNft: stakedNft,
    totalReward:totalReward,
    rewardPerday:rewardPerday,
    constantReward:constantReward,
    investAll:investAll,
    unStakeAll:unStakeAll,

  };
  return (
    <BlockchainContext.Provider value={context}>
      {props.children}
    </BlockchainContext.Provider>
  );
};

export default BlockchainContext;
