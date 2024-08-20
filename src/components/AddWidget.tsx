import { IoClose } from "react-icons/io5";
import Tab from "./Tab";
import { useContext, useState } from "react";
import { WidgetContext } from "../contexts/WidgetContext";
import Input from "./Input";
import { useDispatch, useSelector } from "react-redux";
import { addWidget } from "../reducers/widget/widgetSlice";
import { RootState } from "../reducers/store";

function AddWidget() {
  const categories = useSelector((state: RootState) =>
    Object.keys(state.widget.categories)
  );
  const { isOpen, setIsOpen, activeTab } = useContext(WidgetContext);
  const [name, setName] = useState<string>("");
  const [data, setData] = useState<string>("");
  const dispatch = useDispatch();

  function handleConfirm() {
    dispatch(
      addWidget({ category: categories[activeTab], widget: { name, data } })
    );
    setIsOpen((open: any) => !open);
  }

  return (
    <>
      {isOpen && (
        <div className=" fixed top-0 right-0 min-h-screen bg-gray-100 w-[36rem]">
          <div className="bg-blue-800 flex justify-between px-3 py-1 items-center">
            <span>Add Widget</span>
            <button onClick={() => setIsOpen(!isOpen)}>
              <IoClose />
            </button>
          </div>

          <div className="px-5 py-5">
            <p className="text-sm mb-3">
              Personalise your dashboard by adding the following widget
            </p>
            <Tab />

            <form className="flex flex-col mt-5 gap-3">
              <Input
                type="text"
                placeholder="Widget name"
                value={name}
                setValue={setName}
              />
              <Input
                type="text"
                placeholder="Widget data"
                value={data}
                setValue={setData}
              />
            </form>
          </div>

          <div className="mt-auto flex gap-3  absolute right-5 bottom-5">
            <button
              onClick={() => setIsOpen((el: any) => !el)}
              className="border px-5 py-1 rounded-md text-blue-800 border-indigo-500"
            >
              Cancel
            </button>
            <button
              onClick={() => handleConfirm()}
              className="bg-blue-800 px-5 py-1 rounded-md"
            >
              Confirm
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default AddWidget;
