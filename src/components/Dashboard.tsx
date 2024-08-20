import Widget from "./Widget";
import Button from "./Button";
import { useContext } from "react";

import { FiPlus } from "react-icons/fi";
import { BiRefresh } from "react-icons/bi";
import { RxDotsVertical } from "react-icons/rx";
import { WidgetContext, WidgetContextType } from "../contexts/WidgetContext";

function Dashboard() {
  const { setIsOpen } = useContext<WidgetContextType>(WidgetContext);

  return (
    <main className="px-8 py-4 bg-indigo-50">
      <div className="flex items-center justify-between">
        <strong>CNAPP Dashboard</strong>
        <div className="flex gap-3">
          <Button onClick={() => setIsOpen((el: any) => !el)}>
            Add widget
            <FiPlus />
          </Button>

          <Button>
            <BiRefresh size={20} />
          </Button>

          <Button>
            <RxDotsVertical />
          </Button>
        </div>
      </div>

      <Widget />
    </main>
  );
}

export default Dashboard;
