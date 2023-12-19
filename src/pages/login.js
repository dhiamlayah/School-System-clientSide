import React, { useState } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { faLeftLong, faUser } from "@fortawesome/free-solid-svg-icons";
import "./auth.css";
import Input from "../util/input";

function LoginForm() {
  const url =  process.env.REACT_APP_port+'/login'

  const [informations, setInformations] = useState({
      Password: null,
      CIN: null,
    }),
    [error, setError] = useState(null),
    [role, setRole] = useState(null);

  const handleChange = (e, type) => {
    setInformations((prev) => {
      return { ...prev, [type]: e.target.value };
    });
  };

  const verifyInputs= ()=>{
      if(role===null || role==='Your Role' ){
        return 'Please Choose Your Role '
      }
      if(informations.CIN===null ||informations.CIN===""){
        return 'All field required'
      }
      
      const CIN = Number(informations.CIN)
      if(!CIN){ return 'CIN should be a number'}
      return null
  }

  const redirectParent =()=>{
    let path = '/profile'
     return setTimeout(() => {
       window.location.pathname = path
     }, 5000);
    
   }
  
  const sendToServer = async()=>{
    await axios.post(url,{
      informations
    }).then((res)=>{
      const headers = res.headers['token']
      localStorage.setItem('Token',headers)
      toast.success(res.data.message)
      redirectParent()
    }).catch((err)=>{
      console.log(err.response.data.message)
      toast.error(err.response.data.message)
    })
  }
 

  const sendInformations = ()=>{
       const inputError =verifyInputs()
      setError(inputError)
      if(!inputError && role==='Parent'){
        return sendToServer()
      }else if(!inputError && role==='Admin'){
        window.location.pathname = "/admin"
      }
      else{return null}
  }

 
  return (
    <div className="registration-form ">
      <form>
        <Link to="/" className="text-decoration-none fs-5  ">
          {" "}
          <FontAwesomeIcon style={{ width: "35px",color:'#B89E85' }} icon={faLeftLong} />
        </Link>
        <div className="form-icon">
          <span>
            <FontAwesomeIcon icon={faUser} />
          </span>
        </div>
        <div className="form-group">
          <select className="form-select mb20"  onChange={(e)=>setRole(e.target.value)} value={role}  aria-label="Default select">
            <option value='nothing'>Your Role</option>
            <option value='Admin'>Admin</option>
            <option value='Parent'>Parent</option>
          </select>
        </div>

        <Input
          name="CIN"
          informations={informations}
          handleChange={handleChange}
        />
        <Input 
             name="Password"
             informations={informations}
             handleChange={handleChange}
             />

       {error && <div className="alert alert-danger">{error}</div>}
        <div className="form-group center">
          <button type="button" onClick={sendInformations} className="btn btn-block create-account">
            Log IN
          </button>
        </div>
        <div className="form-group center">
          <Link to="/register" className="text-decoration-none text-secondary">
            Create an Account
          </Link>
          <ToastContainer/>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
