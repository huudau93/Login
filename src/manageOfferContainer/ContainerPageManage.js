import "./ContainerPageManage.css";
import { Router, Link, Routes, Route } from "react-router-dom";
import logo from "../asset/image/sskpi.png";
import avatar from "../asset/image/Content/avatar.png";
import arrowIcon from "../asset/image/arrow.png";

function ContainerPage(props) {
  return (
    <>
      <div className="bag-company">
        <div className="setup-navbar">
          <div className="wrapp-first">
            <div>
              <img className="logoImgOne" src={logo} alt="logo" />
            </div>
            <div className="wrapper-three">
              <div>
                <button className="buttonNavbar" type="button">
                  <a href="/">Quản lý đề suất</a>
                </button>
              </div>
              <div>
                <button className="buttonNavbar " type="button">
                  <a href="/">Quản lý người dùng</a>
                </button>
              </div>
            </div>
          </div>

          <div className="wrapp-second">
            <div className="boxMini">
              <img className="avatarImg" src={avatar} alt="avatar " />
            </div>
            <div className="userName"> Hồ Chí Minh </div>
          </div>
        </div>

        <div className="navbar-second">
          <div className="set-padding">
            <a href="/">Breadcrumb</a>
          </div>
          <div className="set-padding">
            <img src={arrowIcon} alt="" />
          </div>
          <div className="set-padding">
            <a href="/">Breadcrumb</a>
          </div>
          <div className="set-padding">
            <img src={arrowIcon} alt="" />
          </div>
          <div className="set-padding">
            <a href="/">Breadcrumb</a>
          </div>
          <div className="set-padding">
            <img src={arrowIcon} alt="" />
          </div>
          <div className="set-padding">
            <a href="/">Breadcrumb</a>
          </div>
        </div>
      </div>
      {props.content}
    </>
  );
}
export default ContainerPage;
