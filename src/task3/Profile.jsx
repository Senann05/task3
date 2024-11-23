import React from "react";
import ReactDOM from "react-dom";
import Email from "./Email";
import Name from "./Name";
import Address from "./Address";
import PersonalInfo from "./PersonalInfo";
import "./index.css";

const Profile = () => {
  return (
    <div>
      <h1>Profile</h1>
       <PersonalInfo /> 
       <Name />
       <Email />
       <Address />
     
    </div>
  );
};
ReactDOM.render(<Profile />, document.getElementById("root"));
