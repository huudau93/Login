import React from "react";
import "./index.css";
import logoImage from "../asset/image/Frame5004.png";
import arrow from "../asset/image/Navigation/Vector.png";
function ForgotPassword() {
  return (
    <React.Fragment>
      <div className="main-login ">
        <img className="fixArrow" src={arrow} alt="arrowImage" />
        <img className="resetLogoImage" src={logoImage} alt="logo" />
        <div className="main">
          <div>
            <label className="boldText">Quên mật khẩu </label>
          </div>
          <div className="sizeOfText">
            <p>
              Enter your email and we will send you a link to reset <br />
              password
            </p>
          </div>
          <div className="flexInput">
            <label>
              Email<span className="text-danger">*</span>
            </label>

            <input
              id="userid"
              className="size-input"
              type="text"
              placeholder="example@gmail.com"
            />
          </div>

          <button className="btn btn-primary button-send">
            Lấy lại mật khẩu
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ForgotPassword;
