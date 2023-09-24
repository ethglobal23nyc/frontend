"use client";

import { CategorySearch } from "@/components/categories-search";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAccount } from "wagmi";

export interface SponsorItem {
  contractAddress: string;
  name: string;
  categories: string[];
  bounty: number;
}

const fakeData: SponsorItem[] = [
  {
    contractAddress: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
    name: "hello kitty",
    categories: ["cat", "kitty"],
    bounty: 100,
  },
  {
    contractAddress: "0x71C7656EC7ab88b098defB751B7401cae6d8976F",
    name: "dogs",
    categories: ["dog", "puppy"],
    bounty: 200,
  },
];

const getCategories = (data: SponsorItem[]): string[] => {
  const categories: string[] = [];

  data.forEach((item) => {
    categories.push(...item.categories);
  });

  return categories;
};

export default function Page() {
  const router = useRouter();
  const { address, isConnected } = useAccount();
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  // useEffect(() => {
  //   if (!isConnected) {
  //     router.push("/");
  //   }
  // }, []);

  console.log(selectedCategory);
  return (
    <div className="flex flex-col container pt-24 py-2">
      <h1 className="font-bold text-6xl pl-20 pt-10">Data Marketplace</h1>
      <main className="flex flex-col flex-1 py-20 px-20 text-center">
        <CategorySearch
          categories={getCategories(fakeData)}
          handleSelectedCategory={setSelectedCategory}
        />
        <Table className="">
          <TableCaption>Open Sponsor Models</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Name</TableHead>
              <TableHead>Categories</TableHead>
              <TableHead className="text-right">Bounty</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {fakeData.map((item, idx) => {
              if (item.categories.includes(selectedCategory)) {
                return (
                  <TableRow key={idx}>
                    <TableCell className="font-medium">{item.name}</TableCell>
                    <TableCell>{item.categories.join(", ")}</TableCell>
                    <TableCell className="text-right">{item.bounty}</TableCell>
                  </TableRow>
                );
              } else {
                return null;
              }
            })}
            {!selectedCategory &&
              fakeData.map((item, idx) => (
                <TableRow
                  key={idx}
                  className="cursor-pointer"
                  onClick={() => {
                    router.push(`/contract/${item.contractAddress}`);
                  }}
                >
                  <TableCell className="font-medium">{item.name}</TableCell>
                  <TableCell>{item.categories.join(", ")}</TableCell>
                  <TableCell className="text-right">{item.bounty}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </main>
    </div>
  );
}
