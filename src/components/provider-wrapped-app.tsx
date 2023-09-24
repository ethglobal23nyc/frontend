"use client";
import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Button, Web3Modal } from "@web3modal/react";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { arbitrum, mainnet, polygon, filecoin } from "wagmi/chains";

const chains = [arbitrum, mainnet, polygon, filecoin];
const projectId = process.env.walletConnectProjectId!;

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient,
});
const ethereumClient = new EthereumClient(wagmiConfig, chains);

export default function ProviderWrappedApp({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>
      <div className="absolute top-10 right-10">
        <Web3Button />
      </div>
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  );
}
