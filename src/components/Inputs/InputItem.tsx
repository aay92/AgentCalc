import { useState } from "react";

type InputItemProps = {
  name: string;
  defaultValue: number;
  title: string;
  placeholder: string;
  onChangeInput: Function;
};

export default function InputItem({
  name,
  defaultValue,
  title,
  placeholder,
  onChangeInput,
}: InputItemProps) {
  const defaultValueNum = { defaultValue };
  const [totalValue, setTotalVlaue] = useState(0);

  const handleChange = (e: any) => {
    onChangeInput(e);
    const num = Number(e.target.value) * defaultValueNum.defaultValue;
    setTotalVlaue(num);
  };

  return (
    <div>
      <div className="flex flex-row gap-2 mx-2 max-[500px]:flex-col max-[500px]:gap-0">
        <p className="text-stone-700 font-semibold max-[500px]:text-xl ">
          {title}
        </p>
        <input
          name={name}
          type="number"
          pattern="[0-9]*"
          placeholder={placeholder}
          className="text-center rounded-lg bg-white text-stone-700 font-semibold max-sm:h-7"
          onChange={handleChange}
        />
        <p className="text-red-500 font-semibold text-lg max-[500px]:text-2xl ">
          {totalValue} <span className="text-stone-700 font-semibold">р.</span>
        </p>
      </div>
    </div>
  );
}
