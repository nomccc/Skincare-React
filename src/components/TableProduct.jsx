import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteProduct } from "../redux/createSlice/createSlice";

const TableProduct = ({ table, setTable }) => {
  const product = useSelector((state) => state.products);
  const deleteBtn = useDispatch();

  return (
    <>
      <h1 className="text-center mb-5">List Product</h1>

      <table id="tableProduct" className="table table-bordered">
        <thead>
          <tr>
            <th>id</th>
            <th>Product Name</th>
            <th>Product Category</th>
            <th>Product Image</th>
            <th>Product Freshness</th>
            <th>Product Description</th>
            <th>Product Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody id="tableBody">
          {product.length > 0 &&
            product.map((data, index) => {
              return (
                <tr key={index}>
                  <td>
                    <Link state={{ table }} to={`/${data.id}`}>
                      {data.id}
                    </Link>
                  </td>
                  <td>{data.productName}</td>
                  <td>{data.productCategory}</td>
                  <td>
                    <img width={100} height={100} src={data.productImage}></img>
                  </td>
                  <td>{data.productFreshness}</td>
                  <td>{data.productDescription}</td>
                  <td>{data.productPrice}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={ ()=> { deleteBtn(deleteProduct(data)) }}
                    >
                      Delete
                    </button>
                    <button className="btn btn-warning">Edit</button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export default TableProduct;
