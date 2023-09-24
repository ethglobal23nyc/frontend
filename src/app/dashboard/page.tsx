"use client";

import { CategorySearch } from "@/components/categories-search";
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
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";

interface SponsorItem {
  name: string;
  categories: string[];
  bounty: number;
}

const fakeData: SponsorItem[] = [
  { name: "hello kitty", categories: ["cat", "kitty"], bounty: 100 },
  { name: "dogs", categories: ["dog", "puppy"], bounty: 200 },
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

  return (
    <div className="flex flex-col min-h-screen py-2">
      <h1 className="font-bold text-6xl pl-20 pt-10">Data Marketplace</h1>
      <main className="flex flex-col flex-1 py-20 px-20 text-center">
        <CategorySearch categories={getCategories(fakeData)} />
        <Table className="w-3/6">
          <TableCaption>Open Sponsor Models</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Name</TableHead>
              <TableHead>Categories</TableHead>
              <TableHead className="text-right">Bounty</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {fakeData.map((item, idx) => (
              <TableRow key={idx}>
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
