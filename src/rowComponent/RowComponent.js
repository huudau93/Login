import React from "react";
import "./RowComponent.css";
import { Radio } from "antd";
import cancel from "../asset/image/cancel.png";

function RowComponentChoice() {
  return (
    <>
      <div className="threeLayout-one">
        <div className="row-one">
          <Radio></Radio>
        </div>
        <div className="nameOption">Tên option</div>
        <div>
          <button className="transparentButton">
            <img src={cancel} alt="delete" />
          </button>
        </div>
      </div>
    </>
  );
}

export default RowComponentChoice;
