import React from "react";

export default (props) => {
//   props.quandoClicar
  return (
    <div>
      <div>Filho</div>
      <button
        onClick={function (e) {
          props.quandoClicar("João", 53, true);
        }}
      >
        Fornecer info pai
      </button>
    </div>
  );
};
