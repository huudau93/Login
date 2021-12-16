import React, { useState } from "react";
import "./form_offer.css";

import iconUpload from "../asset/image/offerVector.png";
import FormModelOffer from "../Form-modelOffer/Form-ModelOffer";

function FormOffer() {
  return (
    <>
      <div className="container-Offer">
        <div className="main-Offer">
          <div className="title-offer">Tạo mẫu đề xuất</div>

          <div className="head-offer">
            <div className="divHeadColumn-start">
              <div className="step-one">
                <div className="circleStart"></div>
                <div className="tick"></div>
              </div>
              <div>
                <a className="activeDefault" href="#">
                  Cài đặt cơ bản
                </a>
              </div>
            </div>
            <div className="divHeadColumn-between">
              <div className="step-two">
                <div className="tick"></div>
                <div className="circleBetween"></div>
                <div className="tick"></div>
              </div>
              <div>
                <a className="linkForm" href="#">
                  Form mẫu đề xuất
                </a>
              </div>
            </div>
            <div className="divHeadColumn-end">
              <div className="step-three">
                <div className="tick"></div>
                <div className="circleEnd"></div>
              </div>
              <div>
                <a className="linkForm" href="#">
                  {" "}
                  Quy trình xét duyệt
                </a>
              </div>
            </div>
          </div>

          <div className="body-offer">
            <FormModelOffer />
            {/* <div>
              Tên đề xuất
              <span className="text-danger">*</span>
            </div>
            <div className="special-div">
              <input
                className="input-offer form-control"
                type="text"
                placeholder="Nhập tên đề xuất"
              />
            </div>
            <div>Category</div>
            {/* /* pham vi ----------------------------------------------------------------------------------------- */}
            {/* <div className="setWidth-element">
              <select className="form-control setHigh-element"></select>
            </div>
            {/* /* pham vi ------------------------------------------------------------------------------------ */}
            {/* <div>
              Phạm vi áp dụng
              <span className="text-danger">*</span>
            </div>
            <div className="setWidth-element ">
              <select
                name="scopeName"
                className="setHigh-element form-control "
              >
                <option value="d">Category</option>
              </select>
            </div>
            <div>Mô tả đề xuất</div>
            <div className="setWidth-element">
              <textarea
                className="setWidth-element setBorder form-control"
                rows="4"
              ></textarea>
            </div>
            <div>Upload Icon</div>
            <div className="uploadIcon">
              <img src={iconUpload} alt="icon" />
            </div> */}
          </div>

          <div className="foot-offerModel text-right">
            <button
              className="btn btn-outline-primary create-buttonForm "
              type=""
            >
              Tạo
            </button>
            <button
              className="btn btn-outline-primary color-active-btn"
              type=""
            >
              Đóng
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default FormOffer;
