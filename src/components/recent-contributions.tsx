"use client";

import { useEnsAddress, useEnsAvatar } from "wagmi";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function RecentContributions() {
  const name = "vitalik.eth";
  const ensName = useEnsAddress({ name, chainId: 1 });
  const ensAvatar = useEnsAvatar({ name: name, chainId: 1 });

  const pepeName = "pepe.eth";
  const pepeEnsName = useEnsAddress({ name: pepeName, chainId: 1 });
  const pepeEnsAvatar = useEnsAvatar({ name: pepeName, chainId: 1 });

  const gameName = "game.eth";
  const gameEnsName = useEnsAddress({ name: gameName, chainId: 1 });
  const gameEnsAvatar = useEnsAvatar({ name: gameName, chainId: 1 });

  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage
            src={ensAvatar.data ? ensAvatar.data : undefined}
            alt="Avatar"
          />
          <AvatarFallback>OM</AvatarFallback>
        </Avatar>
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
        <Avatar className="h-9 w-9">
          <AvatarImage
            src={pepeEnsAvatar.data ? pepeEnsAvatar.data : undefined}
            alt="Avatar"
          />
          <AvatarFallback>OM</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">pepe.eth</p>
          <p className="text-sm text-muted-foreground">
            {pepeEnsName.isLoading ? (
              <p>...Loading</p>
            ) : pepeEnsName.isSuccess ? (
              pepeEnsName.data
            ) : (
              "Error"
            )}
          </p>
        </div>
        <div className="ml-auto font-medium">+$39.00</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage
            src={gameEnsAvatar.data ? gameEnsAvatar.data : undefined}
            alt="Avatar"
          />
          <AvatarFallback>GG</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">game.eth</p>
          <p className="text-sm text-muted-foreground">
            {gameEnsName.isLoading ? (
              <p>...Loading</p>
            ) : gameEnsName.isSuccess ? (
              gameEnsName.data
            ) : (
              "Error"
            )}
          </p>
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
