import React, { useState } from "react";
import "./Form-ModelOffer.css";
import add from "../asset/image/add.png";
import threedot from "../asset/image/threedot.png";
import SelectComponent from "../SelectComponent/SelectComponent";
import RowComponentChoice from "../rowComponent/RowComponent";
import copy from "../asset/image/Copy.png";
import dele from "../asset/image/Delete.png";
import { Switch } from "antd";
import FooterForm from "../footerForm/FooterForm";
import ThreeLayout from "../threeLayout/ThreeLayout";

function onChange(checked) {
  console.log(`switch to ${checked}`);
}

function FormModelOffer() {
  return (
    <div className="container-model">
      <div className="add-field">
        <button className="transparent-btn">
          <img className="imageAdd" src={add} alt="add-logo" />
          Thêm trường
        </button>
      </div>
      <div className="form-dataField">
        <div className="top-form">
          <img src={threedot} alt="three-dot" />
        </div>
        <div className="secondLayout">
          <div className="second-one">
            <label>
              Tên trường dữ liệu<span className="text-danger">*</span>
            </label>
            <input
              className="inputDataForm-Second form-control"
              type="text"
              name="inputFormTxt"
              placeholder="Nhập tên trường dữ liệu"
            />
          </div>
          <div className="second-two">
            <label>
              Loại dữ liệu<span className="text-danger">*</span>
            </label>
            <SelectComponent></SelectComponent>
          </div>
        </div>
        <ThreeLayout></ThreeLayout>
        <FooterForm></FooterForm>
        {/* <div className="footer-form">
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
        </div> */}
      </div>
    </div>
  );
}

export default FormModelOffer;
