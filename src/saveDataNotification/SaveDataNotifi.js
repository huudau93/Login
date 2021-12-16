import "./SaveDataNotifi.css";
function NoSaveDataNotifi() {
  return (
    <>
      <div className="container-psuedo">
        <div className="wrapper-notification">
          <div className="textNotifi">
            <div>Đóng</div>
            <div className="description">Thông tin sẽ không được lưu lại</div>
          </div>
          <div className="bottomNotification">
            <button className="btn btn-outline-primary cancel" type="button">
              Hủy
            </button>
            <button className="btn btn-primary btn-block" type="button">
              Đóng
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default NoSaveDataNotifi;
