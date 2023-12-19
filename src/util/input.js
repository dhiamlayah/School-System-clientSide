import { useState } from "react"

const Input = ({name,informations,handleChange}) => {
    const [error,setErrors]=useState(null)
    const validate=(e,label)=>{
        if(e.target.value==='' && label!=="Email"){
            return    setErrors(`${label} is Required`)
        }else return setErrors(null)
      }
    return (
        <div className="form-group">
           {error && <p className="text-danger" style={{fontSize:'15px'}}>*{error}</p>}
           {!error && <label htmlFor={name} className="form-label">
                 {name} :
             </label>}
            <input
            value={informations[name] ? informations[name] : ""}
            type={name==="Password" ?"password":"text"}
            className={error ?"form-control  border border-danger  item":" form-control border border-secondary item"}
            placeholder={name}
            onChange={(e) => {
                validate(e,name)
                handleChange(e,name);
            }}
            />
        </div>
      );
}
 
export default Input;