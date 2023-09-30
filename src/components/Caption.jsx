import React from "react";
import { Link } from "react-router-dom";

const Caption = () => {
  return (
    <>
      <div className="row text-center">
        <img
          src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg"
          alt="bootstrap-logo"
          style={{ width: "100px" }}
          className="mx-auto"
        />
        <h2 className="pt-3">Create Product</h2>
        <p>
          Below is an example form built entirely with Bootstrap’s form
          controls. Each required form group has a validation state that can be
          triggered by attempting to submit the form without completing it.
        </p>
        <Link to={'/createAccount'}>Create Account!</Link>
      </div>
    </>
  );
};

export default Caption;
