export const daoABI=[
	{
		"inputs": [
			{
			  "internalType": "address",
			  "name": "_DAOtokenAddress",
			  "type": "address"
			},
			{
			  "internalType": "address",
			  "name": "_DUSDC",
			  "type": "address"
			},
			{
			  "internalType": "contract crowdFundFactory",
			  "name": "_crowdFundFactoryaddr",
			  "type": "address"
			},
			{
			  "internalType": "address",
			  "name": "_nft",
			  "type": "address"
			}
		  ],
		  "stateMutability": "nonpayable",
		  "type": "constructor"
		},
		{
		  "inputs": [
			{
			  "internalType": "string",
			  "name": "",
			  "type": "string"
			}
		  ],
		  "name": "AlreadyJoined",
		  "type": "error"
		},
		{
		  "inputs": [
			{
			  "internalType": "string",
			  "name": "",
			  "type": "string"
			}
		  ],
		  "name": "AlreadyVoted",
		  "type": "error"
		},
		{
		  "inputs": [
			{
			  "internalType": "string",
			  "name": "",
			  "type": "string"
			}
		  ],
		  "name": "ContractNotFunded",
		  "type": "error"
		},
		{
		  "inputs": [
			{
			  "internalType": "uint256",
			  "name": "amountInputed",
			  "type": "uint256"
			},
			{
			  "internalType": "uint256",
			  "name": "amountExpected",
			  "type": "uint256"
			}
		  ],
		  "name": "EtherNotSufficient",
		  "type": "error"
		},
		{
		  "inputs": [
			{
			  "internalType": "uint256",
			  "name": "amountAvailable",
			  "type": "uint256"
			},
			{
			  "internalType": "uint256",
			  "name": "amountExpected",
			  "type": "uint256"
			}
		  ],
		  "name": "InsufficientToken",
		  "type": "error"
		},
		{
		  "inputs": [
			{
			  "internalType": "string",
			  "name": "",
			  "type": "string"
			}
		  ],
		  "name": "NotAdmin",
		  "type": "error"
		},
		{
		  "inputs": [
			{
			  "internalType": "string",
			  "name": "",
			  "type": "string"
			}
		  ],
		  "name": "NotEligible",
		  "type": "error"
		},
		{
		  "inputs": [
			{
			  "internalType": "string",
			  "name": "",
			  "type": "string"
			}
		  ],
		  "name": "ProposalNotApproved",
		  "type": "error"
		},
		{
		  "inputs": [
			{
			  "internalType": "string",
			  "name": "",
			  "type": "string"
			}
		  ],
		  "name": "TooMuch",
		  "type": "error"
		},
		{
		  "inputs": [
			{
			  "internalType": "uint256",
			  "name": "amountAvailable",
			  "type": "uint256"
			},
			{
			  "internalType": "uint256",
			  "name": "amountExpected",
			  "type": "uint256"
			}
		  ],
		  "name": "ToomuchToken",
		  "type": "error"
		},
		{
		  "inputs": [
			{
			  "internalType": "string",
			  "name": "",
			  "type": "string"
			}
		  ],
		  "name": "ZeroAddress",
		  "type": "error"
		},
		{
		  "inputs": [
			{
			  "internalType": "string",
			  "name": "",
			  "type": "string"
			}
		  ],
		  "name": "ZeroEther",
		  "type": "error"
		},
		{
		  "inputs": [
			{
			  "internalType": "string",
			  "name": "",
			  "type": "string"
			}
		  ],
		  "name": "ZeroToken",
		  "type": "error"
		},
		{
		  "inputs": [
			{
			  "internalType": "string",
			  "name": "",
			  "type": "string"
			}
		  ],
		  "name": "crowdFundCreated",
		  "type": "error"
		},
		{
		  "inputs": [],
		  "name": "insufficientToken",
		  "type": "error"
		},
		{
		  "inputs": [
			{
			  "internalType": "string",
			  "name": "",
			  "type": "string"
			}
		  ],
		  "name": "invalidTime",
		  "type": "error"
		},
		{
		  "inputs": [
			{
			  "internalType": "string",
			  "name": "",
			  "type": "string"
			}
		  ],
		  "name": "n0tEnoughDaoMembers",
		  "type": "error"
		},
		{
		  "inputs": [],
		  "name": "proposalAlreadyCancelled",
		  "type": "error"
		},
		{
		  "inputs": [
			{
			  "internalType": "string",
			  "name": "",
			  "type": "string"
			}
		  ],
		  "name": "votingAlreadyStarted",
		  "type": "error"
		},
		{
		  "anonymous": false,
		  "inputs": [
			{
			  "indexed": false,
			  "internalType": "address",
			  "name": "oldAdmin",
			  "type": "address"
			},
			{
			  "indexed": false,
			  "internalType": "address",
			  "name": "newAdmin",
			  "type": "address"
			}
		  ],
		  "name": "AdminUpdated",
		  "type": "event"
		},
		{
		  "anonymous": false,
		  "inputs": [
			{
			  "indexed": false,
			  "internalType": "address",
			  "name": "depositor",
			  "type": "address"
			},
			{
			  "indexed": false,
			  "internalType": "uint256",
			  "name": "amountDeposited",
			  "type": "uint256"
			}
		  ],
		  "name": "EtherDeposited",
		  "type": "event"
		},
		{
		  "anonymous": false,
		  "inputs": [
			{
			  "indexed": true,
			  "internalType": "address",
			  "name": "member",
			  "type": "address"
			},
			{
			  "indexed": true,
			  "internalType": "uint256",
			  "name": "time",
			  "type": "uint256"
			}
		  ],
		  "name": "Joined",
		  "type": "event"
		},
		{
		  "anonymous": false,
		  "inputs": [
			{
			  "indexed": true,
			  "internalType": "uint256",
			  "name": "_proposalID",
			  "type": "uint256"
			},
			{
			  "indexed": true,
			  "internalType": "uint256",
			  "name": "ApproveTime",
			  "type": "uint256"
			}
		  ],
		  "name": "ProposalApproved",
		  "type": "event"
		},
		{
		  "anonymous": false,
		  "inputs": [
			{
			  "indexed": true,
			  "internalType": "uint256",
			  "name": "_proposalID",
			  "type": "uint256"
			},
			{
			  "indexed": true,
			  "internalType": "uint256",
			  "name": "cancellationTime",
			  "type": "uint256"
			}
		  ],
		  "name": "ProposalCancelled",
		  "type": "event"
		},
		{
		  "anonymous": false,
		  "inputs": [
			{
			  "indexed": true,
			  "internalType": "address",
			  "name": "propInitiator",
			  "type": "address"
			},
			{
			  "indexed": true,
			  "internalType": "string",
			  "name": "topic",
			  "type": "string"
			},
			{
			  "indexed": true,
			  "internalType": "uint256",
			  "name": "time",
			  "type": "uint256"
			}
		  ],
		  "name": "ProposalCreated",
		  "type": "event"
		},
		{
		  "anonymous": false,
		  "inputs": [
			{
			  "indexed": true,
			  "internalType": "address",
			  "name": "voter",
			  "type": "address"
			},
			{
			  "indexed": true,
			  "internalType": "uint256",
			  "name": "proposalID",
			  "type": "uint256"
			},
			{
			  "indexed": true,
			  "internalType": "uint256",
			  "name": "voteP",
			  "type": "uint256"
			}
		  ],
		  "name": "ProposalVoted",
		  "type": "event"
		},
		{
		  "anonymous": false,
		  "inputs": [
			{
			  "indexed": false,
			  "internalType": "address",
			  "name": "_USDC",
			  "type": "address"
			},
			{
			  "indexed": true,
			  "internalType": "address",
			  "name": "manager",
			  "type": "address"
			},
			{
			  "indexed": true,
			  "internalType": "address",
			  "name": "crowdFundAddr",
			  "type": "address"
			},
			{
			  "indexed": true,
			  "internalType": "address",
			  "name": "owner",
			  "type": "address"
			}
		  ],
		  "name": "newCrowdfundDetails",
		  "type": "event"
		},
		{
		  "stateMutability": "payable",
		  "type": "fallback"
		},
		{
		  "inputs": [],
		  "name": "Admin",
		  "outputs": [
			{
			  "internalType": "address",
			  "name": "",
			  "type": "address"
			}
		  ],
		  "stateMutability": "view",
		  "type": "function"
		},
		{
		  "inputs": [
			{
			  "internalType": "address",
			  "name": "_memberAddress",
			  "type": "address"
			}
		  ],
		  "name": "approveApplicant",
		  "outputs": [],
		  "stateMutability": "nonpayable",
		  "type": "function"
		},
		{
		  "inputs": [
			{
			  "internalType": "uint256",
			  "name": "_proposalID",
			  "type": "uint256"
			}
		  ],
		  "name": "approveProposal",
		  "outputs": [],
		  "stateMutability": "nonpayable",
		  "type": "function"
		},
		{
		  "inputs": [
			{
			  "internalType": "uint256",
			  "name": "_proposalID",
			  "type": "uint256"
			}
		  ],
		  "name": "cancelProposal",
		  "outputs": [],
		  "stateMutability": "nonpayable",
		  "type": "function"
		},
		{
		  "inputs": [
			{
			  "internalType": "address",
			  "name": "newAdmin",
			  "type": "address"
			}
		  ],
		  "name": "changeAdmin",
		  "outputs": [],
		  "stateMutability": "nonpayable",
		  "type": "function"
		},
		{
		  "inputs": [],
		  "name": "contractBalance",
		  "outputs": [
			{
			  "internalType": "uint256",
			  "name": "",
			  "type": "uint256"
			}
		  ],
		  "stateMutability": "view",
		  "type": "function"
		},
		{
		  "inputs": [
			{
			  "internalType": "string",
			  "name": "_topic",
			  "type": "string"
			},
			{
			  "internalType": "string",
			  "name": "_description",
			  "type": "string"
			},
			{
			  "internalType": "uint256",
			  "name": "amount",
			  "type": "uint256"
			},
			{
			  "internalType": "uint256",
			  "name": "_deadline",
			  "type": "uint256"
			}
		  ],
		  "name": "createProposal",
		  "outputs": [],
		  "stateMutability": "nonpayable",
		  "type": "function"
		},
		{
		  "inputs": [],
		  "name": "depositIntoDAO",
		  "outputs": [],
		  "stateMutability": "payable",
		  "type": "function"
		},
		{
		  "inputs": [],
		  "name": "getAllProposalCount",
		  "outputs": [
			{
			  "internalType": "uint256",
			  "name": "",
			  "type": "uint256"
			}
		  ],
		  "stateMutability": "view",
		  "type": "function"
		},
		{
		  "inputs": [],
		  "name": "getAllProposals",
		  "outputs": [
			{
			  "components": [
				{
				  "internalType": "uint256",
				  "name": "proposalID",
				  "type": "uint256"
				},
				{
				  "internalType": "string",
				  "name": "topic",
				  "type": "string"
				},
				{
				  "internalType": "bytes",
				  "name": "description",
				  "type": "bytes"
				},
				{
				  "internalType": "address",
				  "name": "proposalInitiator",
				  "type": "address"
				},
				{
				  "internalType": "uint256",
				  "name": "amountProposed",
				  "type": "uint256"
				},
				{
				  "internalType": "uint256",
				  "name": "votes",
				  "type": "uint256"
				},
				{
				  "internalType": "bool",
				  "name": "approved",
				  "type": "bool"
				},
				{
				  "internalType": "bool",
				  "name": "cancelled",
				  "type": "bool"
				},
				{
				  "internalType": "bool",
				  "name": "created",
				  "type": "bool"
				},
				{
				  "internalType": "uint256",
				  "name": "totalVoteCount",
				  "type": "uint256"
				},
				{
				  "internalType": "uint256",
				  "name": "cancellationTime",
				  "type": "uint256"
				},
				{
				  "internalType": "uint256",
				  "name": "approvedTime",
				  "type": "uint256"
				},
				{
				  "internalType": "uint256",
				  "name": "deadline",
				  "type": "uint256"
				},
				{
				  "internalType": "address[]",
				  "name": "voters",
				  "type": "address[]"
				}
			  ],
			  "internalType": "struct DAO.Proposals[]",
			  "name": "Pl",
			  "type": "tuple[]"
			}
		  ],
		  "stateMutability": "view",
		  "type": "function"
		},
		{
		  "inputs": [
			{
			  "internalType": "uint256",
			  "name": "_proposalID",
			  "type": "uint256"
			}
		  ],
		  "name": "getAllVoters",
		  "outputs": [
			{
			  "internalType": "address[]",
			  "name": "",
			  "type": "address[]"
			}
		  ],
		  "stateMutability": "view",
		  "type": "function"
		},
		{
		  "inputs": [],
		  "name": "getDAOMemberCount",
		  "outputs": [
			{
			  "internalType": "uint256",
			  "name": "",
			  "type": "uint256"
			}
		  ],
		  "stateMutability": "view",
		  "type": "function"
		},
		{
		  "inputs": [
			{
			  "internalType": "uint256",
			  "name": "_proposalId",
			  "type": "uint256"
			}
		  ],
		  "name": "getProposalDeadline",
		  "outputs": [
			{
			  "internalType": "uint256",
			  "name": "",
			  "type": "uint256"
			}
		  ],
		  "stateMutability": "view",
		  "type": "function"
		},
		{
		  "inputs": [
			{
			  "internalType": "uint256",
			  "name": "_proposalID",
			  "type": "uint256"
			}
		  ],
		  "name": "getProposalStatus",
		  "outputs": [
			{
			  "internalType": "string",
			  "name": "",
			  "type": "string"
			}
		  ],
		  "stateMutability": "view",
		  "type": "function"
		},
		{
		  "inputs": [
			{
			  "internalType": "string",
			  "name": "_name",
			  "type": "string"
			}
		  ],
		  "name": "joinDAO",
		  "outputs": [],
		  "stateMutability": "nonpayable",
		  "type": "function"
		},
		{
		  "inputs": [
			{
			  "internalType": "uint256",
			  "name": "_minimumrequiredDAOTokenAmount",
			  "type": "uint256"
			},
			{
			  "internalType": "uint256",
			  "name": "_maximumrequiredDAOTokenAmount",
			  "type": "uint256"
			}
		  ],
		  "name": "minandmaxDAOtokenrequired",
		  "outputs": [],
		  "stateMutability": "nonpayable",
		  "type": "function"
		},
		{
		  "inputs": [
			{
			  "internalType": "uint256",
			  "name": "tokenAmount",
			  "type": "uint256"
			}
		  ],
		  "name": "purchaseDAOToken",
		  "outputs": [],
		  "stateMutability": "payable",
		  "type": "function"
		},
		{
		  "inputs": [
			{
			  "internalType": "address",
			  "name": "_memberAddress",
			  "type": "address"
			}
		  ],
		  "name": "rejectApplicant",
		  "outputs": [],
		  "stateMutability": "nonpayable",
		  "type": "function"
		},
		{
		  "inputs": [],
		  "name": "showAllDAOMemberDetails",
		  "outputs": [
			{
			  "components": [
				{
				  "internalType": "string",
				  "name": "name",
				  "type": "string"
				},
				{
				  "internalType": "address",
				  "name": "memberAddress",
				  "type": "address"
				},
				{
				  "internalType": "uint64",
				  "name": "memberID",
				  "type": "uint64"
				},
				{
				  "internalType": "bool",
				  "name": "joined",
				  "type": "bool"
				},
				{
				  "internalType": "uint256",
				  "name": "timeJoined",
				  "type": "uint256"
				}
			  ],
			  "internalType": "struct DAO.DAOMemberInfo[]",
			  "name": "memberInfo",
			  "type": "tuple[]"
			}
		  ],
		  "stateMutability": "view",
		  "type": "function"
		},
		{
		  "inputs": [],
		  "name": "usdcBalance",
		  "outputs": [
			{
			  "internalType": "uint256",
			  "name": "",
			  "type": "uint256"
			}
		  ],
		  "stateMutability": "view",
		  "type": "function"
		},
		{
		  "inputs": [
			{
			  "internalType": "address",
			  "name": "memberAddr",
			  "type": "address"
			}
		  ],
		  "name": "viewDAOMemberInfo",
		  "outputs": [
			{
			  "components": [
				{
				  "internalType": "string",
				  "name": "name",
				  "type": "string"
				},
				{
				  "internalType": "address",
				  "name": "memberAddress",
				  "type": "address"
				},
				{
				  "internalType": "uint64",
				  "name": "memberID",
				  "type": "uint64"
				},
				{
				  "internalType": "bool",
				  "name": "joined",
				  "type": "bool"
				},
				{
				  "internalType": "uint256",
				  "name": "timeJoined",
				  "type": "uint256"
				}
			  ],
			  "internalType": "struct DAO.DAOMemberInfo",
			  "name": "",
			  "type": "tuple"
			}
		  ],
		  "stateMutability": "view",
		  "type": "function"
		},
		{
		  "inputs": [
			{
			  "internalType": "uint256",
			  "name": "prosalID",
			  "type": "uint256"
			}
		  ],
		  "name": "viewProposal",
		  "outputs": [
			{
			  "components": [
				{
				  "internalType": "uint256",
				  "name": "proposalID",
				  "type": "uint256"
				},
				{
				  "internalType": "string",
				  "name": "topic",
				  "type": "string"
				},
				{
				  "internalType": "bytes",
				  "name": "description",
				  "type": "bytes"
				},
				{
				  "internalType": "address",
				  "name": "proposalInitiator",
				  "type": "address"
				},
				{
				  "internalType": "uint256",
				  "name": "amountProposed",
				  "type": "uint256"
				},
				{
				  "internalType": "uint256",
				  "name": "votes",
				  "type": "uint256"
				},
				{
				  "internalType": "bool",
				  "name": "approved",
				  "type": "bool"
				},
				{
				  "internalType": "bool",
				  "name": "cancelled",
				  "type": "bool"
				},
				{
				  "internalType": "bool",
				  "name": "created",
				  "type": "bool"
				},
				{
				  "internalType": "uint256",
				  "name": "totalVoteCount",
				  "type": "uint256"
				},
				{
				  "internalType": "uint256",
				  "name": "cancellationTime",
				  "type": "uint256"
				},
				{
				  "internalType": "uint256",
				  "name": "approvedTime",
				  "type": "uint256"
				},
				{
				  "internalType": "uint256",
				  "name": "deadline",
				  "type": "uint256"
				},
				{
				  "internalType": "address[]",
				  "name": "voters",
				  "type": "address[]"
				}
			  ],
			  "internalType": "struct DAO.Proposals",
			  "name": "",
			  "type": "tuple"
			}
		  ],
		  "stateMutability": "view",
		  "type": "function"
		},
		{
		  "inputs": [
			{
			  "internalType": "uint256",
			  "name": "ID",
			  "type": "uint256"
			}
		  ],
		  "name": "voteCount",
		  "outputs": [
			{
			  "internalType": "uint256",
			  "name": "",
			  "type": "uint256"
			}
		  ],
		  "stateMutability": "view",
		  "type": "function"
		},
		{
		  "inputs": [
			{
			  "internalType": "uint256",
			  "name": "prosalID",
			  "type": "uint256"
			}
		  ],
		  "name": "voteProposal",
		  "outputs": [],
		  "stateMutability": "nonpayable",
		  "type": "function"
		},
		{
		  "stateMutability": "payable",
		  "type": "receive"
		}
	  ]