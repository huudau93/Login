import React from "react";
import "./success.css";
import logoImage from "../asset/image/Vector-success.png";

function SuccessFully() {
  return (
    <React.Fragment>
      <div className="main-wrapper">
        <div className="container-Content">
          <img className="setLogo" src={logoImage} alt="logo" />
          <p className="setMarginBottom">Tạo mới thành công</p>
          <button className="btn btn-primary col-sm-12 textButton">
            {" "}
            Quay lại đăng nhập
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}
export default SuccessFully;
