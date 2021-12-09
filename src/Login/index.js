import React from "react";
import "./index.css";
import logo from "../asset/image/Group 1082.jpg";

function Login() {
  return (
    <React.Fragment>
      <div className="setBackground">
        <div className="main-login">
          <div className="container-main ">
            <img className="logoImage" src={logo} alt="logo" />

            <label className="marginToLogo">
              Email<span className="text-danger">*</span>
            </label>
            <input
              id="userid"
              className="col-sm-12 set-border"
              type="text"
              placeholder="example@gmail.com"
            />
            <span id="spanUserID" className="inValid text-danger">
              username is not exist
            </span>

            <div className="stylePass">
              <label>
                Password<span className="text-danger">*</span>
              </label>
              <a className="colorTag">Forgot password ?</a>
            </div>

            <input
              id="passid"
              className="col-sm-12 set-border"
              type="text"
              placeholder="Nhập mật khẩu"
            />
            <span id="spanPassID" className="inValid text-danger">
              password is incorrect
            </span>

            <div className=" text-center line-heigh">
              <input
                type="button"
                className="col-sm-12 btn btn-primary"
                value="Đăng Nhập"
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Login;
