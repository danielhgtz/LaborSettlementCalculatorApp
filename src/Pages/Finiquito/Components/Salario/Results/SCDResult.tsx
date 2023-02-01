import { useSCD } from "../../../../../helper/Context";
import { ParseFloatToTwoDecimals } from "../../../../../Utilities/Utilities";

export const SCDResult = () => {
  const { SCD } = useSCD();

  const resultadoSCD = ParseFloatToTwoDecimals(SCD);

  return (
    <div>
      <p>SCD: {resultadoSCD}</p>
    </div>
  );
};
