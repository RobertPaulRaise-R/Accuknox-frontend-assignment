import { useContext } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../reducers/store";
import { WidgetContext } from "../contexts/WidgetContext";

function Tab() {
  const data = useSelector((state: RootState) =>
    Object.keys(state.widget.categories)
  );
  const { activeTab, setActiveTab } = useContext(WidgetContext);

  return (
    <div>
      <div className="flex gap-2">
        {data.map((tab, index) => {
          return (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`${
                activeTab === index ? "underline text-blue-800" : ""
              } px-3 `}
            >
              {tab}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Tab;
