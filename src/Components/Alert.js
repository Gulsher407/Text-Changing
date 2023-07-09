import React from "react";

export default function Alert(props) {
  return (
    props.alert && 
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <p className=" w-fit  ">
          {props.alert.msg}: {props.alert.type}
        </p>
      </div>
    
  );
}
