import { createContext, ReactNode, useState } from "react";

export interface WidgetContextType {
  isOpen: boolean;
  setIsOpen: any;
  activeTab: number;
  setActiveTab: any;
}

const WidgetContext = createContext<WidgetContextType | any>(null);

const WidgetContextProvider = ({ children }: { children: ReactNode }) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  console.log(activeTab);

  function openWidget(curTab: number) {
    setIsOpen(!isOpen);
    setActiveTab(curTab);
  }

  return (
    <WidgetContext.Provider
      value={{ activeTab, setActiveTab, isOpen, setIsOpen, openWidget }}
    >
      {children}
    </WidgetContext.Provider>
  );
};

export { WidgetContext, WidgetContextProvider };
