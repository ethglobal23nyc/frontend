"use client";
import { useAccount } from "wagmi";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  const router = useRouter();

  const { address, isConnected } = useAccount();

  // useEffect(() => {
  //   if (isConnected) {
  //     router.push("/dashboard");
  //   }
  // }, [isConnected, router]);

  return (
    <main className="flex h-screen flex-col items-center justify-around p-24">
      <div className="absolute top-10 right-10"></div>
      <h1 className="mb-4 pt-20 items-center justify-center text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Welcome to DEML!
      </h1>
      <h2 className="text-secondary-foreground leading-tight tracking-tighter">
        A blockchain marketplace where you get paid for help training ML models
        and don’t need to share your data
      </h2>
      <Button>
        <Link href="/dashboard">See open sponsor models</Link>
      </Button>
    </main>
  );
}
