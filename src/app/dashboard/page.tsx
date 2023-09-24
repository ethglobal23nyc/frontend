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
import { uniq } from "lodash";

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
  {
    contractAddress: "0xB3C6346EC7ab88b098defB751B7401B5f7d1289F",
    name: "micky mouse",
    categories: ["cartoon", "mouse"],
    bounty: 120,
  },
  {
    contractAddress: "0xA2B9842EC7ab88b098defB751B7401B5f7k6789L",
    name: "dark knight",
    categories: ["movie", "batman"],
    bounty: 280,
  },
  {
    contractAddress: "0xH43K546EC7ab88b098defB751B7401B5f6d34M9N",
    name: "toy story",
    categories: ["animation", "toys"],
    bounty: 350,
  },
  {
    contractAddress: "0xX9J8456EC7ab88b098defB751B7401B5f6h234Y8X",
    name: "fast & furious",
    categories: ["movie", "cars"],
    bounty: 220,
  },
  {
    contractAddress: "0xZHK8676EC7ab88b098defB751B7401B5f5d897PL",
    name: "harry potter",
    categories: ["book", "wizard"],
    bounty: 500,
  },
  {
    contractAddress: "0x1234567890123456789012345678901234567891",
    name: "Frozen",
    categories: ["animation", "princess"],
    bounty: 125,
  },
  {
    contractAddress: "0x1234567890123456789012345678901234567892",
    name: "star wars",
    categories: ["sci-fi", "space"],
    bounty: 200,
  },
  {
    contractAddress: "0x1234567890123456789012345678901234567893",
    name: "avengers",
    categories: ["superheroes", "marvel"],
    bounty: 250,
  },
  {
    contractAddress: "0x1234567890123456789012345678901234567894",
    name: "spider-man",
    categories: ["superheroes", "marvel"],
    bounty: 175,
  },
  {
    contractAddress: "0x1234567890123456789012345678901234567895",
    name: "captain america",
    categories: ["superheroes", "marvel"],
    bounty: 180,
  },
  {
    contractAddress: "0x1234567890123456789012345678901234567896",
    name: "iron man",
    categories: ["superheroes", "marvel"],
    bounty: 195,
  },
  {
    contractAddress: "0x1234567890123456789012345678901234567897",
    name: "hulk",
    categories: ["superheroes", "marvel"],
    bounty: 145,
  },
  {
    contractAddress: "0x1234567890123456789012345678901234567898",
    name: "thor",
    categories: ["superheroes", "marvel"],
    bounty: 160,
  },
  {
    contractAddress: "0x1234567890123456789012345678901234567899",
    name: "black panther",
    categories: ["superheroes", "marvel"],
    bounty: 189,
  },
  {
    contractAddress: "0x1234567890123456789012345678901234567890",
    name: "captain marvel",
    categories: ["superheroes", "marvel"],
    bounty: 172,
  },
  {
    contractAddress: "0x1234567890123456789012345678901234567889",
    name: "wolverine",
    categories: ["superheroes", "marvel"],
    bounty: 200,
  },
  {
    contractAddress: "0x1234567890123456789012345678901234567888",
    name: "deadpool",
    categories: ["superheroes", "marvel"],
    bounty: 210,
  },
  {
    contractAddress: "0x1234567890123456789012345678901234567887",
    name: "lord of the rings",
    categories: ["fantasy", "adventure"],
    bounty: 220,
  },
  {
    contractAddress: "0x1234567890123456789012345678901234567886",
    name: "the hobbit",
    categories: ["fantasy", "adventure"],
    bounty: 205,
  },
  {
    contractAddress: "0x1234567890123456789012345678901234567885",
    name: "game of thrones",
    categories: ["fantasy", "drama"],
    bounty: 250,
  },
  {
    contractAddress: "0x1234567890123456789012345678901234567884",
    name: "stranger things",
    categories: ["sci-fi", "drama"],
    bounty: 140,
  },
  {
    contractAddress: "0x1234567890123456789012345678901234567883",
    name: "pokemon",
    categories: ["cartoon", "adventure"],
    bounty: 120,
  },
  {
    contractAddress: "0x1234567890123456789012345678901234567882",
    name: "dragon ball",
    categories: ["anime", "manga"],
    bounty: 130,
  },
  {
    contractAddress: "0x1234567890123456789012345678901234567881",
    name: "One Piece",
    categories: ["anime", "manga"],
    bounty: 150,
  },
  {
    contractAddress: "0x1234567890123456789012345678901234567880",
    name: "Naruto",
    categories: ["anime", "manga"],
    bounty: 160,
  },
];

const getCategories = (data: SponsorItem[]): string[] => {
  const categories: string[] = [];

  data.forEach((item) => {
    categories.push(...item.categories);
  });

  const uniqueCategories = uniq(categories);
  return uniqueCategories;
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
      <h1 className="font-bold text-4xl pl-20 pt-10">Data Marketplace</h1>
      <main className="flex flex-col flex-1 py-10 px-20 text-center">
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
