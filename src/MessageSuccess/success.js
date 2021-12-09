import React from "react";
import "./success.css";
import logoImage from "../asset/image/Vector-success.png";

{
  /* <img className="setLogo" src={logoImage} alt="logo" /> */
}
function SuccessFully() {
  return (
    <React.Fragment>
      <div className="setBackgroundSS">
        <div className="formMessageSS">
          <div className="logoImg">
            <img className="setLogo" src={logoImage} alt="logo" />
          </div>
          <div className="textMessageSS">Tạo mới mật khẩu thành công</div>
          <div className="button-wrapSS ">
            <button className=" btn btn-primary buttonMessageSS">
              Quay lại đăng nhập
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default SuccessFully;
