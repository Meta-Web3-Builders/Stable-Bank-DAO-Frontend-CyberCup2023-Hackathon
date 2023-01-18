export const crowdFundFactory = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "DonorsNFT",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_USDC",
        type: "address",
      },
      {
        internalType: "address",
        name: "_ownersAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_salt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_nft",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amountProposed",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_topic",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "_description",
        type: "bytes",
      },
      {
        internalType: "enum CrowdFund.Category",
        name: "_cat",
        type: "uint8",
      },
    ],
    name: "createCrowdfund",
    outputs: [
      {
        internalType: "address",
        name: "crowdFundAddr",
        type: "address",
      },
      {
        internalType: "address",
        name: "manager",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
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
    name: "crowdfunds",
    outputs: [
      {
        internalType: "contract CrowdFund",
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
        name: "_index",
        type: "uint256",
      },
    ],
    name: "disburseDonation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "getCrowdFund",
    outputs: [
      {
        internalType: "address",
        name: "USDC",
        type: "address",
      },
      {
        internalType: "address",
        name: "deployer",
        type: "address",
      },
      {
        internalType: "address",
        name: "crowdFundAddr",
        type: "address",
      },
      {
        internalType: "address",
        name: "owner",
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
        name: "_index",
        type: "uint256",
      },
    ],
    name: "ownersNFT",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "returnCrowdfund",
    outputs: [
      {
        internalType: "contract CrowdFund[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
