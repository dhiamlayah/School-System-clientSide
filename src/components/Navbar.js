import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faSchool,
  faUser,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";

function NavigationBar() {
  return (
    <nav
      className="navbar navbar-expand-lg  px-2 bg-"
      style={{ backgroundColor: "#cad2e3" }}
    >
      <div className="container-fluid">
        <div className="">
          <Link
            to="/"
            className="text-decoration-none fs-4"
            style={{ color: "#6C391B" }}
          >
            <FontAwesomeIcon icon={faSchool} /> School System
          </Link>

        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse     px-5 "
          style={{ flexDirection: "row-reverse" }}
          id="navbarNavAltMarkup"
        >
          {location.pathname !== "/admin" && (
            <div className="navbar-nav  ">
              <Link
                to="/Login"
                className="mx-3 fs-6 btn btn-outline-light"
                style={{ color: "#6C391B" }}
              >
                <FontAwesomeIcon icon={faUser} />
                Login
              </Link>
              <Link
                to="/Register"
                className="fs-6  btn btn-outline-light"
                style={{ color: "#6C391B" }}
              >
                <FontAwesomeIcon icon={faUserPlus} /> Register
              </Link>
            </div>
          )}

          {location.pathname === "/admin" && (
            <div className="navbar-nav  ">
              <Link
                to="/"
                className="mx-3 fs-6 btn btn-outline-light"
                style={{ color: "#6C391B" }} >
                  <FontAwesomeIcon icon={faHouse}  className="px-2"/>
                   Home
                </Link>  
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
