import React from "react";
// import { useState  } from 'react';
import "./indexNewPassword.css";
import logo from "../asset/image/Frame5004.png";

function CreateNewPassword() {
  return (
    <React.Fragment>
      <div className="setBackground">
        <div className="main-login">
          <div className="container">
            <img className="logoImg" src={logo} alt="logo" />
            <p className="setBoldText">Tạo mật khẩu mới</p>
            <label className="toLogo">
              Mật khẩu mới <span className="text-danger">*</span>
            </label>
            <input
              id="userid"
              className="col-sm-12 set-border"
              type="text"
              placeholder="Nhập mật khẩu"
            />

            <div className="stylePass">
              <label>
                Nhập lại mật khẩu mới<span className="text-danger">*</span>
              </label>
            </div>

            <input
              id="passid"
              className="col-sm-12 set-border"
              type="text"
              placeholder="Nhập mật khẩu"
            />

            <div className=" text-center line-heigh">
              <input
                type="button"
                className="col-sm-12 btn btn-primary"
                value="Tạo mật khẩu mới"
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default CreateNewPassword;
