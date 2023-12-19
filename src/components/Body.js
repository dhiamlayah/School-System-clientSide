import { Link } from "react-router-dom";

 
function HomePageBody({currentParent}) {
  return (
 
      <div className="p-5 d-sm-flex d-block" style={{minHeight:'90vh'}} >
        <div className=" py-3  ">
            <h1 className="pt-5  fw-bold "  style={{color:'#6C391B'}}>Welcome to our school</h1>
            <p className=" pt-3 fw-bold fs-5">We are glad to have you here. Our school system is designed to give both parents and administrators easy access to information and communication. </p>
        {!currentParent&&<Link to='/login' className="btn btn-outline-secondary position-relative mt-2 mx-4 px-4 "  style={{color:'#6C391B'}}>Log in</Link>}
        {currentParent&&<Link to='/profile' className="btn btn-outline-secondary position-relative mt-2 mx-4 px-4 "  style={{color:'#6C391B'}}>Profile</Link>}
        
        </div>
        <img src="./asset/img/4.jpg" style={{width:'850px'}} className="p-2 d-lg-block d-none "   alt="descreptionImg" />

      </div>
  );
}

export default HomePageBody;