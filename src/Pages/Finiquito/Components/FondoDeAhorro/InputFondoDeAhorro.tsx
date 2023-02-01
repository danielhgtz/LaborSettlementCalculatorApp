import "./FondoDeAhorro.css";
import { useFondoDeAhorro } from "../../../../helper/Context";
import { Checkbox, InputNumber } from "antd";

export const InputFondoDeAhorro = () => {
  const { booleanFA, setBooleanFA, setFondoDeAhorroPorcentaje } =
    useFondoDeAhorro();

  const onChangeBoolean = (e: any) => {
    setBooleanFA(e.target.checked);
    setFondoDeAhorroPorcentaje(0);
  };

  const onChangeFondo = (e: any) => {
    setFondoDeAhorroPorcentaje(e / 100);
  };

  return (
    <div className="mainFondoDeAhorroDiv">
      <div className="boxInputFondoDeAhorro">
        <h4>
          <Checkbox name="checkBox" onChange={onChangeBoolean} /> Fondo de
          Ahorro
        </h4>
        {booleanFA ? (
          <InputNumber
            className="inputNumberFondoDeAhorro"
            onChange={onChangeFondo}
            formatter={(value) => `${value}%`}
            min="0"
            max="100"
          />
        ) : null}
      </div>
    </div>
  );
};
