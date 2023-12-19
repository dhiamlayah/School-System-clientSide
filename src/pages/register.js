import React, { useState } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import Input from "../util/input";
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import "./auth.css";

function RegistrationForm() {
  const url =  process.env.REACT_APP_port+'/register'
  const listOfInformations = ["FirstName","LastName","Email","CIN","Password","Phone","Adress"]
  const [error,setError]=useState(null)
  const [informations, setInformations] = useState({
    FirstName: null,
    LastName: null,
    Email: null,
    CIN: null,
    Password: null,
    Adress: null,
    Phone:null
  });


  const handleChange = (e, type) => {
    setInformations((prev) => {
      return { ...prev, [type]: e.target.value };
    });
  };

  const verifyInputs= ()=>{
    let inputErrors 
    listOfInformations.map((info)=>{
      if(informations[info]===null ||informations[info]===""){
        return inputErrors='All field required except email '
      }
    })
    const phone = Number(informations.Phone)
    const CIN = Number(informations.CIN)
    if(!CIN){ return inputErrors='CIN should be a number'}
    if(!phone){return inputErrors='Phone should be a number'}
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
      if(!inputError){
        return sendToServer()
      }else{return null}
  }
   return (
    <div className="registration-form">
      <form>
        <Link to="/" className="text-decoration-none fs-5 ">
          {" "}
          <FontAwesomeIcon style={{ width: "35px",color:'#B89E85' }} icon={faLeftLong} />
        </Link>
        <div className="form-icon">
          <span>
            <FontAwesomeIcon icon={faUserPlus} />
          </span>
        </div>
         {listOfInformations.map((info)=>{
          return   <Input key={info} name={info}  informations={informations} handleChange={handleChange}/>
         })}   
        {error && <div className="alert alert-danger">{error}</div>}

        <div className="form-group center">
          <button type="button" className="btn btn-block create-account" onClick={sendInformations}>
            Create Account
          </button>
        </div>

        <div className="form-group center">
          <Link to="/login" className="text-decoration-none text-secondary"  >
            Already Have an Account?
          </Link>
          <ToastContainer/>
        </div>
      </form>
    </div>
  );
}

export default RegistrationForm;
