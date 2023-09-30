import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";

const UserDetails = (props) => {
  // narik parameter di url
  const id = useParams();

  // parsing tipe data dari objek ke int
  const index = parseInt(id.id);
  // console.log(index);

// function untuk narik data pake index
function correctIndex(x) {
return x -= 1
}

// inisialisasi location dan buat tarik data di state
const location = useLocation();
const fetchData = location.state.table

  // console.log(fetchData[correctIndex(index)].firstName)

  return (
    <>
      <div className="p-5">
        <Link to={"/createAccount"}>Back to create account</Link>
      </div>
    <div className="row">
      <div className="col-lg mx-auto p-5 text-center ">
      <h1 className='pb-5'>USER DETAILS</h1>
        <p>id: {id.id}</p>
        <p>Name: {fetchData[correctIndex(index)].firstName} {fetchData[correctIndex(index)].lastName}</p>
      <p>Username: {fetchData[correctIndex(index)].userName} </p>
      <p>Email: {fetchData[correctIndex(index)].email} </p>
      <p>Gender: {fetchData[correctIndex(index)].gender} </p>
      <p>Address: {fetchData[correctIndex(index)].address} </p>
      <p>Address Optional: {fetchData[correctIndex(index)].address2}</p>
      <p>Nationality: {fetchData[correctIndex(index)].nationality}</p>
      <p>Languages: {fetchData[correctIndex(index)].language}</p>
      </div>
    </div>
    </>
  );
};

export default UserDetails;
