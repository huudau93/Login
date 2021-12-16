import "./OpenNotificationSuccess.css";

function OpenNotificationSuccess() {
  return (
    <>
      <div className="wrapper-notifi">
        <div className="textNotification">Mở khóa đề xuất</div>
        <div className="bottomNotifi">
          <button
            className="btn btn-outline-primary cancelButton"
            type="button"
          >
            Hủy
          </button>
          <button className="btn btn-primary" type="button">
            Mở khóa
          </button>
        </div>
      </div>
    </>
  );
}
export default OpenNotificationSuccess;
