import NavigationBar from "../components/Navbar";
 import './admin.css'
import SendSms from "../components/admin/SendSms";
import AllParents from "../components/admin/AllParents";
import { useState } from "react";
const Admin = () => {
  const [choosePhone,setChoosePhone]=useState(null)

  return (
    <div>
      <NavigationBar />
      <div className="d-sm-flex w-100 " style={{minHeight:'90vh'}}>
        <SendSms phoneChoosed={choosePhone} />
        <div className="bg-secondary mt-5 mx-2" style={{ width: "1px" }}></div>
        <AllParents setChoosePhone={setChoosePhone}/>
       
      </div>
    </div>
  );
};

export default Admin;
