import React, { useState, useEffect } from "react";
import { useAguinaldo } from "../../../../helper/Context";
import { InputNumber } from "antd";
import "./AguinaldoInput.css";

export const InputAguinaldo = () => {
  const { aguinaldoContext, onChangeAguinaldo } = useAguinaldo();

  return (
    <div className="mainAguinaldoDiv">
      <div className="boxInputAguinaldo">
        <h4>Días totales de Aguinaldo:</h4>
        <InputNumber
          className="inputNumberAguinaldo"
          type="number"
          min="15"
          max="365"
          placeholder="Ex. 15"
          onChange={onChangeAguinaldo}
        />
      </div>
    </div>
  );
};
