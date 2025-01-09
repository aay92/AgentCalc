type ButtonProps = {
  title: string;
  color: string;
  hoverColor: string;
  onClickButton: any;
};

export default function Button({
  title,
  color,
  hoverColor,
  onClickButton,
}: ButtonProps) {
  return (
    <div
      className={`w-[230px] ${color} ${hoverColor} m-2 p-3 rounded-[20px] text-white font-bold `}>
      <button
        onClick={() => onClickButton()}
        className="p-2 text-white font-bold text-lg focus:outline-none hover:border-transparent ">
        {title}
      </button>
    </div>
  );
}
