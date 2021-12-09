import React from "react";
// import { useState  } from 'react';
import "./indexNewPassword.css";
import logo from "../asset/image/Frame5004.png";

function CreateNewPassword() {
  return (
    <React.Fragment>
      <div className="setBackgroundPass">
        <div className="main-Password ">
          <div className="imgPassword">
            <img src={logo} alt="logo" />
          </div>

          <div className="setBoldText">Tạo mật khẩu mới</div>

          <div className="setSpaceInput">
            Mật khẩu mới <span className="text-danger">*</span>
          </div>

          <div className="set-border">
            <input
              id="userid"
              className="col-sm-12 set-border"
              type="text"
              placeholder="Nhập mật khẩu"
            />
          </div>

          <div className="setSpaceInput">
            Nhập lại mật khẩu mới
            <span className="text-danger">*</span>
          </div>

          <div className="set-border">
            <input id="passIputid" type="text" placeholder="Nhập mật khẩu" />
          </div>

          <div className="setSpaceBtn">
            <button className="createPassword-btn">Tạo mật khẩu mới</button>
          </div>

          {/* <p className="setBoldText">Tạo mật khẩu mới</p> */}
          {/* <label className="toLogo">
              Mật khẩu mới <span className="text-danger">*</span>
            </label> */}
          {/* <input
              id="userid"
              className="col-sm-12 set-border"
              type="text"
              placeholder="Nhập mật khẩu"
            /> */}

          {/* <div className="stylePass">
              <label>
                Nhập lại mật khẩu mới<span className="text-danger">*</span>
              </label>
            </div> */}

          {/* <input
              id="passid"
              className="col-sm-12 set-border"
              type="text"
              placeholder="Nhập mật khẩu"
            /> */}

          {/* <div className=" text-center line-heigh">
              <input
                type="button"
                className="col-sm-12 btn btn-primary"
                value="Tạo mật khẩu mới"
              />
            </div> */}
        </div>
      </div>
    </React.Fragment>
  );
}

export default CreateNewPassword;
