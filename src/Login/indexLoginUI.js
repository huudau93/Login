import React from "react";
import "./indexLogin.css";
import logo from "../asset/image/Group 1082.jpg";

function Login() {
  return (
    <React.Fragment>
      <div className="setBackgroundOne">
        <div className="main-loginn">
          <div className="logoSskpi">
            <img className="logoImage" src={logo} alt="logo" />
          </div>
          <div className="inputNameLogin">
            Email<span className="text-danger">*</span>
          </div>
          <div>
            <input
              id="userid"
              className="userNameLogin"
              type="text"
              placeholder="example@gmail.com"
            />
          </div>
          <div>
            <span id="spanUserID" className="inValid text-danger">
              username is not exist
            </span>
          </div>
          <div className="titlePassword">
            <label>
              Password<span className="text-danger">*</span>
            </label>
            <a href="#" className="colorTag">
              Forgot password ?
            </a>
          </div>
          <div>
            <input
              id="passid"
              className="userNameLogin"
              type="password"
              name="pw"
              placeholder="Nhập mật khẩu"
            />
          </div>
          <div>
            <span id="spanPassID" className="inValid text-danger">
              password is incorrect
            </span>
          </div>

          <div>
            <button className="button-login  btn btn-primary" type="button">
              Đăng Nhập
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Login;
