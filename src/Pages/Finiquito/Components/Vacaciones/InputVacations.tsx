import { useEffect, useState } from "react";
import { InputNumber } from "antd";

import { useVacation } from "../../../../helper/Context";
import "./InputVacations.css";

export const InputVacations = () => {
  const [diasDeVacaciones, setDiasDeVacaciones] = useState(0);
  const { handleVacationChange } = useVacation();

  const onChangeDay = (e: any) => {
    setDiasDeVacaciones(e);
  };

  useEffect(() => {
    handleVacationChange(diasDeVacaciones);
  }, [diasDeVacaciones]);

  return (
    <div className="mainVacationsDiv">
      <div className="boxInputVacations">
        <h4>N° de Vacaciones restantes / totales</h4>
        <InputNumber
          className="inputNumberVacations"
          type="number"
          min="0"
          max="365"
          placeholder="Ex. 0"
          onChange={onChangeDay}
        />
      </div>
    </div>
  );
};
