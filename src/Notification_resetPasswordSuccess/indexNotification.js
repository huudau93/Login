import "./indexNotification.css";
import React from "react";
import success from "../asset/image/Vector-success.png";

function SuccessMessage() {
  return (
    <React.Fragment>
      <div className="setBackgroundId">
        <div className="main-contentNotifi ">
          <div>
            <img
              className="positionOfSuccessIcon"
              src={success}
              alt="success"
            />
          </div>

          <div className="bold-text">
            <span> Mật khẩu đã được gửi </span>
          </div>
          <div>
            <p className="setP-element">Vui lòng kiểm tra hòm thư của bạn</p>
          </div>
          <div className="bag-buttonId">
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
