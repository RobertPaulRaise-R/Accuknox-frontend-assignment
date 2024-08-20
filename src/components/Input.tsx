interface Input {
  placeholder?: string;
  type: string;
  value: string;
  setValue: any;
}

function Input({ placeholder, type, value, setValue }: Input) {
  // const [value, setValue] = useState<string>("");

  return (
    <input
      className="px-3 py-2 outline-none placeholder:text-stone-600"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder={placeholder}
      type={type}
    />
  );
}

export default Input;
