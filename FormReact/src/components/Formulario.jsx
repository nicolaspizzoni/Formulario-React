import React from "react";
import style from "../styles/formulario.module.css";

import NivelDev from "./NivelDev";
import RadioCheck from "./RadioCheck";
import DadosPessoais from "./DadosPessoais";
import Techs from './Techs'

export default function Form() {
  return (
    <body>
      <div className={style.formulario}>
        <h1>Cadastro de Devs</h1>
        <p>Informe seus dados</p>
        <form>
          <DadosPessoais styles={style.dados} stylesMail={style.mail} />
          <section>
            <p id={style.question}>Qual seu lado no desenvolvimento ?</p>
            <RadioCheck styles={style.radiocheck} />
            
            <NivelDev styles={style.nivel} />
            <p id={style.question}>Quais tecnologias utiliza?</p>
            <Techs styles={style.techs}/>
          </section>
          <button type="submit" className={style.botao}>
            <strong>Concluído</strong>
          </button>
        </form>
      </div>
    </body>
  );
}
