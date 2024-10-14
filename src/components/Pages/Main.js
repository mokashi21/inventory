import React, { useState } from "react";
import  { useDispatch } from "react-redux";
import { addItem } from "../redux/inventorySlice";
const Main = () => {
    const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    itemname: "",
    qunatityname: "",
    unit: "",
    date: "",
    suppliername: "",
    companyname: "",
    country : "",
    city: "",
    email: "",
  });

  const handleChange =  (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData);
    try {
      dispatch(addItem(formData));
      setFormData({
        itemname: "",
        qunatityname: "",
        unit: "",
        date: "",
        suppliername: "",
        companyname: "",
        country : "",
        city: "",
        email: "",
      })
    } catch (error) {
        console.log("error", error)
    }
  };

  return (
    <div className="container">
      <div className="d-flex align-items-center justify-content-center mt-5 ">
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="itemCheckbox"
            name="Item"
          />
          <label className="form-check-label" htmlFor="itemCheckbox">
            Item
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="supplierCheckbox"
            name="Supplier"
          />
          <label className="form-check-label" htmlFor="supplierCheckbox">
            Supplier
          </label>
        </div>
      </div>
      <div className=" mt-5 mb-5">
        <h2 className="text-center">Item Details</h2>
        <div className=" rounded-3  ">
          <form className="" onSubmit={handleSubmit} >
            <div className="form-row d-flex flex-wrap bg-primary p-5 rounded-4 ">
              <div className="form-group col-md-6 mb-4 pe-4 ">
                <label htmlFor="itemname">ItemName</label>
                <input
                  type="text"
                  className="form-control w-100 "
                  name="itemname"
                  id="itemname"
                  placeholder="Enter Item Name"
                  onChange={handleChange}
                />
                <small className="text-muted text-secondary">
                  Max 50 Characters
                </small>
              </div>
              <div className="form-group col-md-6 mb-4">
                <label htmlFor="qunatityname" className="font-weight-bold">
                  Quantity
                </label>
                <input
                  type="number"
                  className="form-control w-100 "
                  name="qunatityname"
                  id="qunatityname"
                  placeholder="Enter Value"
                  onChange={handleChange}
                />
                <small className="text-muted text-secondary">
                  Numberic Value
                </small>
              </div>
              <div className="form-group col-md-6 pe-4">
                <label htmlFor="unit">Unit Price</label>
                <input
                  type="text"
                  className="form-control w-100 "
                  id="unit"
                  placeholder="Enter Unit Price"
                  name="unit"
                  onChange={handleChange}
                />
                <small className="text-muted text-secondary">
                  Numeric Value (USD)
                </small>
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="date">Date Of Submission</label>
                <input
                  type="date"
                  className="form-control w-100 "
                  id="date"
                  placeholder="Select date"
                  name="date"
                  onChange={handleChange}
                />
                <small className="text-muted text-secondary">
                  Formate : DD/MM/YYYY
                </small>
              </div>
            </div>
            <div className=" mt-5 mb-3 bg-primary rounded-4">
              <h2 className="text-center pt-4">Supplier Details</h2>
              <div className="bg-primary rounded-3  ">
                <form className="p-5 ">
                  <div className="form-row d-flex flex-wrap  ">
                    <div className="form-group col-md-6 mb-4 pe-4 ">
                      <label htmlFor="suppliername">Supplier Name</label>
                      <input
                        type="text"
                        className="form-control w-100 "
                        id="suppliername"
                        name="suppliername"
                        onChange={handleChange}
                        placeholder="Enter Supplier Name"
                      />
                      <small className="text-muted text-secondary">
                        Max 50 Characters
                      </small>
                    </div>
                    <div className="form-group col-md-6 mb-4 pe-4 ">
                      <label htmlFor="companyname">Company Name</label>
                      <input
                        type="text"
                        className="form-control w-100 "
                        id="companyname"
                        name="companyname"
                        placeholder="Enter Company Name"
                        onChange={handleChange}
                      />
                      <small className="text-muted text-secondary">
                        Max 50 Characters
                      </small>
                    </div>

                    <div className="form-group col-md-6 mb-4 pe-4 ">
                      <label htmlFor="country">Country</label>
                      <select id="country" className="form-control">
                        <option selected  >USA</option>
                        <option>USA</option>
                        <option>AUS</option>
                        <option>India</option>
                      </select>
                      <small className="text-muted text-secondary">
                        Select Country From the List.
                      </small>
                    </div>
                    
                    <div className="form-group col-md-6 mb-4 pe-4 ">
                      <label htmlFor="states">State</label>
                      <select id="states" className="form-control">
                        <option selected>Florida</option>
                        <option>Florida</option>
                        <option>LOS.Ang</option>
                        <option>San Deigo</option>
                      </select>
                      <small className="text-muted text-secondary">
                        Select State From the List.
                      </small>
                    </div>
                    <div className="form-group col-md-6 pe-4">
                      <label htmlFor="city">City</label>
                      <input
                        type="text"
                        className="form-control w-100 "
                        id="city"
                        placeholder="Enter City"
                        name="city"
                        onChange={handleChange}
                      />
                      <small className="text-muted text-secondary">
                        Max 10 Characters
                      </small>
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        className="form-control w-100 "
                        id="email"
                        placeholder="Enter email"
                        name="email"
                        onChange={handleChange}
                      />
                      <small className="text-muted text-secondary">
                        Enter Valid Email
                      </small>
                    </div>
                  </div>
                </form>
              </div>
              {/*  */}
            </div>
            <div className="d-flex justify-content-center align-items-center" >
            <button type="submit" className="btn btn-success">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Main;
