// import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/createSlice/createSlice";
// import {useFormik} from "formik";

const FormProduct = ({ table, setTable }) => {
  // let count = 0
  // State itu adalah data UI yang selalu berubah

  // const [table, setTable] = useState([]);

  const [form, setForm] = useState({
    id: "",
    productName: "",
    productCategory: "",
    productImage: "",
    productFreshness: "",
    productDescription: "",
    productPrice: "",
  });

  const [errorMsg, setErrorMsg] = useState({
    productName: "",
    productCategory: "",
    productImage: "",
    productFreshness: "",
    productDescription: "",
    productPrice: "",
  });

  // bikin dispatch. Dispatch itu mengirimkan action dari state yang ada di slice tadi
  const dispatch = useDispatch();

  const [id, setId] = useState(1);

  function checkValidate(event) {
    if (
      form.productName.trim() === "" ||
      form.productName == null ||
      form.productCategory.trim() === "" ||
      form.productCategory == null ||
      form.productImage.trim() === "" ||
      form.productImage == null ||
      form.productFreshness.trim() === "" ||
      form.productFreshness == null ||
      form.productDescription.trim() === "" ||
      form.productDescription == null ||
      form.productPrice.trim() === "" ||
      form.productPrice == null
    ) {
      event.preventDefault();
      event.stopPropagation();
      window.alert("Input cant be empty");
    } else {
      event.preventDefault();
      event.stopPropagation();
      setTable((old) => [...old, { ...form, id }]);
      setId(id + 1);
      setForm({
        ...form,
        id,
      });
      dispatch(addProduct(form));
    }
  }

  // regex
  const nameRegex = /^[a-zA-Z\s]+$/;

  return (
    <>
      <h3>Detail Product</h3>
      <form
        className="needs-validation"
        id="form"
        onSubmit={(e) => {
          // console.log(form.productName)
          // e.preventDefault();
          // e.stopPropagation();
          checkValidate(e);
        }}
      >
        <div className="mb-3">
          <label htmlFor="productName" className="form-label">
            Product Name
          </label>
          <input
            type="text"
            className="form-control w-75"
            maxLength="25"
            id="productName"
            value={form.productName}
            onChange={(e) => {
              setForm((old) => {
                return {
                  ...old,
                  productName: e.target.value,
                };
              });
              if (!nameRegex.test(e.target.value)) {
                setErrorMsg({
                  ...errorMsg,
                  productName: "Product name only allow letters and space",
                });
              } else if (e.target.value.length >= 10) {
                setErrorMsg({
                  ...errorMsg,
                  productName: "Product name must not exceed 10 characters",
                });
              } else if (e.target.value.length >= 25) {
                setErrorMsg({
                  ...errorMsg,
                  productName: "Product name has exceed maximum characters",
                });
              } else {
                setErrorMsg({
                  ...errorMsg,
                  productName: "",
                });
              }
            }}
          />
          <div className="error">{errorMsg.productName}</div>
        </div>
        <div className="mb-3">
          <label htmlFor="productCategory" className="form-label">
            Product Category
          </label>
          <select
            className="form-select w-50 "
            id="productCategory"
            value={form.productCategory}
            onChange={(e) => {
              setForm((old) => {
                return {
                  ...old,
                  productCategory: e.target.value,
                };
              });
            }}
          >
            <option value="" disabled>
              Choose...
            </option>
            <option value="clothes">Clothes</option>
            <option value="Pants">Pants</option>
            <option value="Accesories">Accesories</option>
          </select>
          <div className="error"></div>
        </div>
        <div className="mb-4">
          <label htmlFor="productImage" className="form-label">
            Image of Product
          </label>
          {/* <img src={form.productImage} /> */}
          <input
            type="file"
            className="form-control w-50"
            id="productImage"
            // value={form.productImage}
            onChange={(e) => {
              // console.log(e.currentTarget.files);
              const file = e.target.files[0];
              // Memeriksa ekstensi file
              if (
                file &&
                (file.type === "image/jpeg" || file.type === "image/png")
              ) {
                setForm((old) => {
                  return {
                    ...old,
                    productImage: URL.createObjectURL(e.target.files[0]),
                  };
                });
                setErrorMsg({
                  ...errorMsg,
                  productImage: "",
                });
              } else {
                setErrorMsg({
                  ...errorMsg,
                  productImage: "Please choose a JPG or PNG file",
                });
              }
            }}
          />
          <div className="error">{errorMsg.productImage}</div>
        </div>
        <div className="mb-3">
          <p>Product Freshness</p>
          <div className="form-check">
            <input
              type="radio"
              name="productFreshness"
              id="productFreshness1"
              value="brand New"
              onChange={(e) => {
                setForm((old) => {
                  return {
                    ...old,
                    productFreshness: e.target.value,
                  };
                });
              }}
            />
            <label htmlFor="productFreshness1" className="form-label">
              Brand New
            </label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              name="productFreshness"
              id="productFreshness2"
              value="Second Hand"
              onChange={(e) => {
                setForm((old) => {
                  return {
                    ...old,
                    productFreshness: e.target.value,
                  };
                });
              }}
            />
            <label htmlFor="productFreshness2" className="form-label">
              Second Hand
            </label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              name="productFreshness"
              id="productFreshness3"
              value="Refurbished"
              onChange={(e) => {
                setForm((old) => {
                  return {
                    ...old,
                    productFreshness: e.target.value,
                  };
                });
              }}
            />
            <label htmlFor="productFreshness3" className="form-label">
              Refurbished
            </label>
          </div>
          <div className="error"></div>
        </div>
        <div className="mb-3">
          <label htmlFor="productDesc" className="form-label">
            Additional Description
          </label>
          <textarea
            name="productDescription"
            id="productDesc"
            cols="30"
            rows="10"
            className="form-control"
            value={form.productDescription}
            onChange={(e) => {
              setForm((old) => {
                return {
                  ...old,
                  productDescription: e.target.value,
                };
              });
            }}
          ></textarea>
          <div className="error"></div>
        </div>
        <div className="mb-3">
          <label htmlFor="productPrice" className="form-label">
            Product Price
          </label>
          <input
            type="number"
            id="productPrice"
            className="form-control"
            value={form.productPrice}
            onChange={(e) => {
              setForm((old) => {
                return {
                  ...old,
                  productPrice: e.target.value,
                };
              });
            }}
          />
          <div className="error"></div>
        </div>
        <button
          type="submit"
          id="submitButton"
          className="col-sm-12 btn-primary rounded-2 py-2"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default FormProduct;
