// import { Categories } from "../reducers/widget/widgetSlice";
import Button from "./Button";
import { WidgetContext } from "../contexts/WidgetContext";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../reducers/store";

import { FiPlus } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { removeWidget, WidgetType } from "../reducers/widget/widgetSlice";
import { useContext } from "react";
// const categories: Categories = {
//   CSPM: [
//     { name: "Cloud Accounts", data: "No data available" },
//     { name: "Cloud Account Risk Management", data: "None" },
//   ],
//   CWPP: [
//     {
//       name: "Top 5 NameSpace Specific Alerts",
//       data: "No graph data available",
//     },
//   ],
//   RegistyScan: [
//     { name: "Image Risk Assesment", data: "1470 Total vulnerabilites" },
//   ],
// };

function Widget() {
  const { openWidget } = useContext(WidgetContext);
  const categories = useSelector((state: RootState) => state.widget.categories);
  const data = useSelector((state: RootState) =>
    Object.keys(state.widget.categories)
  );
  const dispatch = useDispatch();

  // function deleteWidget(category: string, widget: string) {
  //   console.log(category, widget);
  //   dispatch({
  //     type: "widget/removeWidget",
  //     payload: {
  //       category,
  //       widget,
  //     },
  //   });
  // }

  return (
    <div className="flex flex-col">
      {Object.keys(categories).map((category) => (
        <div key={category} className="mt-5">
          <h2>
            <strong>{category}</strong>
          </h2>
          <ul className="grid grid-cols-3 gap-5 py-2">
            {categories[category].map((widget: WidgetType, index) => (
              <li
                key={index}
                className="bg-white h-40 px-3 py-2 rounded-2xl shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <strong>{widget.name}:</strong>
                  <IoClose
                    size={20}
                    onClick={() => dispatch(removeWidget({ category, widget }))}
                  />
                </div>
                <p className="text-center pt-10 text-gray-600">{widget.data}</p>
              </li>
            ))}
            <li className="bg-white h-40 px-3 py-2 rounded-2xl shadow-sm flex items-center justify-center">
              <Button onClick={() => openWidget(data.indexOf(category))}>
                Add widget
                <FiPlus />
              </Button>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Widget;
