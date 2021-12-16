import React from "react";
import CreateNewPassword from "./CreatePassword/indexNewPassword";
import ForgotPassword from "./ForgotPassword/indexForgot";
import Login from "./Login/indexLoginUI";
import SuccessMessage from "./Notification_resetPasswordSuccess/indexNotification";
import SuccessFully from "./MessageSuccess/success";
import Management from "./AccessManagerment/management";
import FormOffer from "./Form-Offer/form_offer";
import RequestOpenSuccess from "./notification/RequestOpenSuccess";
import NoSaveDataNotifi from "./saveDataNotification/SaveDataNotifi";
import BlockOffer from "./blockoffer/BlockOffer";
import TableManage from "./table/TableManage";
import "./App.css";

function App() {
  //return <ForgotPassword />;

  //return <Login />;

  //return <SuccessMessage />;
  //return <CreateNewPassword />;
  //return <SuccessFully />;
  return <Management />;
  //return <FormOffer />;
  //return <Login />;
  //return <RequestOpenSuccess />;
  //return <NoSaveDataNotifi />;
  //return <BlockOffer />;
  //return <TableManage />;
}

export default App;
