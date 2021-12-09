import React from "react";
import "./management.css";
import logo from "../asset/image/sskpi.png";
import avatar from "../asset/image/Content/avatar.png";
import arrowIcon from "../asset/image/arrow.png";
import fileicon from "../asset/image/file.png";
import iconIndex from "../asset/image/icontb.png";
import file from "../asset/image/fill.png";

function Management() {
  return (
    <React.Fragment>
      <div>
        <div className="setup-navbar">
          <div className="wrapp-first">
            <div>
              <img className="logoImgOne" src={logo} alt="logo" />
            </div>
            <div className="wrapper-three">
              <div>
                <button className="buttonNavbar" type="button">
                  Quản lý đề suất
                </button>
              </div>
              <div>
                <button className="buttonNavbar " type="button">
                  Quản lý người dùng
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
            <a href="">Breadcrumb</a>
          </div>
          <div className="set-padding">
            <img src={arrowIcon} alt="" />
          </div>
          <div className="set-padding">
            <a href="">Breadcrumb</a>
          </div>
          <div className="set-padding">
            <img src={arrowIcon} alt="" />
          </div>
          <div className="set-padding">
            <a href="">Breadcrumb</a>
          </div>
          <div className="set-padding">
            <img src={arrowIcon} alt="" />
          </div>
          <div className="set-padding">
            <a href="">Breadcrumb</a>
          </div>
        </div>

        <div className="navbar-three-input">
          <div>
            <input
              className="set-size-componentIp "
              type="text"
              placeholder="Nhập tên đề xuất"
            />
          </div>
          <div>
            <select className="set-size-select">
              <option value="Category">Category: tất cả</option>
            </select>
          </div>
          <div>
            <select className="set-size-select ">
              <option value="trang thai">Trạng thái: tất cả</option>
            </select>
          </div>
        </div>
        <div>
          <table>
            <tbody>
              <tr className="head-table table-management">
                <td>
                  <img id="indexIcon" src={iconIndex} alt="icon" />
                </td>
                <td className="name-recommend"> Tên đề xuất</td>
                <td className="category-column">Danh mục</td>
                <td className="status-column">Trạng thái</td>
                <td className="date-column">Ngày tạo</td>
                <td className="upload-column">Cập nhật cuối</td>
                <td id="create-recommend">
                  <button id="create-btn" type="">
                    <img
                      src={fileicon}
                      alt="icon"
                      style={{ marginRight: 11 }}
                    />
                    Tạo mẫu đề xuất
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="container-bottom">
          <div>
            <img
              style={{ paddingTop: 21.3, paddingBottom: 13.3 }}
              src={file}
              alt="icon"
            />
          </div>
          <div>Chưa có đề xuất nào</div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Management;
