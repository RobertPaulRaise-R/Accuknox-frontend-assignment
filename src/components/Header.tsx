import { IoSearchOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { SyntheticEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { searchWidgets } from "../reducers/widget/widgetSlice";
import SearchResult from "./SearchResult";

function Header() {
  const [query, setQuery] = useState<string>("");
  const dispatch = useDispatch();

  function handleOnChange(e: SyntheticEvent<HTMLInputElement>) {
    const query = e.currentTarget.value;
    setQuery(query);
    dispatch(searchWidgets(query));
  }

  return (
    <header className="py-2 px-3 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="text-indigo-200 text-sm">Home</span>
        <IoIosArrowForward />
        <span className="text-indigo-900 text-sm">Dashboard V2</span>
      </div>
      <form className="relative flex items-center gap-1 w-96 bg-indigo-100 px-3 py-1 rounded-md">
        <IoSearchOutline />
        <input
          type="text"
          placeholder="Search anything"
          value={query}
          onChange={(e) => handleOnChange(e)}
          className="outline-none bg-indigo-100"
        />
        {query && (
          <div className="absolute top-10">
            <SearchResult />
          </div>
        )}
      </form>
    </header>
  );
}

export default Header;
