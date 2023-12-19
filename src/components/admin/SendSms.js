import axios  from "axios";
import { useEffect, useState } from "react";
import {ToastContainer,toast} from 'react-toastify'

const SendSms = ({phoneChoosed}) => {
     const url =  process.env.REACT_APP_port+'/sendMessage'
     const[phone,setPhone]=useState(phoneChoosed),
         [message,setMessage]=useState(null),
         [error, setError] = useState(null)

        const sendSms = async()=>{
        await axios.post(url,{
            phone,
            message,
        }).then((res)=>{
          console.log(res.data)
          toast.success(res.data.message)
          setError(null)
          setMessage(null)
          setPhone(null)
        }).catch((error)=>{
          console.log('we have error to send sms',error)
          toast.error(error.response.data.message)
        })
    }
    const handleChangePhone = (e)=>{
            setPhone(e.target.value)
     }
    const handleChangeMessage = (e)=>{
            setMessage(e.target.value)
    }

    const verifyInputs = ()=>{

        if(phone===null ||phone===""){
          return 'All field required'
        }
        if(message===null ||message===""){
          return 'All field required'
        }
        const cheakPhone = Number(phone)
        if(!cheakPhone){ return 'Phone should be a number'}
        return null
 
    }
    const handleClick= ()=>{
      const cheakErrors= verifyInputs()
      setError(cheakErrors)
      if(!cheakErrors){
        return sendSms()
      }else{return null}
    }

    useEffect(()=>{
      setPhone(phoneChoosed)
    },[phoneChoosed])


    
    return ( 
        <div className="p-5 " id="sendSMS">
        <h3 className="p-2">Send SMS :</h3>
        <div className="w-100 rounded-4" id="SMSform">
          <ToastContainer/>
          <form className="px-sm-5">
            <div className="mb-3 p-5">
              <label htmlFor="phone" className="form-label">
                Phone Number
              </label>
              <input
                type="phone"
                className="form-control"
                id="phone"
                value={phone ? phone : ""}
                onChange={(e)=>{handleChangePhone(e)}}
                placeholder='phone'
              />
              <label htmlFor="sms " className="form-label pt-3">
                You message:
              </label>
              <div className="form-floating">
              <textarea className="form-control"value={message ? message : ""} onChange={(e)=>{handleChangeMessage(e)}} placeholder="Leave a comment here" id="sms" style={{height: '20vh'}}></textarea>
              <label htmlFor="floatingTextarea2">Comments</label>
             </div>
             {error && <div className="alert alert-danger">{error}</div>}

             <button className="btn btn-outline-secondary position-relative  mt-4 " type="button"  onClick={handleClick} style={{color:'#6C391B'}}>Send </button>
            </div> 
          </form>
        </div>
      </div>

     );
}
 
export default SendSms;