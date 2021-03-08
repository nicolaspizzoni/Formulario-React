import React from "react";

export default function RadioCheck(props) {
  return (
    <div className={props.styles}>
      <label htmlFor="front">
        <input type="radio" id="front" name="devside"/>
        Front-End
      </label>
      <label htmlFor="back">
        <input type="radio" id="back" name="devside" />
        Back-End
      </label>
      <label htmlFor="full">
        <input type="radio" id="full" name="devside" />
        Full-Stack
      </label>
    </div>
  );
}
