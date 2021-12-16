import "./BlockOffer.css";
function BlockOffer() {
  return (
    <>
      <div className="container-psuedoOfBlock">
        <div className="wrapper-notificationOfBlock">
          <div className="textNotifiOfBlock">Khóa đề xuất</div>
          <div className="bottomNotificationOfBlock">
            <button
              className="btn btn-outline-primary cancelOfBlock"
              type="button"
            >
              Hủy
            </button>
            <button className="btn btn-primary block-btn" type="button">
              Khóa
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default BlockOffer;
