import ProviderWrappedApp from "@/components/provider-wrapped-app";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Web3Button } from "@web3modal/react";

interface Props {
  icon?: "show" | "hide";
  label?: string;
  balance?: "show" | "hide";
}

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DEML",
  description: "Decentralized Machine Learning",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ProviderWrappedApp>{children}</ProviderWrappedApp>
      </body>
    </html>
  );
}
