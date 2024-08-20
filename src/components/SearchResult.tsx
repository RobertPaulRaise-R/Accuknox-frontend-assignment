import { useSelector } from "react-redux";
import { RootState } from "../reducers/store";

function SearchResult() {
  const widgets = useSelector((state: RootState) => state.widget.searchResults);

  return (
    <>
      {widgets && widgets.length > 0 && (
        <ul className="w-96 bg-white px-3 py-2">
          {widgets.map((widget, index) => (
            <li
              key={index}
              className="bg-indigo-100 px-3 py-2 mb-2 border border-stone-500 rounded-md"
            >
              {widget}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default SearchResult;
