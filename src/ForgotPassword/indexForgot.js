import React from "react";
import "./indexForgot.css";
import logoImage from "../asset/image/Frame5004.png";
import arrow from "../asset/image/Navigation/Vector.png";
function ForgotPassword() {
  return (
    <React.Fragment>
      <div className="  total-background">
        <div className="  main-ForgotPassV ">
          <div className="fixArrow">
            <img className="backIcon" src={arrow} alt="arrowImage" />
          </div>

          <div className="logoimg-class">
            <img
              className="logoImageForgot"
              style={{ width: 180, height: 180 }}
              src={logoImage}
              alt="logo"
            />
          </div>

          <div className="boldText">Quên mật khẩu ?</div>

          <div className="sizeOfText">
            Enter your email and we will send you a link to reset password
          </div>
          <div className="emailText">
            Email<span className="text-danger">*</span>
          </div>
          <div className="inputForgotPass">
            <input
              className="inpForgotPass"
              type="text"
              name="input"
              placeholder="example@gmail.com"
            />
          </div>

          <div className="button-contentS">
            <button className=" btn btn-primary button-takePass ">
              Lấy lại mật khẩu
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ForgotPassword;
