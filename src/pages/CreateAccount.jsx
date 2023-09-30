import React, { useEffect, useState } from "react";
import Alert from "../components/Alert";
import article from "../data";
import FormAccount from "../components/FormAccount";
import { Link } from "react-router-dom";
import TableAccount from "../components/TableAccount";


const CreateAccount = () => {
  const heroTitle = article.title.en;
  const heroDesc = article.description.en;
  const [table, setTable] = useState([]);

  // useEffect(()=>{
  //   window.alert("Welcome!"), []
  // })

  return (
    <div className="container-fluid">
      <Alert />
      <div className="col-lg-10 p-5 mx-auto">
      <div className="row text-center">
      <img
          src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg"
          alt="bootstrap-logo"
          style={{ width: "100px" }}
          className="mx-auto"
        />
        <div className="py-4">
        <h2>{heroTitle}</h2>
        <p>{heroDesc}</p>
        <Link to={'/'}>Create Product!</Link>
        </div>
      </div>
        <div
          className="row pt-5"
          style={{ marginLeft: "15%", marginRight: "15%" }}
        >
          <FormAccount table={table} setTable={setTable} />
        </div>
        <div className="col-lg mx-auto pt-5">
          <TableAccount table={table} setTable={setTable} />
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
