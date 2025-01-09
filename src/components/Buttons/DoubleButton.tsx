import Button from "./Button";
import { useState } from "react";
import CalclulatManey from "../CalculateInterface/CalclulatManey";
import FuelCalculation from "../CalculateInterface/FuelCalculation";

export default function DoubleButton() {
  const [redBoolState, setRedBoolState] = useState(true);
  const [blueBoolState, setBlueBoolState] = useState(true);
  const [clalcElemant, setClalcElemant] = useState(false);
  const [fuelElement, setFuelElement] = useState(false);

  function onClicRedButtonkHandler() {
    setRedBoolState((prevState) => !prevState);
    setClalcElemant((prevState) => !prevState);
  }

  function onClicBlueButtonkHandler() {
    setBlueBoolState((prevState) => !prevState);
    setFuelElement((prevState) => !prevState);
  }
  return (
    <div className="flex flex-col gap-5 items-center justify-center">
      <div className="flex flex-row gap-5 ">
        {blueBoolState && (
          <Button
            title="Подсчет денег"
            color="bg-red-500"
            hoverColor={`hover:bg-red-600 ${
              redBoolState
                ? "hover:animate-bounce hover:shadow-xl hover:shadow-pink-500/70 "
                : "animate-bounce"
            }`}
            onClickButton={() => onClicRedButtonkHandler()}
          />
        )}
        {redBoolState && (
          <Button
            title="Подсчет топлива"
            color="bg-blue-500"
            hoverColor={`hover:bg-blue-600 ${
              blueBoolState
                ? "hover:animate-bounce hover:shadow-xl hover:shadow-indigo-500/70 "
                : "animate-bounce"
            }`}
            onClickButton={() => onClicBlueButtonkHandler()}
          />
        )}
      </div>
      {clalcElemant && <CalclulatManey />}
      {fuelElement && <FuelCalculation />}
    </div>
  );
}
