import "./indexNotification.css";
import React from "react";
import success from "../asset/image/Vector-success.png";

function SuccessMessage() {
  return (
    <React.Fragment>
      <div className="setBackground">
        <div className="main-contentNotifi ">
          <img className="positionOfSuccessIcon" src={success} alt="success" />
          <div className="main-paragraph">
            <span className="bold-text"> Mật khẩu đã được gửi </span>
            <p className="setP-element">Vui lòng kiểm tra hòm thư của bạn</p>
            <button className="setButton btn btn-primary" type="button">
              Quay lại đăng nhập
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default SuccessMessage;
