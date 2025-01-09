import imgFuel from "../../../src/assets/images/fuel.png";
import ButtonFuel from "../Buttons/ButtonFuel";
import InputFuel from "../Inputs/InputFuel";
import { useState, useEffect, useRef } from "react";
import { Fuels } from "../internetManager/Convert";

export default function FuelCalculation() {
  const [isLoadind, setIsLoading] = useState(false);
  const arrayIsLoadind = [1, 2];

  const [distanceInput, setDistanceInput] = useState(0); //пройденая дистанция
  const [expenditureInput, setExpenditureInput] = useState(0); //средний расход
  const [nameFuel, setNameFuel] = useState(""); // название бензина

  const [costFuel, setFuelCost] = useState(0); //стоимость бензина
  const [fuels95, setFuels95] = useState(0);
  const [fuels92, setFuels92] = useState(0);

  const [moneySpent, setMoneySpent] = useState(0); //сумма потраченых рублей

  const fuelsRef = useRef<Fuels[]>([]);

  useEffect(() => {
    setIsLoading(false);
    fetch(
      "https://673610fc5995834c8a9548ea.mockapi.io/api/fuels/CollectionsPhoto"
    )
      .then((fuels) => fuels.json())
      .then((json) => {
        fuelsRef.current = json;
        const [fuel95, fuel92] = fuelsRef.current;
        setFuels95(Number(fuel95.fuelsPrice));
        setFuels92(Number(fuel92.fuelsPrice));
      })
      .catch((err) => {
        console.log(err);
        alert("Не удалось загрузить данные с сервера");
      })
      .finally(() => setIsLoading(true));
  }, []);

  useEffect(() => {
    setMoneySpent(totalExpense());
  }, [distanceInput, expenditureInput, nameFuel, costFuel, fuels95, fuels92]);

  const handlerGetCost = (name: any) => {
    setNameFuel(name);
    if (name === "95") {
      setFuelCost(fuels95);
    } else if (name === "92") {
      setFuelCost(fuels92);
    } else {
      alert("Проблемя с получением данных о топливе с сервера");
    }
  };

  const handlerGetDistanceFromInput = (event: any) => {
    const eventInput = Number(event.target.value);
    setDistanceInput(eventInput);
  };

  const handlerGetExpenditureFromInput = (event: any) => {
    const eventInput = Number(event.target.value);
    setExpenditureInput(eventInput);
  };

  const totalExpense = () => {
    // costFuel; //стоимоть бензина
    // expenditureInput; //средний расход бензина
    // distanceInput; // пройденая дистанция
    return (distanceInput / 100) * expenditureInput * costFuel;
  };

  return (
    <div className="flex flex-col justify-around items-center bg-gradient-to-t from-red-400 w-[500px] h-[500px] rounded-3xl max-sm:w-11/12">
      <p className="text-white font-bold text-lg ">
        Расчет затраченых финансов
      </p>
      <div>
        <p className="text-white font-bold text-sm">
          Выберите необходимое топливо для расчета
        </p>
        {isLoadind && (
          <p className="text-stone-400 font-bold text-xs">
            *Данные берутся с фейкого сервера
          </p>
        )}

        {!isLoadind ? (
          <div className="flex flex-row justify-around gap-1 max-sm:flex-col max-sm:items-center max-sm:gap-3">
            {arrayIsLoadind.map((item) => (
              <div
                key={item}
                className="border border-gray-300 shadow rounded-[20px] p-2 w-[180px] mx-2">
                <div className="animate-pulse flex space-x-1">
                  <div className="flex-1 space-y-3 py-1">
                    <div className="h-5 bg-gray-300 rounded-[7px]"></div>
                    <div className="space-y-1">
                      <div className="h-8 bg-gray-300 rounded-[10px]"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-row justify-around gap-1 max-sm:flex-col">
            {fuelsRef.current.map((item) => (
              <ButtonFuel
                key={item.fuelsName}
                title={item.fuelsName}
                subtitle={item.fuelsPrice.toString()}
                color=" bg-gradient-to-t from-blue-900 to-blue-400 hover:bg-gradient-to-bl"
                // color="bg-gray-500"
                hoverColor="hover:bg-gray-800"
                onClickButton={handlerGetCost}
              />
            ))}
          </div>
        )}
      </div>

      <div className="bg-gradient-to-t from-gray-500  to-blue-400">
        <div className="flex flex-row items-center justify-center">
          <div>
            <img
              src={imgFuel}
              alt="Топливная колонка"
              // width={250}
              className="w-[250px] max-sm:w-2/3"
            />
          </div>
          <div className="flex flex-col justify-center gap-3">
            <p className="text-white font-bold text-sm">
              Расчет затраченых финансов
            </p>
            <InputFuel
              name="Растояние"
              title="Растояние"
              placeholder="Введите данные"
              onChangeInput={handlerGetDistanceFromInput}
            />
            <InputFuel
              name="Расход"
              title="Расход"
              placeholder="Введите данные"
              onChangeInput={handlerGetExpenditureFromInput}
            />
            <div className="flex px-2 items-center">
              <p className="text-white font-bold text-xl">Итого потрачено:</p>
              <p className="text-white font-bold text-2xl ml-1 bg-red-600 p-2 rounded-2xl">
                {Math.round(moneySpent)}
                <span> р.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
