import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./css/Resister.css";
import "./css/main.css";

function AddBudget() {
  const navigate = useNavigate();
  const [Client_id, setClient_id] = useState("");
  const [Package_price, setPackage_price] = useState("");
  const [Amount_Paid, setAmount_Paid] = useState("");
  const [Client_name, setClient_name] = useState();
  const [Mode_of_payment, setMode_of_payment] = useState("");
  const [Status, setStatus] = useState("");
  const [userToEdit, setUserToEdit] = useState([]);
  const [users, setUsers] = useState([]);
  const fetchData = () => {
    fetch("http://127.0.0.1:5000/getclientnamedata")
      .then((res) => res.json())
      .then((data) => {
        // do something with data
        console.log(data);
        setUsers(JSON.parse(data));
      })
      .catch((rejected) => {
        console.log(rejected);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div class='one'>
        <h1>Budget Data</h1>
      </div>
      <>
        <div class='main_content_iner '>
          <div class='container-fluid '>
            <div class='row justify-content-center mx-5'>
              <div class='col-12'>
                <div class='dashboard_header '>
                  <div class='row'></div>
                </div>
              </div>
              <div class='col-lg-12'>
                <div class='white_box '>
                  <div class='row justify-content-center'>
                    <div class='col-lg-6'></div>
                    <div class='modal-content cs_modal'>
                      <div class='modal-header justify-content-center theme_bg_1 '>
                        <h5 class='modal-title text_white'>Add Budget </h5>
                      </div>
                      <div class='modal-body'>
                        <form
                          onSubmit={(e) => {
                            e.preventDefault();
                          }}>
                          <div class=''>
                            {/* <label htmlFor=''>select client Name</label> */}
                            <select
                              class='form-select form-select-m'
                              value={Client_name}
                              onInput={(e) => {
                                console.log(e.target.value);
                                setClient_name(e.target.value);
                              }}>
                              <option>Select Client Name</option>
                              {users.map((user, index) => (
                                <option value={user[1]}>{user[1]}</option>
                              ))}
                            </select>
                          </div>
                          <br />
                          <div class=''>
                            <input
                              type='number'
                              value={Package_price}
                              onInput={(e) => {
                                console.log(e.target.value);
                                setPackage_price(e.target.value);
                              }}
                              class='form-control'
                              placeholder='Package Price'
                            />
                          </div>
                          <div class=''>
                            <input
                              type='number'
                              value={Amount_Paid}
                              onInput={(e) => {
                                console.log(e.target.value);
                                setAmount_Paid(e.target.value);
                              }}
                              class='form-control'
                              placeholder='Amount Paid'
                            />
                          </div>
                          <div class=''>
                            <input
                              type='text'
                              value={Mode_of_payment}
                              onInput={(e) => {
                                console.log(e.target.value);
                                setMode_of_payment(e.target.value);
                              }}
                              class='form-control'
                              placeholder='Mode Of Payment'
                            />
                          </div>
                          <div class=''>
                            {/* <label htmlFor=''>select client status </label> */}
                            <select
                              class='form-select form-select-m'
                              value={Status}
                              onInput={(e) => {
                                console.log(e.target.value);
                                setStatus(e.target.value);
                              }}>
                              <option value=''>Select Client Status </option>
                              <option value='Available'>Available</option>
                              <option value='Not available'>Not available</option>
                            </select>
                          </div>
                          <button
                            class='btn_1 full_width text-center'
                            onClick={() => {
                              var formdata = new FormData();
                              formdata.append("Client_name", Client_name);
                              formdata.append("Client_id", users[0]);
                              formdata.append("Package_price", Package_price);
                              formdata.append("Amount_Paid", Amount_Paid);
                              const Pending_amount = Package_price - Amount_Paid;
                              formdata.append("Pending_amount", Pending_amount);
                              formdata.append("Mode_of_payment", Mode_of_payment);
                              formdata.append("Status", Status);

                              var requestOptions = {
                                method: "POST",
                                body: formdata,
                              };

                              fetch("http://127.0.0.1:5000/Budget", requestOptions)
                                .then((response) => response.text())
                                .then((result) => {
                                  alert("Data inserted");
                                  console.log(result);
                                  navigate("/Updatebudget");
                                })
                                .catch((error) => alert("error", error));
                            }}>
                            submit
                          </button>
                          <p>
                            Need an account?
                            <a id='link' data-toggle='modal' data-target='#sing_up' data-dismiss='modal' href='#'>
                              Log in
                            </a>
                          </p>
                          <div class='text-center'>
                            <a id='link' href='#' data-toggle='modal' data-target='#forgot_password' data-dismiss='modal' class='pass_forget_btn'>
                              Forget Password?
                            </a>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default AddBudget;
