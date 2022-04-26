import { useContext, useState } from "react";
import BlockchainContext from "../store/BlockchainContext";
import { walletAddressSlicer } from "../utils/util";
import InvestBox from "./InvestBox";
const MainSection = () => {
  const {
    handleConnectToWallet,
    account,
    handleDisconnectWallet,
    walletBalance,
    tokenStaked,
    tokenStakedByuser,
    ownerCount,
    approveYourself,
    approveStatus,
    stakedNft,
    withdraw,
    totalReward,
    rewardPerday,
    constantReward,
  } = useContext(BlockchainContext);
  const [activeStake, setActiveStake] = useState();

  return (
    <div className="container">
      <div className="row box-row justify-content-between align-items-end mt-3">
        <span className="col-md-6 col-sm-6 info-holder left">
          <p className="mb-2 top-text">
            {tokenStaked / 100}% Apes Of Bevalin Staked:{" "}
          </p>
          <p className="top-text">Owners that have staked: </p>
        </span>
        <span className="col-md-6 col-sm-6 info-holder right">
          <p className="text-end mb-2 col-md-6 top-text ms-auto">
            {tokenStaked} /10000
          </p>
          <p className="text-end col-md-6 top-text ms-auto">{ownerCount}</p>
        </span>
      </div>
      <div className="row justify-content-between">
        <div className="col-md-6">
          <div className="main-box">
            <h2 className="mb-3">Account Balance</h2>
            <p className="balance-text">{walletBalance} $BVLN</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="main-box">
            {account ? (
              <>
                <h2 className="mb-3">{walletAddressSlicer(account)}</h2>
                <button
                  className="connect-btn"
                  onClick={() => handleDisconnectWallet()}
                >
                  Disconnect
                </button>
              </>
            ) : (
              <>
                <h2 className="mb-3">Connect Wallet</h2>
                <button
                  className="connect-btn"
                  onClick={() => handleConnectToWallet()}
                >
                  Connect
                </button>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="row box-row justify-content-between my-3">
        <div className="col-md-6">
          <div className="main-box">
            <p className="box-text">
              {tokenStakedByuser} staked Apes Of Bevalin
            </p>
            <p className="box-text">Pending $BVLN Reward: {totalReward}</p>
            <button
              className="box-btn my-3"
              onClick={() => {
                withdraw();
              }}
            >
              Claim
            </button>
            <p className="box-text">
              Daily Reward: {constantReward} $BVLN / BevalinDAO
            </p>
            <p className="box-text">
              You are currently earning: {rewardPerday} $BVLN / Day
            </p>
          </div>
        </div>
        <div className="col-md-6">
          {approveStatus === false ? (
            <div className="main-box">
              <p className="box-text">
                Step 1: Approve The Contract To Enable Staking.
              </p>
              <p className="box-text">
                Step 2: Once Complete, Stake your Apes Of Bevalin NFT(s).
              </p>
              <button
                className="box-btn mt-3"
                onClick={() => approveYourself()}
              >
                Approve
              </button>
            </div>
          ) : (
            <InvestBox />
          )}
        </div>
      </div>
    </div>
  );
};

export default MainSection;
