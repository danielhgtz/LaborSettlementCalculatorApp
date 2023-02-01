import { useState, useEffect } from "react";
import { useSCD } from "../../../../../helper/Context";
import { InputNumber } from "antd";

type Props = {
  ultimoDiaPorMes: any;
};

export const InputSalario = ({ ultimoDiaPorMes }: Props) => {
  const [salario, setSalario] = useState<number>(0);
  const { handleSCDChange } = useSCD();

  const onChangeSalary = (e: any) => {
    setSalario(parseInt(e));
  };

  useEffect(() => {
    handleSCDChange(salario, ultimoDiaPorMes);
    if (!salario) {
      setSalario(0);
    }
  }, [salario, ultimoDiaPorMes]);

  return (
    <div>
      <p>Salario Mensual: </p>
      <InputNumber
        prefix="$"
        style={{ width: "100%" }}
        min="0"
        formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        onChange={onChangeSalary}
      />
    </div>
  );
};
