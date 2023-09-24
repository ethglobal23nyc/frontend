import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface SponsorItem {
  name: string;
  categories: string[];
  bounty: number;
}

const fakeData: SponsorItem[] = [
  { name: "hello kitty", categories: ["cat", "kitty"], bounty: 100 },
  { name: "dogs", categories: ["dog", "puppy"], bounty: 200 },
];

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen py-2">
      <h1 className="font-bold text-6xl pl-10 pt-8">Data Marketplace</h1>
      <main className="flex flex-col flex-1 py-20 px-20 text-center">
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
