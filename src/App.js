import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from 'axios'
import Login from "./pages/login.js";
import Register from "./pages/register.js";
import Home from "./pages/home";
 import Admin from "./pages/Admin.js";
import NotFound from "./pages/not-found.js";
import Profile from "./pages/profile.js";
import AllChilds from "./components/dashboard/navigateTo/allChilds.js";
import SingleChild from "./components/dashboard/navigateTo/singleChild.js";
import Contact from "./components/dashboard/navigateTo/contactUs.js";
import { useEffect, useState } from "react";

function App() {
  const [currentParent,setCurrentParent]=useState(null)
  const url =  process.env.REACT_APP_port+'/getCurrentParent'
  const getCurrentParent = async()=>{
     try {
      await axios
        .get(url, {
          headers: {
            token: localStorage.getItem("Token"),
          },
        })
        .then((res) => {
          console.log("successfuly", res.data);
          setCurrentParent(res.data)
         });
    } catch (err) {
      console.log("ther is an error to get current user ", err);
      setCurrentParent(null)
    } 
  }

  useEffect(()=>{
      getCurrentParent()
  },[])


  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home currentParent={currentParent} />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
        {currentParent &&  <Route path="/Profile" element={<Profile/>}>
                <Route path="" element={<AllChilds/>} />
                <Route path="childProfile" element={<SingleChild/>}/>
                <Route path="Contact" element={<Contact/>}/>
          </Route>}
          <Route path='/Admin' element={<Admin/>}/>
          <Route path='/*' element={<NotFound/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
