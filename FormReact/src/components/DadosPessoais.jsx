import React from "react";

export default function DadosPessoais(props) {
  return (
    <>
      <div className={props.styles}>
        <div>
          <label htmlFor="nome">Nome</label>
          <input type="text" placeholder="Nicolas" id="nome" required />
        </div>
        <div>
          <label htmlFor="sobrenome">Sobrenome</label>
          <input type="text" placeholder="Pizzoni" id="sobrenome" required />
        </div>
      </div>
      <div className={props.stylesMail}>
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          placeholder="meuemail@dominio.com.br"
          required
        />
      </div>
    </>
  );
}
