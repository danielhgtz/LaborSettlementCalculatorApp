import { useEffect } from "react";
import { useSCD } from "../../../../../helper/Context";
import { InputNumber } from "antd";

type Props = {
  ultimoDiaPorMes: any;
};

export const InputSalario = ({ ultimoDiaPorMes }: Props) => {
  const { handleSCDChange, salarioContext, setSalarioContext } = useSCD();

  const onChangeSalary = (e: any) => {
    setSalarioContext(parseInt(e));
  };

  useEffect(() => {
    handleSCDChange(ultimoDiaPorMes);
    if (!salarioContext) {
      setSalarioContext(0);
    }
  }, [salarioContext, ultimoDiaPorMes]);

  return (
    <div>
      <p>Salario Mensual: </p>
      <InputNumber
        prefix="$"
        style={{ width: "100%" }}
        min={0}
        formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        onChange={onChangeSalary}
        value={salarioContext}
      />
    </div>
  );
};
