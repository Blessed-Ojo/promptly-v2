import { Search } from "lucide-react";
import SearchFormReset from "./SearchFormReset";
import { Button } from "./ui/button";

const Searchform = ({ query }: { query?: string }) => {
  return (
    <form action="/" className="search-form">
      <input
        name="query"
        defaultValue={query}
        className="search-input"
        placeholder="Search Startups"
      />
      <div className="flex gap-2 ">
        {query && <SearchFormReset />}
        <Button type="submit" className="search-btn text-white">
          <Search className=" size-5" />
        </Button>
      </div>
    </form>
  );
};

export default Searchform;
