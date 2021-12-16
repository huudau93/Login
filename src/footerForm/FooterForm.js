import React from "react";
import { Switch } from "antd";
import copy from "../asset/image/Copy.png";
import dele from "../asset/image/Delete.png";

function onChange(checked) {
  console.log(`switch to ${checked}`);
}

function FooterForm() {
  return (
    <>
      <div className="footer-form">
        <div className="optionWrapper">
          <button className="iconBtn">
            <img src={copy} alt="copyIcon" />
          </button>
          <button className="iconBtn">
            <img src={dele} alt="deleteIcon" />
          </button>
        </div>
        <div className="switchOption">
          <label className="lblMargin" for="label">
            Bắt buộc
          </label>
          <Switch defaultChecked onChange={onChange}></Switch>
        </div>
      </div>
    </>
  );
}
export default FooterForm;
