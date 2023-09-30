import { useEffect, useState } from "react";

const FormAccount = ({ table, setTable }) => {
  const [form, setForm] = useState({
    id: 0,
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    gender: "",
    address: "",
    address2: "",
    nationality: "",
    language: "",
  });

  const [id, setId] = useState(1);

  return (
    <form
      className="needs-validation"
      id="formCreateAcc"
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        setTable((old) => [...old, { ...form, id }]);
        setId(id + 1);
        // location.state = [{FormData: table}]
        // console.log(location)
      }}
    >
      <div className="row mb-3">
        <div className="col">
          <label htmlFor="firstName" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            maxLength={25}
            required
            value={form.firstName}
            onChange={(e) => {
              setForm((old) => {
                return {
                  ...old,
                  firstName: e.target.value,
                };
              });
            }}
          />
          <div className="invalid-feedback">Input First Name</div>
        </div>
        <div className="col">
          <label htmlFor="lastName" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            maxLength={25}
            required=""
            value={form.lastName}
            onChange={(e) => {
              setForm((old) => {
                return {
                  ...old,
                  lastName: e.target.value,
                };
              });
            }}
          />
          <div className="invalid-feedback">Input Last Name</div>
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="userName" className="form-label">
          Username
        </label>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <div className="input-group-text rounded-0">@</div>
          </div>
          <input
            type="text"
            className="form-control"
            id="userName"
            required=""
            value={form.userName}
            onChange={(e) => {
              setForm((old) => {
                return {
                  ...old,
                  userName: e.target.value,
                };
              });
            }}
          />
          <div className="invalid-feedback">Username not valid</div>
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="emailUser" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="emailUser"
          placeholder="you@example.com"
          required=""
          value={form.email}
          onChange={(e) => {
            setForm((old) => {
              return {
                ...old,
                email: e.target.value,
              };
            });
          }}
        />
        <div className="invalid-feedback">Email not valid</div>
      </div>
      <div className="mb-3">
        <p>Gender</p>
        <div className="form-check">
          <input
            type="radio"
            name="gender"
            id="gender1"
            defaultValue=""
            required=""
            value="Male"
            onChange={(e) => {
              setForm((old) => {
                return {
                  ...old,
                  gender: e.target.value,
                };
              });
            }}
          />
          <label htmlFor="gender1" className="form-label">
            Male
          </label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            name="gender"
            id="gender2"
            defaultValue=""
            value="Female"
            onChange={(e) => {
              setForm((old) => {
                return {
                  ...old,
                  gender: e.target.value,
                };
              });
            }}
          />
          <label htmlFor="gender2" className="form-label">
            Female
          </label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            name="gender"
            id="gender3"
            defaultValue=""
            value="other"
            onChange={(e) => {
              setForm((old) => {
                return {
                  ...old,
                  email: e.target.value,
                };
              });
            }}
          />
          <label htmlFor="gender3" className="form-label">
            Other
          </label>
          <div className="invalid-feedback">
            Please choose one of the option
          </div>
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="addressUser" className="form-label">
          Address
        </label>
        <input
          type="text"
          className="form-control"
          id="addressUser"
          placeholder="1234 Main St"
          required=""
          value={form.address}
          onChange={(e) => {
            setForm((old) => {
              return {
                ...old,
                address: e.target.value,
              };
            });
          }}
        />
        <div className="invalid-feedback">Address not valid</div>
      </div>
      <div className="mb-3">
        <label htmlFor="addressUser2" className="form-label">
          Address <span className="text-muted">(Optional)</span>
        </label>
        <input
          type="text"
          className="form-control"
          id="addressUser2"
          placeholder="Apartment or suite"
          value={form.address2}
          onChange={(e) => {
            setForm((old) => {
              return {
                ...old,
                address2: e.target.value,
              };
            });
          }}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="nationalityUser" className="form-label">
          Nationality
        </label>
        <select
          className="form-select w-50 "
          id="nationalityUser"
          required=""
          value={form.nationality}
          onChange={(e) => {
            setForm((old) => {
              return {
                ...old,
                nationality: e.target.value,
              };
            });
          }}
        >
          <option value="" selected="" disabled>
            Choose...
          </option>
          <option value="indonesia">Indonesian</option>
          <option value="nonIndonesia">Non-Indonesian</option>
        </select>
        <div className="invalid-feedback">Please select a category</div>
      </div>
      <div className="mb-4">
        <p>Language Spoken :</p>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            name="language"
            defaultValue="bahasa"
            id="language1"
            value="Bahasa"
            onChange={(e) => {
              setForm((old) => {
                return {
                  ...old,
                  language: e.target.value,
                };
              });
            }}
          />
          <label htmlFor="language1" className="form-label">
            Bahasa
          </label>
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            defaultValue="english"
            name="language"
            id="language2"
            value="English"
            onChange={(e) => {
              setForm((old) => {
                return {
                  ...old,
                  language: e.target.value,
                };
              });
            }}
          />
          <label htmlFor="language2" className="form-label">
            English
          </label>
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            defaultValue="Other"
            name="language"
            id="language3"
            value="Other"
            onChange={(e) => {
              setForm((old) => {
                return {
                  ...old,
                  language: e.target.value,
                };
              });
            }}
          />
          <label htmlFor="language3" className="form-label">
            Other
          </label>
        </div>
      </div>
      <button
        type="submit"
        id="submitButton"
        className="col-sm-12 btn-primary rounded-2 py-2"
      >
        Submit
      </button>
    </form>
  );
};

export default FormAccount;
