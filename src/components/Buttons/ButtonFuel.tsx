type ButtonFuelProps = {
  title: string;
  subtitle: string;
  color: string;
  hoverColor: string;
  onClickButton: any;
};

export default function ButtonFuel({
  title,
  subtitle,
  color,
  hoverColor,
  onClickButton,
}: ButtonFuelProps) {
  const returnTitleButon = () => {
    onClickButton(title);
  };

  return (
    <div
      className={`h-auto w-[180px] ${color} ${hoverColor} m-2 rounded-[20px] text-white font-bold max-sm:w-11/12`}>
      <button
        onClick={() => returnTitleButon()}
        className="w-full h-full rounded-[20px] p-2 text-white font-bold text-lg ">
        <p className="bg-red-600 rounded-lg mx-10 px-2 py-1 text-sm  max-sm:mx-20">
          АИ-{title}
        </p>
        <p className="text-2xl">{subtitle}</p>
      </button>
    </div>
  );
}
