import React from 'react'
import { Link, useLocation, useParams } from "react-router-dom";


const ProductDetails = (props) => {
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
          <Link to={"/"}>Back to create Product</Link>
        </div>
      <div className="row">
        <div className="col-lg mx-auto p-5 text-center ">
          <h1 className='pb-5'>PRODUCT DETAILS</h1>
          <p>id: {id.id}</p>
          <p>Name: {fetchData[correctIndex(index)].productName}</p>
        <p>Username: {fetchData[correctIndex(index)].productCategory} </p>
        <p>Email: {fetchData[correctIndex(index)].productImage} </p>
        <p>Gender: {fetchData[correctIndex(index)].productFreshness} </p>
        <p>Address: {fetchData[correctIndex(index)].productDescription} </p>
        <p>Address Optional: {fetchData[correctIndex(index)].productPrice}</p>
        </div>
      </div>
      </>
    );
  };

export default ProductDetails