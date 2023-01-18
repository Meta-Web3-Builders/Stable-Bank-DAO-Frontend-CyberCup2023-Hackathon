import { daoABI } from "../utils/abi/DAO";
import SUSDC from "../utils/abi/SUSDC.json";
import { mintingABI } from "../utils/abi/usdcMinting";
import StableBank from "../utils/abi/StableBank.json";
import { crowdFundFactory } from "../utils/abi/crowdFundFactory";
import education1 from "../assets/education1.jpeg";
import education2 from "../assets/education2.jpeg";
import education3 from "../assets/education3.jpeg";
import health1 from "../assets/health1.jpeg";
import health2 from "../assets/health2.jpeg";
import health3 from "../assets/health3.jpeg";
import sport1 from "../assets/sport1.jpeg";
import sport2 from "../assets/sport2.jpeg";
import sport3 from "../assets/sport3.jpeg";
import tech1 from "../assets/tech1.jpeg";
import tech2 from "../assets/tech2.jpeg";
import travel1 from "../assets/travel1.jpeg";
import travel2 from "../assets/travel2.jpeg";
import finance1 from "../assets/finance1.jpeg";

export const DAO_ADDRESS = "0xeDba6AB3A665B47bFf5cd56dA020df3129cfd2aB";
export const DAO_TOKEN_ADDRESS = "0x5dde1a2a08248FBFf763E0959cB438cf9bc7F5a9"; //
export const sUSDC_TOKEN_ADDRESS = "0x3c034ed7eCb398DB4AcBDbc450863c4e697c2E05"; //
export const CROWDFUND_FACTORY_ADDRESS =
  "0x7075f1815c09D49c55390d68934D730527DF6343"; //
export const MINTING_CONTRACT_ADDRESS =
  "0x2Fc0f681Ea0628A8aaE5244925A9C40EaD6724Ca";
export const DAO_FUNDY_NFT_ADDRESS =
  "0xa0a51210d77b0FA0D896457D202C05b324821bAE"; //

export const DAO_CONTRACT = {
  address: DAO_ADDRESS,
  abi: daoABI,
};

export const sUSDC_MINTING_CONTRACT = {
  address: MINTING_CONTRACT_ADDRESS,
  abi: mintingABI,
};

export const sUSDC_CONTRACT = {
  address: sUSDC_TOKEN_ADDRESS,
  abi: SUSDC.abi,
};

export const DAO_TOKEN_CONTRACT = {
  address: DAO_TOKEN_ADDRESS,
  abi: StableBank.abi,
};

export const CROWDFUND_FACTORY_CONTRACT = {
  address: CROWDFUND_FACTORY_ADDRESS,
  abi: crowdFundFactory,
};

export const shortAccount = (account) => {
  if (account) return account.slice(0, 5) + "..." + account.slice(-5);
};

export const imagesArray = {
  0: [tech1, tech2],
  1: [sport1, sport2, sport3],
  2: [health1, health2, health3],
  3: [finance1],
  4: [education1, education2, education3],
  5: [travel1, travel2],
};

export const getCategory = (val) => {
  return val === 0
    ? "Tech"
    : val === 1
    ? "Sport"
    : val === 2
    ? "Health"
    : val === 3
    ? "Finance"
    : val === 4
    ? "Education"
    : val === 5
    ? "Travel"
    : null;
};
