import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick?: any;
}

function Button(props: Props) {
  return (
    <button
      onClick={props.onClick}
      className="bg-white rounded-md border flex items-center gap-2 border-stone-300 text-sm px-2 py-1"
    >
      {props.children}
    </button>
  );
}

export default Button;
