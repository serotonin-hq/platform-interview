import { NoResults, SearchResult } from "@/components/ui/search";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Home() {
  return (
    <div className="grid grid-cols-1 p-20 grid-rows-[auto,auto] gap-4 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl font-extrabold">Platform</h1>
      <form>
        <div className="pb-2">
          <Label className="sr-only">Search</Label>
          <Input
            id="search"
            name="search"
            placeholder="Search..."
            className="p-6 md:text-md"
          />
        </div>
        <div>
          {/* Place search results here */}
        </div>
      </form>
    </div>
  );
}