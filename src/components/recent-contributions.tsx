"use client";

import { useEffect } from "react";
import { useEnsAddress } from "wagmi";

export default function RecentContributions() {
  const name = "vitalik.eth";
  const ensName = useEnsAddress({ name, chainId: 1 });

  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">vitalik.eth</p>
          <p className="text-sm text-muted-foreground">
            {ensName.isLoading ? (
              <p>...Loading</p>
            ) : ensName.isSuccess ? (
              ensName.data
            ) : (
              "Error"
            )}
          </p>
        </div>
        <div className="ml-auto font-medium">+$1,999.00</div>
      </div>
      <div className="flex items-center">
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">OpenAI</p>
          <p className="text-sm text-muted-foreground">openai.eth</p>
        </div>
        <div className="ml-auto font-medium">+$39.00</div>
      </div>
      <div className="flex items-center">
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">WalletConnect</p>
          <p className="text-sm text-muted-foreground">walletconnect.eth</p>
        </div>
        <div className="ml-auto font-medium">+$299.00</div>
      </div>
      <div className="flex items-center">
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Filecoin</p>
          <p className="text-sm text-muted-foreground">filecoin.eth</p>
        </div>
        <div className="ml-auto font-medium">+$99.00</div>
      </div>
      <div className="flex items-center">
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Lilypad</p>
          <p className="text-sm text-muted-foreground">lilypad.eth</p>
        </div>
        <div className="ml-auto font-medium">+$39.00</div>
      </div>
    </div>
  );
}
