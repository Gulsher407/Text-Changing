import React from "react";

export default function Alert({ alert }) {
  return (
    <div className="alert-container">
      {alert && (
        <div className={`alert alert-${alert.type} animated fadeIn`} role="alert">
          <p>{alert.msg}</p>
        </div>
      )}
    </div>
  );
}
