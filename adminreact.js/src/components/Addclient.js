import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/Resister.css";
import "./css/main.css";

function Addclient() {
  const navigate = useNavigate();
  const [Business, setBusiness] = useState(false);
  const [Student, setStudent] = useState(false);
  const [Client_name, setClient_name] = useState("");
  const [Client_contact, setClient_contact] = useState("");
  const [Client_email, setClient_email] = useState("");
  const [Client_status, setClient_status] = useState("");
  const [University, setUniversity] = useState("");
  const [Business_name, setBusiness_name] = useState("");
  const [Student_login, setStudent_login] = useState("");
  const [Student_password, setStudent_password] = useState("");

  const onClick = (e) => {
    setBusiness(e);
    setStudent(e);
  };
  return (
    <div>
      <div class='one'>
        <h1>Add Client</h1>
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
                        <h5 class='modal-title text_white'>Add Client</h5>
                      </div>
                      <div class='modal-body'>
                        <form
                          onSubmit={(e) => {
                            e.preventDefault();
                          }}>
                          <div class=''>
                            <input
                              type='text'
                              value={Client_name}
                              onInput={(e) => {
                                console.log(e.target.value);
                                setClient_name(e.target.value);
                              }}
                              class='form-control'
                              placeholder=' Enter full  Name'
                            />
                          </div>
                          <div class=''>
                            <input
                              type='number'
                              value={Client_contact}
                              onInput={(e) => {
                                console.log(e.target.value);
                                setClient_contact(e.target.value);
                              }}
                              class='form-control'
                              placeholder='Enter Client_contact'
                            />
                          </div>
                          <div class=''>
                            <input
                              type='text'
                              value={Client_email}
                              onInput={(e) => {
                                console.log(e.target.value);
                                setClient_email(e.target.value);
                              }}
                              class='form-control'
                              placeholder='Enter Client_email'
                            />
                          </div>
                          {/* <div class=''>
                            <label htmlFor='' id='Client_status'>
                              Client_status
                            </label>
                            <select
                              class='form-select form-select-md '
                              value={Client_status}
                              onInput={(e) => {
                                console.log(e.target.value);
                                setClient_status(e.target.value);
                              }}>
                              <option value='student'>student</option>
                              <option value='vendor'>vendor</option>
                            </select>
                          </div> */}

                          <div>
                            {Business === 1 ? (
                              <input
                                type='text'
                                value={Business_name}
                                onInput={(e) => {
                                  console.log(e.target.value);
                                  setBusiness_name(e.target.value);
                                }}
                                class='form-control'
                                placeholder='Enter Bussiness name'
                              />
                            ) : (
                              <div></div>
                            )}
                            {/* <button class='btn btn-success btn-sm' onClick={() => setBusiness(!Business)}>
                              Bussiness
                            </button> */}
                          </div>
                          {/* <div class=''>
                            <input
                              type='text'
                              value={Business_name}
                              onInput={(e) => {
                                console.log(e.target.value);
                                setBusiness_name(e.target.value);
                              }}
                              class='form-control'
                              placeholder='Enter Bussiness name'
                            />
                          </div> */}
                          <div>
                            {Student === 2 ? (
                              <div>
                                <div class=''>
                                  <input
                                    type='text'
                                    value={University}
                                    onInput={(e) => {
                                      console.log(e.target.value);
                                      setUniversity(e.target.value);
                                    }}
                                    class='form-control'
                                    placeholder='Enter Your University'
                                  />
                                </div>
                                <div class=''>
                                  <input
                                    type='text'
                                    value={Student_login}
                                    onInput={(e) => {
                                      console.log(e.target.value);
                                      setStudent_login(e.target.value);
                                    }}
                                    class='form-control'
                                    placeholder='Enter Student_login'
                                  />
                                </div>
                                <div class=''>
                                  <input
                                    type='text'
                                    value={Student_password}
                                    onInput={(e) => {
                                      console.log(e.target.value);
                                      setStudent_password(e.target.value);
                                    }}
                                    class='form-control'
                                    placeholder='Enter Student_password'
                                  />
                                </div>
                              </div>
                            ) : (
                              <div></div>
                            )}
                            {/* <button class='btn btn-success btn-sm' onClick={() => setStudent(!Student)}>
                              Student
                            </button> */}
                          </div>
                          {/* <div class=''>
                            <input
                              type='text'
                              value={University}
                              onInput={(e) => {
                                console.log(e.target.value);
                                setUniversity(e.target.value);
                              }}
                              class='form-control'
                              placeholder='Enter Your University'
                            />
                          </div>
                          <div class=''>
                            <input
                              type='text'
                              value={Student_login}
                              onInput={(e) => {
                                console.log(e.target.value);
                                setStudent_login(e.target.value);
                              }}
                              class='form-control'
                              placeholder='Enter Student_login'
                            />
                          </div>
                          <div class=''>
                            <input
                              type='text'
                              value={Student_password}
                              onInput={(e) => {
                                console.log(e.target.value);
                                setStudent_password(e.target.value);
                              }}
                              class='form-control'
                              placeholder='Enter Student_password'
                            />
                          </div> */}
                          {/* <div>
                            <button class='btn btn-success btn-sm' onClick={() => setStudent(!Student)}>
                              Student
                            </button>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <button class='btn btn-success btn-sm' onClick={() => setBusiness(!Business)}>
                              Bussiness
                            </button>
                          </div> */}

                          <div
                            class=' cs_check_box'
                            value={Client_status}
                            onInput={(e) => {
                              console.log(e.target.value);
                              setClient_status(e.target.value);
                            }}>
                            <label htmlFor=''>select client stuste </label>
                            <label for='check_box'> Student </label>
                            <input onClick={() => onClick(2)} class='form-check-redio' type='radio' value='student' name='flexRadioDefault' id='flexRadioDefault2' />
                            <label for='check_box'> Vendor </label>
                            <input onClick={() => onClick(1)} class='form-check-redio' type='radio' value='vendor' name='flexRadioDefault' id='flexRadioDefault2' />
                          </div>

                          <button
                            class='btn_1 full_width text-center'
                            onClick={() => {
                              var formdata = new FormData();
                              formdata.append("Client_name", Client_name);
                              formdata.append("Client_contact", Client_contact);
                              formdata.append("Client_email", Client_email);
                              formdata.append("Client_status", Client_status);
                              formdata.append("University", University);
                              formdata.append("Business_name", Business_name);
                              formdata.append("Student_login", Student_login);
                              formdata.append("Student_password", Student_password);

                              var requestOptions = {
                                method: "POST",
                                body: formdata,
                              };

                              fetch("http://127.0.0.1:5000/addclient", requestOptions)
                                .then((response) => response.text())
                                .then((result) => {
                                  alert("Data inserted");
                                  console.log(result);
                                  navigate("/UpdateClientdata");
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

export default Addclient;
