(this.webpackJsonpfrost = this.webpackJsonpfrost || []).push([
  [0],
  {
    203: function (e, t, n) {},
    204: function (e, t, n) {},
    220: function (e, t) {},
    222: function (e, t) {},
    224: function (e, t) {},
    228: function (e, t) {},
    255: function (e, t) {},
    257: function (e, t) {},
    271: function (e, t) {},
    273: function (e, t) {},
    304: function (e, t) {},
    306: function (e, t) {},
    396: function (e, t) {},
    397: function (e, t) {},
    488: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n(2),
        s = n(73),
        i = n.n(s),
        r = (n(203), n(204), n(1)),
        u = function () {
          return Object(r.jsx)("div", {
            className: "container",
            children: Object(r.jsxs)("div", {
              className: "row justify-content-between mt-3",
              children: [
                Object(r.jsxs)("div", {
                  className: "col-md-6 top-holder",
                  children: [
                    Object(r.jsx)("h1", {
                      className: "page-title",
                      children: "BevalinDAO",
                    }),
                    Object(r.jsx)("p", {
                      className: "subtitle",
                      children:
                        "Welcome to the BevalinDAO Staking Mechanism! Here you can stake your Apes Of Bevalin and you will be rewarded 5 $BVLN every 12 hours!",
                    }),
                    Object(r.jsx)("p", {
                      className: "primary-text",
                      children:
                        "Newly Staked Apes Of Bevalin NFT will get a bonus of 10 $BVLN",
                    }),
                    Object(r.jsxs)("div", {
                      className:
                        "d-flex flex-wrap align-items-center gap-3 my-4 social-holder",
                      children: [
                        Object(r.jsx)("a", {
                          href: "https://twitter.com/BevalinDAO",
                          target: "_blank",
                          children: Object(r.jsx)("img", {
                            src: "/assets/images/twitter.png",
                            height: "45",
                          }),
                        }),
                        Object(r.jsx)("a", {
                          href: "https://discord.gg/jvXxSgP3",
                          target: "_blank",
                          children: Object(r.jsx)("img", {
                            src: "/assets/images/discord.png",
                            height: "45",
                          }),
                        }),
                        Object(r.jsx)("a", {
                          href: "https://opensea.io/",
                          target: "_blank",
                          children: Object(r.jsx)("img", {
                            src: "/assets/images/opensea.png",
                            height: "45",
                          }),
                        }),
                        Object(r.jsx)("a", {
                          href: "https://polygonscan.com/address/0x0743237C934d65B406841fD62028bE613Adf77A0",
                          target: "_blank",
                          children: Object(r.jsx)("img", {
                            src: "/assets/images/matic.svg",
                            height: "45",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                Object(r.jsx)("div", {
                  className: "col-md-6 logo-holder",
                  children: Object(r.jsx)("img", {
                    src: "/assets/images/blid.png",
                    className: "blid-image",
                  }),
                }),
              ],
            }),
          });
        },
        o = n(13),
        p = n(11),
        c = n.n(p),
        l = n(17),
        y = n(109),
        d = n.n(y),
        m = n(108),
        b = n.n(m),
        f = {},
        j = [
          {
            inputs: [
              {
                internalType: "address",
                name: "owner",
                type: "address",
              },
              {
                internalType: "address",
                name: "_collectionAddress",
                type: "address",
              },
            ],
            stateMutability: "nonpayable",
            type: "constructor",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "owner",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "spender",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            name: "Approval",
            type: "event",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "spender",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
            ],
            name: "approve",
            outputs: [
              {
                internalType: "bool",
                name: "",
                type: "bool",
              },
            ],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "from",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
            ],
            name: "burn",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "spender",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "subtractedValue",
                type: "uint256",
              },
            ],
            name: "decreaseAllowance",
            outputs: [
              {
                internalType: "bool",
                name: "",
                type: "bool",
              },
            ],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
              },
              {
                internalType: "address",
                name: "account",
                type: "address",
              },
            ],
            name: "grantRole",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
              },
            ],
            name: "harvest",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "user",
                type: "address",
              },
            ],
            name: "harvestBatch",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "spender",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "addedValue",
                type: "uint256",
              },
            ],
            name: "increaseAllowance",
            outputs: [
              {
                internalType: "bool",
                name: "",
                type: "bool",
              },
            ],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "to",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
            ],
            name: "mint",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "address",
                name: "owner",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
              },
            ],
            name: "NFTStaked",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "address",
                name: "owner",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
              },
            ],
            name: "NFTUnstaked",
            type: "event",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "",
                type: "address",
              },
              {
                internalType: "address",
                name: "",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "",
                type: "uint256",
              },
              {
                internalType: "bytes",
                name: "",
                type: "bytes",
              },
            ],
            name: "onERC721Received",
            outputs: [
              {
                internalType: "bytes4",
                name: "",
                type: "bytes4",
              },
            ],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
              },
              {
                internalType: "address",
                name: "account",
                type: "address",
              },
            ],
            name: "renounceRole",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
              },
              {
                internalType: "address",
                name: "account",
                type: "address",
              },
            ],
            name: "revokeRole",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "address",
                name: "owner",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
            ],
            name: "RewardsHarvested",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
              },
              {
                indexed: !0,
                internalType: "bytes32",
                name: "previousAdminRole",
                type: "bytes32",
              },
              {
                indexed: !0,
                internalType: "bytes32",
                name: "newAdminRole",
                type: "bytes32",
              },
            ],
            name: "RoleAdminChanged",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "account",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "sender",
                type: "address",
              },
            ],
            name: "RoleGranted",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "account",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "sender",
                type: "address",
              },
            ],
            name: "RoleRevoked",
            type: "event",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "coinAmount",
                type: "uint256",
              },
            ],
            name: "setCoinAmountPerRewardUnit",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "newAddress",
                type: "address",
              },
            ],
            name: "setCollectionAddress",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "numberOfBlocks",
                type: "uint256",
              },
            ],
            name: "setNumberOfBlocksPerRewardUnit",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "coinAmount",
                type: "uint256",
              },
            ],
            name: "setWelcomeBonusAmount",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
              },
            ],
            name: "stake",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint256[]",
                name: "tokenIds",
                type: "uint256[]",
              },
            ],
            name: "stakeBatch",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "recipient",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
            ],
            name: "transfer",
            outputs: [
              {
                internalType: "bool",
                name: "",
                type: "bool",
              },
            ],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "from",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "to",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            name: "Transfer",
            type: "event",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "sender",
                type: "address",
              },
              {
                internalType: "address",
                name: "recipient",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
            ],
            name: "transferFrom",
            outputs: [
              {
                internalType: "bool",
                name: "",
                type: "bool",
              },
            ],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
              },
            ],
            name: "unstake",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint256[]",
                name: "tokenIds",
                type: "uint256[]",
              },
            ],
            name: "unstakeBatch",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "owner",
                type: "address",
              },
              {
                internalType: "address",
                name: "spender",
                type: "address",
              },
            ],
            name: "allowance",
            outputs: [
              {
                internalType: "uint256",
                name: "",
                type: "uint256",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "amountOfStakers",
            outputs: [
              {
                internalType: "uint256",
                name: "",
                type: "uint256",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "account",
                type: "address",
              },
            ],
            name: "balanceOf",
            outputs: [
              {
                internalType: "uint256",
                name: "",
                type: "uint256",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "BURNER_ROLE",
            outputs: [
              {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "coinAmountPerRewardUnit",
            outputs: [
              {
                internalType: "uint256",
                name: "",
                type: "uint256",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "collectionAddress",
            outputs: [
              {
                internalType: "address",
                name: "",
                type: "address",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "CONTRACT_ADMIN_ROLE",
            outputs: [
              {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "contractCreationBlock",
            outputs: [
              {
                internalType: "uint256",
                name: "",
                type: "uint256",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "decimals",
            outputs: [
              {
                internalType: "uint8",
                name: "",
                type: "uint8",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "DEFAULT_ADMIN_ROLE",
            outputs: [
              {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
              },
            ],
            name: "getRoleAdmin",
            outputs: [
              {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
              },
              {
                internalType: "address",
                name: "account",
                type: "address",
              },
            ],
            name: "hasRole",
            outputs: [
              {
                internalType: "bool",
                name: "",
                type: "bool",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "",
                type: "uint256",
              },
            ],
            name: "indexOfTokenIdInStakePortfolio",
            outputs: [
              {
                internalType: "uint256",
                name: "",
                type: "uint256",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "MINTER_ROLE",
            outputs: [
              {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "name",
            outputs: [
              {
                internalType: "string",
                name: "",
                type: "string",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "numberOfBlocksPerRewardUnit",
            outputs: [
              {
                internalType: "uint256",
                name: "",
                type: "uint256",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "owner",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
              },
            ],
            name: "pendingRewards",
            outputs: [
              {
                internalType: "uint256",
                name: "",
                type: "uint256",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "owner",
                type: "address",
              },
            ],
            name: "stakedNFTSByUser",
            outputs: [
              {
                internalType: "uint256[]",
                name: "",
                type: "uint256[]",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "",
                type: "uint256",
              },
            ],
            name: "stakeLog",
            outputs: [
              {
                internalType: "uint256",
                name: "stakedAtBlock",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "lastHarvestBlock",
                type: "uint256",
              },
              {
                internalType: "bool",
                name: "currentlyStaked",
                type: "bool",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "",
                type: "uint256",
              },
            ],
            name: "stakePortfolioByUser",
            outputs: [
              {
                internalType: "uint256",
                name: "",
                type: "uint256",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "bytes4",
                name: "interfaceId",
                type: "bytes4",
              },
            ],
            name: "supportsInterface",
            outputs: [
              {
                internalType: "bool",
                name: "",
                type: "bool",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "symbol",
            outputs: [
              {
                internalType: "string",
                name: "",
                type: "string",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "tokensStaked",
            outputs: [
              {
                internalType: "uint256",
                name: "",
                type: "uint256",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "",
                type: "address",
              },
            ],
            name: "tokensStakedByUser",
            outputs: [
              {
                internalType: "uint256",
                name: "",
                type: "uint256",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "totalSupply",
            outputs: [
              {
                internalType: "uint256",
                name: "",
                type: "uint256",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "welcomeBonusAmount",
            outputs: [
              {
                internalType: "uint256",
                name: "",
                type: "uint256",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "",
                type: "uint256",
              },
            ],
            name: "welcomeBonusCollected",
            outputs: [
              {
                internalType: "bool",
                name: "",
                type: "bool",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
        ],
        x = [
          {
            inputs: [
              {
                internalType: "string",
                name: "_name",
                type: "string",
              },
              {
                internalType: "string",
                name: "_symbol",
                type: "string",
              },
              {
                internalType: "string",
                name: "_initBaseURI",
                type: "string",
              },
              {
                internalType: "string",
                name: "_initNotRevealedUri",
                type: "string",
              },
            ],
            stateMutability: "nonpayable",
            type: "constructor",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "owner",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "approved",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
              },
            ],
            name: "Approval",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "owner",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "operator",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "bool",
                name: "approved",
                type: "bool",
              },
            ],
            name: "ApprovalForAll",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "previousOwner",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "newOwner",
                type: "address",
              },
            ],
            name: "OwnershipTransferred",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "from",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "to",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
              },
            ],
            name: "Transfer",
            type: "event",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "to",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
              },
            ],
            name: "approve",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "owner",
                type: "address",
              },
            ],
            name: "balanceOf",
            outputs: [
              {
                internalType: "uint256",
                name: "",
                type: "uint256",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "baseExtension",
            outputs: [
              {
                internalType: "string",
                name: "",
                type: "string",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "cost",
            outputs: [
              {
                internalType: "uint256",
                name: "",
                type: "uint256",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
              },
            ],
            name: "getApproved",
            outputs: [
              {
                internalType: "address",
                name: "",
                type: "address",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "owner",
                type: "address",
              },
              {
                internalType: "address",
                name: "operator",
                type: "address",
              },
            ],
            name: "isApprovedForAll",
            outputs: [
              {
                internalType: "bool",
                name: "",
                type: "bool",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "maxMintAmount",
            outputs: [
              {
                internalType: "uint256",
                name: "",
                type: "uint256",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "maxSupply",
            outputs: [
              {
                internalType: "uint256",
                name: "",
                type: "uint256",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "_mintAmount",
                type: "uint256",
              },
            ],
            name: "mint",
            outputs: [],
            stateMutability: "payable",
            type: "function",
          },
          {
            inputs: [],
            name: "name",
            outputs: [
              {
                internalType: "string",
                name: "",
                type: "string",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "notRevealedUri",
            outputs: [
              {
                internalType: "string",
                name: "",
                type: "string",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "owner",
            outputs: [
              {
                internalType: "address",
                name: "",
                type: "address",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
              },
            ],
            name: "ownerOf",
            outputs: [
              {
                internalType: "address",
                name: "",
                type: "address",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "bool",
                name: "_state",
                type: "bool",
              },
            ],
            name: "pause",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "paused",
            outputs: [
              {
                internalType: "bool",
                name: "",
                type: "bool",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "renounceOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "reveal",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "revealed",
            outputs: [
              {
                internalType: "bool",
                name: "",
                type: "bool",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "from",
                type: "address",
              },
              {
                internalType: "address",
                name: "to",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
              },
            ],
            name: "safeTransferFrom",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "from",
                type: "address",
              },
              {
                internalType: "address",
                name: "to",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
              },
              {
                internalType: "bytes",
                name: "_data",
                type: "bytes",
              },
            ],
            name: "safeTransferFrom",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "operator",
                type: "address",
              },
              {
                internalType: "bool",
                name: "approved",
                type: "bool",
              },
            ],
            name: "setApprovalForAll",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "string",
                name: "_newBaseExtension",
                type: "string",
              },
            ],
            name: "setBaseExtension",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "string",
                name: "_newBaseURI",
                type: "string",
              },
            ],
            name: "setBaseURI",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "_newCost",
                type: "uint256",
              },
            ],
            name: "setCost",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "string",
                name: "_notRevealedURI",
                type: "string",
              },
            ],
            name: "setNotRevealedURI",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "_newmaxMintAmount",
                type: "uint256",
              },
            ],
            name: "setmaxMintAmount",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "bytes4",
                name: "interfaceId",
                type: "bytes4",
              },
            ],
            name: "supportsInterface",
            outputs: [
              {
                internalType: "bool",
                name: "",
                type: "bool",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "symbol",
            outputs: [
              {
                internalType: "string",
                name: "",
                type: "string",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "index",
                type: "uint256",
              },
            ],
            name: "tokenByIndex",
            outputs: [
              {
                internalType: "uint256",
                name: "",
                type: "uint256",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "owner",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "index",
                type: "uint256",
              },
            ],
            name: "tokenOfOwnerByIndex",
            outputs: [
              {
                internalType: "uint256",
                name: "",
                type: "uint256",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
              },
            ],
            name: "tokenURI",
            outputs: [
              {
                internalType: "string",
                name: "",
                type: "string",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "totalSupply",
            outputs: [
              {
                internalType: "uint256",
                name: "",
                type: "uint256",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "from",
                type: "address",
              },
              {
                internalType: "address",
                name: "to",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
              },
            ],
            name: "transferFrom",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "newOwner",
                type: "address",
              },
            ],
            name: "transferOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "_owner",
                type: "address",
              },
            ],
            name: "walletOfOwner",
            outputs: [
              {
                internalType: "uint256[]",
                name: "",
                type: "uint256[]",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "withdraw",
            outputs: [],
            stateMutability: "payable",
            type: "function",
          },
        ],
        h = n(27),
        T = Object(a.createContext)({
          notification: null,
          showModal: function () {},
          hideModal: function () {},
        }),
        w = function (e) {
          var t = Object(a.useState)(),
            n = Object(o.a)(t, 2),
            s = n[0],
            i = n[1],
            u = Object(a.useState)(),
            p = Object(o.a)(u, 2),
            y = p[0],
            m = p[1],
            w = Object(a.useState)(),
            v = Object(o.a)(w, 2),
            O = v[0],
            k = v[1],
            g = Object(a.useState)(),
            M = Object(o.a)(g, 2),
            N = M[0],
            S = M[1],
            R = Object(a.useState)(),
            A = Object(o.a)(R, 2),
            C = A[0],
            I = A[1],
            B = Object(a.useState)("0.00000"),
            F = Object(o.a)(B, 2),
            E = F[0],
            _ = F[1],
            U = Object(a.useState)(!0),
            D = Object(o.a)(U, 2),
            P = D[0],
            W = D[1],
            Y = Object(a.useState)("0"),
            $ = Object(o.a)(Y, 2),
            L = $[0],
            H = $[1],
            V = Object(a.useState)("0"),
            G = Object(o.a)(V, 2),
            J = G[0],
            q = G[1],
            z = Object(a.useState)("0"),
            X = Object(o.a)(z, 2),
            K = X[0],
            Q = X[1],
            Z = Object(a.useState)(),
            ee = Object(o.a)(Z, 2),
            te = ee[0],
            ne = ee[1],
            ae = Object(a.useState)(),
            se = Object(o.a)(ae, 2),
            ie = se[0],
            re = se[1],
            ue = Object(a.useState)(),
            oe = Object(o.a)(ue, 2),
            pe = oe[0],
            ce = oe[1],
            le = Object(a.useState)(!1),
            ye = Object(o.a)(le, 2),
            de = ye[0],
            me = ye[1],
            be = Object(a.useState)(0),
            fe = Object(o.a)(be, 2),
            je = fe[0],
            xe = fe[1],
            he = Object(a.useState)("0"),
            Te = Object(o.a)(he, 2),
            we = Te[0],
            ve = Te[1],
            Oe = Object(a.useState)("0"),
            ke = Object(o.a)(Oe, 2),
            ge = ke[0],
            Me = ke[1];
          Object(a.useEffect)(function () {
            Ne("noWallet");
          }, []),
            Object(a.useEffect)(function () {
              s &&
                C &&
                !0 === y.currentProvider.isMetaMask &&
                P &&
                (W(!1),
                s.on("accountsChanged", function (e) {
                  Se(N, y, e[0], te), e.length > 0 && I(e[0]);
                }));
            });
          var Ne = (function () {
              var e = Object(l.a)(
                c.a.mark(function e(t) {
                  var n, a, r, u, o, p, l, y, h;
                  return c.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if ("noWallet" !== t) {
                            e.next = 11;
                            break;
                          }
                          (n = new d.a("https://polygon-rpc.com")),
                            (a = new n.eth.Contract(
                              j,
                              "0x0743237C934d65B406841fD62028bE613Adf77A0"
                            )),
                            (r = new n.eth.Contract(
                              x,
                              "0x1Cc7F93A0babf02344Dbb04283ABA2522c045Cc3"
                            )),
                            ne(r),
                            S(a),
                            m(n),
                            i(s),
                            Se(a, n, null, r),
                            (e.next = 28);
                          break;
                        case 11:
                          return (
                            (u = new b.a({
                              cacheProvider: !0,
                              providerOptions: f,
                              theme: "dark",
                            })),
                            (e.next = 14),
                            u
                              .connect(u)
                              .then(function (e) {
                                o = e;
                              })
                              .catch(function (e) {
                                o = "https://polygon-rpc.com";
                              })
                          );
                        case 14:
                          return (
                            (p = new d.a(o)), (e.next = 17), p.eth.getAccounts()
                          );
                        case 17:
                          (l = e.sent),
                            (y = new p.eth.Contract(
                              j,
                              "0x0743237C934d65B406841fD62028bE613Adf77A0"
                            )),
                            (h = new p.eth.Contract(
                              x,
                              "0x1Cc7F93A0babf02344Dbb04283ABA2522c045Cc3"
                            )),
                            S(y),
                            ne(h),
                            l.length > 0 && I(l[0]),
                            m(p),
                            i(o),
                            k(u),
                            Se(y, p, l[0], h),
                            localStorage.setItem("account", l[0]);
                        case 28:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            Se = (function () {
              var e = Object(l.a)(
                c.a.mark(function e(t, n, a, s) {
                  return c.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (!t || !s || a) {
                            e.next = 5;
                            break;
                          }
                          return (
                            (e.next = 3),
                            t.methods.tokensStaked().call(function (e, t) {
                              e || H(t);
                            })
                          );
                        case 3:
                          return (
                            (e.next = 5),
                            t.methods.amountOfStakers().call(function (e, t) {
                              e || Q(t);
                            })
                          );
                        case 5:
                          if (!(t && a && s)) {
                            e.next = 20;
                            break;
                          }
                          return (
                            (e.next = 8),
                            t.methods.tokensStaked().call(function (e, t) {
                              e || H(t);
                            })
                          );
                        case 8:
                          return (
                            (e.next = 10),
                            t.methods.balanceOf(a).call(function (e, t) {
                              e || _(n.utils.fromWei(t));
                            })
                          );
                        case 10:
                          return (
                            (e.next = 12),
                            t.methods.tokensStakedByUser(a).call(
                              (function () {
                                var e = Object(l.a)(
                                  c.a.mark(function e(a, s) {
                                    return c.a.wrap(function (e) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            if (a) {
                                              e.next = 4;
                                              break;
                                            }
                                            return (
                                              q(s),
                                              (e.next = 4),
                                              t.methods
                                                .coinAmountPerRewardUnit()
                                                .call(function (e, t) {
                                                  if (!e) {
                                                    var a = s * t * 2;
                                                    ve(
                                                      n.utils.fromWei(
                                                        a.toString()
                                                      )
                                                    ),
                                                      Me(
                                                        2 * n.utils.fromWei(t)
                                                      );
                                                  }
                                                })
                                            );
                                          case 4:
                                          case "end":
                                            return e.stop();
                                        }
                                    }, e);
                                  })
                                );
                                return function (t, n) {
                                  return e.apply(this, arguments);
                                };
                              })()
                            )
                          );
                        case 12:
                          return (
                            (e.next = 14),
                            t.methods.amountOfStakers().call(function (e, t) {
                              e || Q(t);
                            })
                          );
                        case 14:
                          return (
                            (e.next = 16),
                            t.methods.stakedNFTSByUser(a).call(function (e, t) {
                              e || ce(t);
                            })
                          );
                        case 16:
                          return (
                            (e.next = 18),
                            s.methods.walletOfOwner(a).call(function (e, t) {
                              e || re(t);
                            })
                          );
                        case 18:
                          Ue(n, a), Re(n, t, a);
                        case 20:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t, n, a, s) {
                return e.apply(this, arguments);
              };
            })(),
            Re = (function () {
              var e = Object(l.a)(
                c.a.mark(function e(t, n, a) {
                  return c.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (!a) {
                            e.next = 3;
                            break;
                          }
                          return (
                            (e.next = 3),
                            n.methods.stakedNFTSByUser(a).call(function (e, s) {
                              e ||
                                (s &&
                                  s.map(
                                    (function () {
                                      var e = Object(l.a)(
                                        c.a.mark(function e(s) {
                                          return c.a.wrap(function (e) {
                                            for (;;)
                                              switch ((e.prev = e.next)) {
                                                case 0:
                                                  return (
                                                    console.log("here ", s),
                                                    (e.next = 3),
                                                    n.methods
                                                      .pendingRewards(a, s)
                                                      .call(function (e, n) {
                                                        e ||
                                                          (console.log(
                                                            "yes",
                                                            n
                                                          ),
                                                          xe(function (e) {
                                                            return (
                                                              e +
                                                              +t.utils.fromWei(
                                                                n
                                                              )
                                                            );
                                                          }));
                                                      })
                                                  );
                                                case 3:
                                                case "end":
                                                  return e.stop();
                                              }
                                          }, e);
                                        })
                                      );
                                      return function (t) {
                                        return e.apply(this, arguments);
                                      };
                                    })()
                                  ));
                            })
                          );
                        case 3:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t, n, a) {
                return e.apply(this, arguments);
              };
            })(),
            Ae = (function () {
              var e = Object(l.a)(
                c.a.mark(function e(t) {
                  return c.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (!C) {
                            e.next = 3;
                            break;
                          }
                          return (
                            (e.next = 3),
                            N.methods
                              .stake(t)
                              .send(
                                {
                                  from: C,
                                },
                                function (e, t) {}
                              )
                              .on("receipt", function (e) {
                                h.b.success("Stake Successfully"),
                                  Se(N, y, C, te);
                              })
                          );
                        case 3:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            Ce = (function () {
              var e = Object(l.a)(
                c.a.mark(function e() {
                  return c.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (!C) {
                            e.next = 4;
                            break;
                          }
                          return (
                            console.log(ie),
                            (e.next = 4),
                            N.methods
                              .stakeBatch(ie)
                              .send(
                                {
                                  from: C,
                                },
                                function (e, t) {}
                              )
                              .on("receipt", function (e) {
                                h.b.success("Stake Successfully"),
                                  Se(N, y, C, te);
                              })
                          );
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            Ie = (function () {
              var e = Object(l.a)(
                c.a.mark(function e() {
                  return c.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (!C) {
                            e.next = 3;
                            break;
                          }
                          return (
                            (e.next = 3),
                            N.methods
                              .harvestBatch(C)
                              .send(
                                {
                                  from: C,
                                },
                                function (e, t) {}
                              )
                              .on("receipt", function (e) {
                                h.b.success("Claim Successfully"),
                                  Se(N, y, C, te);
                              })
                          );
                        case 3:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            Be = (function () {
              var e = Object(l.a)(
                c.a.mark(function e(t) {
                  return c.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (!C) {
                            e.next = 3;
                            break;
                          }
                          return (
                            (e.next = 3),
                            N.methods
                              .unstake(t)
                              .send(
                                {
                                  from: C,
                                },
                                function (e, t) {}
                              )
                              .on("receipt", function (e) {
                                h.b.success("Unstake Successfully"),
                                  Se(N, y, C, te);
                              })
                          );
                        case 3:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            Fe = (function () {
              var e = Object(l.a)(
                c.a.mark(function e() {
                  return c.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (!C) {
                            e.next = 3;
                            break;
                          }
                          return (
                            (e.next = 3),
                            N.methods
                              .unstakeBatch(pe)
                              .send(
                                {
                                  from: C,
                                },
                                function (e, t) {}
                              )
                              .on("receipt", function (e) {
                                h.b.success("Unstake Successfully"),
                                  Se(N, y, C, te);
                              })
                          );
                        case 3:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            Ee = (function () {
              var e = Object(l.a)(
                c.a.mark(function e() {
                  return c.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), O.clearCachedProvider();
                        case 2:
                          I(null),
                            localStorage.removeItem(
                              "WEB3_CONNECT_CACHED_PROVIDER"
                            ),
                            localStorage.removeItem("walletconnect"),
                            localStorage.removeItem("account"),
                            i(null);
                        case 7:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            _e = (function () {
              var e = Object(l.a)(
                c.a.mark(function e() {
                  return c.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (C && te && C)
                            try {
                              te.methods
                                .setApprovalForAll(
                                  "0x0743237C934d65B406841fD62028bE613Adf77A0",
                                  !0
                                )
                                .send(
                                  {
                                    from: C,
                                  },
                                  function (e, t) {}
                                )
                                .on("receipt", function (e) {
                                  h.b.success("Enable Successfully"), me(!0);
                                })
                                .on("error", function (e) {
                                  h.b.error(e);
                                });
                            } catch (t) {
                              console.log("Failed: " + t);
                            }
                        case 1:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            Ue = (function () {
              var e = Object(l.a)(
                c.a.mark(function e(t, n) {
                  var a;
                  return c.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (a = new t.eth.Contract(
                              x,
                              "0x1Cc7F93A0babf02344Dbb04283ABA2522c045Cc3"
                            )),
                            (e.next = 3),
                            a.methods
                              .isApprovedForAll(
                                n,
                                "0x0743237C934d65B406841fD62028bE613Adf77A0"
                              )
                              .call(function (e, t) {
                                e ||
                                  (t > 0
                                    ? (me(!0), console.log("is approve"))
                                    : (me(!1), console.log("not approve")));
                              })
                          );
                        case 3:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t, n) {
                return e.apply(this, arguments);
              };
            })(),
            De = {
              provider: s,
              web3Instance: y,
              Contract: N,
              account: C,
              walletBalance: E,
              handleConnectToWallet: Ne,
              handleDisconnectWallet: Ee,
              invest: Ae,
              withdraw: Ie,
              tokenStaked: L,
              tokenStakedByuser: J,
              ownerCount: K,
              approveYourself: _e,
              checkEnable: Ue,
              approveStatus: de,
              unStake: Be,
              unstakedNft: ie,
              stakedNft: pe,
              totalReward: je,
              rewardPerday: we,
              constantReward: ge,
              investAll: Ce,
              unStakeAll: Fe,
            };
          return Object(r.jsx)(T.Provider, {
            value: De,
            children: e.children,
          });
        },
        v = T,
        O = function (e) {
          if ("string" === typeof e)
            return (
              e.substring(0, 7) + "..." + e.substring(e.length - 7, e.length)
            );
        },
        k = function () {
          var e = Object(a.useState)(),
            t = Object(o.a)(e, 2),
            n = t[0],
            s = t[1],
            i = Object(a.useState)(),
            u = Object(o.a)(i, 2),
            p = u[0],
            c = u[1],
            l = Object(a.useContext)(v),
            y = l.unstakedNft,
            d = l.stakedNft,
            m = l.invest,
            b = l.unStake,
            f = l.unStakeAll,
            j = l.investAll;
          return Object(r.jsx)("div", {
            className: "main-box",
            children: Object(r.jsxs)("div", {
              className:
                "box-row d-flex flex-wrap w-100 justify-content-evenly",
              children: [
                Object(r.jsxs)("div", {
                  className: "d-flex flex-column align-items-center gap-3",
                  children: [
                    Object(r.jsx)("button", {
                      className: "nft-op-btn",
                      onClick: function () {
                        f();
                      },
                      children: "Unstake all",
                    }),
                    Object(r.jsx)("p", {
                      className: "tab-title",
                      children: "your staked NFTs",
                    }),
                    Object(r.jsx)("button", {
                      className: "nft-op-btn",
                      onClick: function () {
                        n && b(+n);
                      },
                      children: "Unstake",
                    }),
                    Object(r.jsx)("div", {
                      className:
                        "d-flex flex-column align-items-center gap-3 list-holder",
                      children: d.map(function (e, t) {
                        if (0 != e)
                          return Object(r.jsx)(
                            "button",
                            {
                              className: "nft-btn ".concat(
                                n == +e ? "active" : ""
                              ),
                              onClick: function () {
                                s(e);
                              },
                              children: e,
                            },
                            t
                          );
                      }),
                    }),
                  ],
                }),
                Object(r.jsxs)("div", {
                  className: "d-flex flex-column align-items-center gap-3",
                  children: [
                    Object(r.jsx)("button", {
                      className: "nft-op-btn",
                      onClick: function () {
                        j();
                      },
                      children: "Stake all",
                    }),
                    Object(r.jsx)("p", {
                      className: "tab-title",
                      children: "your unstaked NFTs",
                    }),
                    Object(r.jsx)("button", {
                      className: "nft-op-btn",
                      onClick: function () {
                        p && m(+p);
                      },
                      children: "Stake",
                    }),
                    Object(r.jsx)("div", {
                      className:
                        "d-flex flex-column align-items-center gap-3 list-holder",
                      children: y.map(function (e, t) {
                        return Object(r.jsx)(
                          "button",
                          {
                            className: "nft-btn ".concat(
                              p == +e ? "active" : ""
                            ),
                            onClick: function () {
                              c(e);
                            },
                            children: e,
                          },
                          t
                        );
                      }),
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        g = function () {
          var e = Object(a.useContext)(v),
            t = e.handleConnectToWallet,
            n = e.account,
            s = e.handleDisconnectWallet,
            i = e.walletBalance,
            u = e.tokenStaked,
            p = e.tokenStakedByuser,
            c = e.ownerCount,
            l = e.approveYourself,
            y = e.approveStatus,
            d = (e.stakedNft, e.withdraw),
            m = e.totalReward,
            b = e.rewardPerday,
            f = e.constantReward,
            j = Object(a.useState)(),
            x = Object(o.a)(j, 2);
          x[0], x[1];
          return Object(r.jsxs)("div", {
            className: "container",
            children: [
              Object(r.jsxs)("div", {
                className:
                  "row box-row justify-content-between align-items-end mt-3",
                children: [
                  Object(r.jsxs)("span", {
                    className: "col-md-6 col-sm-6 info-holder left",
                    children: [
                      Object(r.jsxs)("p", {
                        className: "mb-2 top-text",
                        children: [u / 100, "% Apes Of Bevalin Staked: "],
                      }),
                      Object(r.jsx)("p", {
                        className: "top-text",
                        children: "Owners that have staked:  ",
                      }),
                    ],
                  }),
                  Object(r.jsxs)("span", {
                    className: "col-md-6 col-sm-6 info-holder right",
                    children: [
                      Object(r.jsxs)("p", {
                        className: "text-end mb-2 col-md-6 top-text ms-auto",
                        children: [u, " /4444"],
                      }),
                      Object(r.jsx)("p", {
                        className: "text-end col-md-6 top-text ms-auto",
                        children: c,
                      }),
                    ],
                  }),
                ],
              }),
              Object(r.jsxs)("div", {
                className: "row justify-content-between",
                children: [
                  Object(r.jsx)("div", {
                    className: "col-md-6",
                    children: Object(r.jsxs)("div", {
                      className: "main-box",
                      children: [
                        Object(r.jsx)("h2", {
                          className: "mb-3",
                          children: "Your Account Balance",
                        }),
                        Object(r.jsxs)("p", {
                          className: "balance-text",
                          children: [i, " $BVLN"],
                        }),
                      ],
                    }),
                  }),
                  Object(r.jsx)("div", {
                    className: "col-md-6",
                    children: Object(r.jsx)("div", {
                      className: "main-box",
                      children: n
                        ? Object(r.jsxs)(r.Fragment, {
                            children: [
                              Object(r.jsx)("h2", {
                                className: "mb-3",
                                children: O(n),
                              }),
                              Object(r.jsx)("button", {
                                className: "connect-btn",
                                onClick: function () {
                                  return s();
                                },
                                children: "Disconnect",
                              }),
                            ],
                          })
                        : Object(r.jsxs)(r.Fragment, {
                            children: [
                              Object(r.jsx)("h2", {
                                className: "mb-3",
                                children: "Connect Wallet",
                              }),
                              Object(r.jsx)("button", {
                                className: "connect-btn",
                                onClick: function () {
                                  return t();
                                },
                                children: "Connect",
                              }),
                            ],
                          }),
                    }),
                  }),
                ],
              }),
              Object(r.jsxs)("div", {
                className: "row box-row justify-content-between my-3",
                children: [
                  Object(r.jsx)("div", {
                    className: "col-md-6",
                    children: Object(r.jsxs)("div", {
                      className: "main-box",
                      children: [
                        Object(r.jsxs)("p", {
                          className: "box-text",
                          children: [p, " staked Ape Of Bevalin"],
                        }),
                        Object(r.jsxs)("p", {
                          className: "box-text",
                          children: ["Pending $BVLN Reward: ", m],
                        }),
                        Object(r.jsx)("button", {
                          className: "box-btn my-3",
                          onClick: function () {
                            d();
                          },
                          children: "Claim",
                        }),
                        Object(r.jsxs)("p", {
                          className: "box-text",
                          children: [
                            "Daily Reward: ",
                            f,
                            " $BVLN / BevalinDAO",
                          ],
                        }),
                        Object(r.jsxs)("p", {
                          className: "box-text",
                          children: [
                            "You are currently earning: ",
                            b,
                            " $BVLN / Day",
                          ],
                        }),
                      ],
                    }),
                  }),
                  Object(r.jsx)("div", {
                    className: "col-md-6",
                    children:
                      !1 === y
                        ? Object(r.jsxs)("div", {
                            className: "main-box",
                            children: [
                              Object(r.jsx)("p", {
                                className: "box-text",
                                children:
                                  "Step 1: Approve the contract to Enable Staking.",
                              }),
                              Object(r.jsx)("p", {
                                className: "box-text",
                                children:
                                  "Step 2: Once complete, stake your Apes Of Bevalin NFT.",
                              }),
                              Object(r.jsx)("button", {
                                className: "box-btn mt-3",
                                onClick: function () {
                                  return l();
                                },
                                children: "Approve",
                              }),
                            ],
                          })
                        : Object(r.jsx)(k, {}),
                  }),
                ],
              }),
            ],
          });
        },
        M = function () {
          return Object(r.jsx)(r.Fragment, {
            children: Object(r.jsx)("main", {
              children: Object(r.jsxs)("section", {
                className: "w-100",
                children: [Object(r.jsx)(u, {}), Object(r.jsx)(g, {})],
              }),
            }),
          });
        };
      n(487);
      i.a.render(
        Object(r.jsxs)(w, {
          children: [Object(r.jsx)(M, {}), Object(r.jsx)(h.a, {})],
        }),
        document.getElementById("root")
      );
    },
  },
  [[488, 1, 2]],
]);
//# sourceMappingURL=main.5e0b84bc.chunk.js.map
