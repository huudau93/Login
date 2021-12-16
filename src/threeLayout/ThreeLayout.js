import add from "../asset/image/add.png";
import React from "react";

import RowComponentChoice from "../rowComponent/RowComponent";

function ThreeLayout() {
  return (
    <>
      <div className="threeLayout">
        <RowComponentChoice></RowComponentChoice>
        <RowComponentChoice></RowComponentChoice>
        <RowComponentChoice></RowComponentChoice>
        <div className="threeLayout-two">
          <button className="transparent-btn">
            <img className="imageAdd" src={add} alt="add-logo" />
            Thêm lựa chọn
          </button>
        </div>
      </div>
    </>
  );
}
export default ThreeLayout;
