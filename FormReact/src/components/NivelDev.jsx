import React from "react";

export default function NivelDev(props) {
  return (
    <div className={props.styles}>
      <legend>Qual seu nível como Dev?</legend>
      <select required>
        <option disabled selected value="">Selecione</option>
        <option value="junior">Júnior</option>
        <option value="pleno">Pleno</option>
        <option value="senior">Sênior</option>
      </select>
    </div>
  );
}
