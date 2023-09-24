"use client";

import Image from "next/image";
import { Web3Button } from "@web3modal/react";
import { useAccount } from "wagmi";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  const router = useRouter();

  const { address, isConnected } = useAccount();

  useEffect(() => {
    if (isConnected) {
      router.push("/dashboard");
    }
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="absolute top-10 right-10">
        <Web3Button />
      </div>
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Welcome to DEML!
      </h1>
      <Button>
        <Link href="/dashboard">See open sponsor models</Link>
      </Button>
    </main>
  );
}
