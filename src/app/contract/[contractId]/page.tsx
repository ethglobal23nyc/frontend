"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { CheckIcon } from "lucide-react";

const fakeContract = {
  transactions: [
    {
      improvement: 10,
      transactionHash: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
      timestamp: "2023-09-23",
      from: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
      to: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
      data: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
      bounty: 20,
    },
    {
      improvement: 15,
      transactionHash: "0x8127656EC7ab88b098defB751B7401B5f6d89321",
      timestamp: "2023-09-23",
      from: "0x8127656EC7ab88b098defB751B7401B5f6d89321",
      to: "0x8127656EC7ab88b098defB751B7401B5f6d89321",
      data: "0x8127656EC7ab88b098defB751B7401B5f6d89321",
      bounty: 50,
    },
    {
      improvement: 20,
      transactionHash: "0x3337656EC7ab88b098defB751B7401B5f6d89987",
      timestamp: "2023-09-23",
      from: "0x3337656EC7ab88b098defB751B7401B5f6d89987",
      to: "0x3337656EC7ab88b098defB751B7401B5f6d89987",
      data: "0x3337656EC7ab88b098defB751B7401B5f6d89987",
      bounty: 30,
    },
  ],
  contract: {
    contractAddress: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
    name: "hello kitty",
    categories: ["cat", "kitty"],
    bounty: 100,
  },
};

export default function Page() {
  return (
    <div className="container items-center justify-center mt-24">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>{fakeContract.contract.name}</CardTitle>
          <CardDescription>Improved by 20%</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <p className="text-bold leading-tight">
            Contract Address: {fakeContract.contract.contractAddress}
          </p>
          <p className="text-bold leading-tight">
            Bounty: {fakeContract.contract.bounty}
          </p>
          <p className="text-bold leading-tight">
            Categories: {fakeContract.contract.categories.join(", ")}
          </p>
          <h2 className="font-bold text-md leading-tight">Transactions</h2>
          <Table>
            <TableCaption>A list of your recent improvements.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Timestamp</TableHead>
                <TableHead>Tx Hash</TableHead>
                <TableHead>Improvement</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {fakeContract.transactions.map((tx) => (
                <TableRow key={tx.transactionHash}>
                  <TableCell className="font-medium">{tx.timestamp}</TableCell>
                  <TableCell>{tx.transactionHash}</TableCell>
                  <TableCell>{tx.improvement}</TableCell>
                  <TableCell className="text-right">{tx.bounty}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter>
          <Button className="w-full">
            <CheckIcon className="mr-2 h-4 w-4" /> Contribute to model
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
