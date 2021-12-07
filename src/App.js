import React from "react";
// import { useState  } from 'react';
import "./App.css";
import logo from "./Group 1082.jpg";

function App() {
  // var onBtn = ()=>{
  //   var userID=document.getElementById('userid');
  //   var passID=document.getElementById('passid');
  //   var valueUser=userID.value;
  //   var valuePass=passID.value;
  //   if(valueUser==="" || valueUser.include('@')){
  //     var spanId=document.getElementById('spanUserID');
  //     spanId.style.display='block';
  //   }

  //   if(valuePass===""){
  //     var spanPassId=document.getElementById('spanPassID');
  //     spanPassId.style.display='block';
  //   }

  // }

  return (
    <React.Fragment>
      <div className="wrapper1">
        <div className="container " style={{ paddingTop: 0 }}>
          <div className="text-left  ">
            <img classNames="imgLogo" src={logo} alt="logo1" />
          </div>

          <label style={{ marginTop: 154.3 }}>
            Email<span className="text-danger">*</span>
          </label>
          <input
            id="userid"
            className="col-sm-12"
            type="text"
            placeholder="example@gmail.com"
          />
          <span id="spanUserID" className="inValid text-danger">
            username is not exist
          </span>

          <div className="stylePass">
            <label>
              Mật khẩu<span className="text-danger">*</span>
            </label>
            <a className="colorTag">Quên mật khẩu ?</a>
          </div>

          <input
            id="passid"
            className="col-sm-12"
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
    </React.Fragment>
  );
}

export default App;