import * as multiplierConstant from "../../assets/supportFiles/multiplier";
import InputItem from "../Inputs/InputItem";
import { useEffect, useState } from "react";

export default function CalclulatManey() {
  const [inputValues, setInputValues] = useState({
    input50: 0,
    input100: 0,
    input200: 0,
    input500: 0,
    input1000: 0,
    input2000: 0,
    input5000: 0,
    input1: 0,
  });
  const [totalNum, setTotalNum] = useState(0);
  const [showTotlaLabel, setShowTotlaLabel] = useState(false);

  const calulateCost = () => {
    return (
      inputValues.input50 * multiplierConstant.multiplier50 +
      inputValues.input100 * multiplierConstant.multiplier100 +
      inputValues.input200 * multiplierConstant.multiplier200 +
      inputValues.input500 * multiplierConstant.multiplier500 +
      inputValues.input1000 * multiplierConstant.multiplier1000 +
      inputValues.input2000 * multiplierConstant.multiplier2000 +
      inputValues.input5000 * multiplierConstant.multiplier5000 +
      quickCountWithoutZero(inputValues.input1)
    );
  };

  const quickCountWithoutZero = (input: number) => {
    if (input === 0 || input === undefined) {
      return inputValues.input1 * 0;
    } else if (input > 0) {
      return inputValues.input1 * 1;
    }
    return 0;
  };

  const showTotalLabel = (calulateCost: number) => {
    if (calulateCost === 0 || calulateCost === 1) {
      setShowTotlaLabel(false);
    } else {
      setShowTotlaLabel(true);
    }
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    const newValue = Number(value);
    setInputValues({ ...inputValues, [name]: newValue });
  };

  useEffect(() => {
    setTotalNum(calulateCost());
    showTotalLabel(calulateCost());
  }, [handleChange]);

  return (
    <div className="flex flex-col gap-3 items-center bg-gray-400 w-auto h-auto px-3 pb-6 pt-2 rounded-[20px] ">
      <div className="">
        <p className=" text-2xl font-semibold text-stone-700">CalclulatManey</p>
        <p className="text-stone-200 text-xs">
          Подсчет денег через сложение купюр
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <InputItem
          name="input50"
          onChangeInput={handleChange}
          defaultValue={50}
          title="Купюра 50р"
          placeholder="Количество штук"
        />
        <InputItem
          name="input100"
          onChangeInput={handleChange}
          defaultValue={100}
          title="Купюра 100р"
          placeholder="Количество штук"
        />
        <InputItem
          name="input200"
          onChangeInput={handleChange}
          defaultValue={200}
          title="Купюра 200р"
          placeholder="Количество штук"
        />
        <InputItem
          name="input500"
          onChangeInput={handleChange}
          defaultValue={500}
          title="Купюра 500р"
          placeholder="Количество штук"
        />
        <InputItem
          name="input1000"
          onChangeInput={handleChange}
          defaultValue={1000}
          title="Купюра 1000р"
          placeholder="Количество штук"
        />
        <InputItem
          name="input2000"
          onChangeInput={handleChange}
          defaultValue={2000}
          title="Купюра 2000р"
          placeholder="Количество штук"
        />
        <InputItem
          name="input5000"
          onChangeInput={handleChange}
          defaultValue={5000}
          title="Купюра 5000р"
          placeholder="Количество штук"
        />
        <InputItem
          name="input1"
          onChangeInput={handleChange}
          defaultValue={1}
          title="Свободная сумма"
          placeholder="Введите число"
        />
      </div>

      {showTotlaLabel && (
        <div>
          <p className="font-semibold text-lg">
            Итоговая сумма
            <span className="text-red-500 font-semibold text-lg mx-2">
              {totalNum}
            </span>
            <span className="font-semibold text-lg">р.</span>
          </p>
        </div>
      )}
    </div>
  );
}
