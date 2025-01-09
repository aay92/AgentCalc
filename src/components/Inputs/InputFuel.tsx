type InputFuelProps = {
  name: string;
  title: string;
  placeholder: string;
  onChangeInput: Function;
};

export default function InputFuel({
  name,
  title,
  placeholder,
  onChangeInput,
}: InputFuelProps) {
  const handleChange = (e: any) => {
    onChangeInput(e);
  };

  return (
    <div>
      <div className="flex flex-row gap-2 mx-2">
        <p className="text-stone-700 font-semibold">{title}</p>
        <input
          name={name}
          type="number"
          pattern="[0-9]*"
          placeholder={placeholder}
          className="text-center rounded-lg bg-white text-stone-700 font-semibold"
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
