import React from "react";
import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const TableAccount = ({ table, setTable }) => {

  return (
    <>
      <h1 className="text-center mb-5">List User</h1>

      <table id="tableAccount" className="table table-bordered">
        <thead>
          <tr>
            <th>id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Address</th>
            <th>Address Optional</th>
            <th>Nationality</th>
            <th>Languages</th>
          </tr>
        </thead>
        <tbody id="tableBody">
          {table.map((data) => {
            return (
              <tr>
                <td>
                  <Link state={{ table }} to={`/createAccount/${data.id}`}>
                    {data.id}
                  </Link>
                </td>
                <td>{data.firstName}</td>
                <td>{data.lastName}</td>
                {/* <td>
                  <img width={100} height={100} src={data.productImage}></img>
                </td> */}
                <td>{data.userName}</td>
                <td>{data.email}</td>
                <td>{data.gender}</td>
                <td>{data.address}</td>
                <td>{data.address2}</td>
                <td>{data.nationality}</td>
                <td>{data.language}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      setTable((old) => {
                        return old.filter((d) => d.id !== data.id);
                      });
                    }}
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

export default TableAccount;
