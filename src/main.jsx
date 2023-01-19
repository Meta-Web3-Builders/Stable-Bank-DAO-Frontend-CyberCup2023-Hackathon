import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultWallets,
  RainbowKitProvider,
  midnightTheme,
} from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "animate.css";

const alchemyId = import.meta.env.VITE_GOERLI_ALCHEMY_ID;
const { provider, chains } = configureChains(
  [chain.goerli],
  [
    jsonRpcProvider({
      rpc: (chain) => ({
        http: `https://eth-goerli.g.alchemy.com/v2/${alchemyId}`,
        webSocket: `wss://eth-goerli.g.alchemy.com/v2/${alchemyId}`,
      }),
    }),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "Stable Bank DAO",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} theme={midnightTheme()}>
        <ToastContainer />
        <App />
      </RainbowKitProvider>
    </WagmiConfig>
  </React.StrictMode>
);
