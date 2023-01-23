import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/Resister.css";
import "./css/main.css";

function Addotm() {
  const navigate = useNavigate();
  const [Otm_username, setOtm_username] = useState("");
  const [Otm_lastname, setOtm_lastname] = useState("");
  const [Otm_password, setOtm_password] = useState("");
  const [Otm_email, setOtm_email] = useState("");
  const [Otm_contact, setOtm_contact] = useState("");
  const [Otm_joiningDate, setOtm_joiningDate] = useState("");
  const [Level, setLevel] = useState("");

  return (
    <div>
      <div class='one'>
        <h1>OTM Member Data</h1>
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
                        <h5 class='modal-title text_white'>Add OTM Member</h5>
                      </div>
                      <div class='modal-body'>
                        <form
                          onSubmit={(e) => {
                            e.preventDefault();
                          }}>
                          <div class=''>
                            <input
                              type='text'
                              value={Otm_username}
                              onInput={(e) => {
                                console.log(e.target.value);
                                setOtm_username(e.target.value);
                              }}
                              class='form-control'
                              placeholder=' Enter First Name'
                            />
                          </div>
                          <div class=''>
                            <input
                              type='text'
                              value={Otm_lastname}
                              onInput={(e) => {
                                console.log(e.target.value);
                                setOtm_lastname(e.target.value);
                              }}
                              class='form-control'
                              placeholder='Enter Last Name'
                            />
                          </div>
                          <div class=''>
                            <input
                              type='text'
                              value={Otm_password}
                              onInput={(e) => {
                                console.log(e.target.value);
                                setOtm_password(e.target.value);
                              }}
                              class='form-control'
                              placeholder='Enter password'
                            />
                          </div>
                          <div class=''>
                            <input
                              type='text'
                              value={Otm_email}
                              onInput={(e) => {
                                console.log(e.target.value);
                                setOtm_email(e.target.value);
                              }}
                              class='form-control'
                              placeholder='Enter Your Email'
                            />
                          </div>
                          <div class=''>
                            <input
                              type='number'
                              value={Otm_contact}
                              onInput={(e) => {
                                console.log(e.target.value);
                                setOtm_contact(e.target.value);
                              }}
                              class='form-control'
                              placeholder='Enter Your Contect No.'
                            />
                          </div>
                          <div class=''>
                            <label htmlFor=''>Select Joining Date</label>
                            <input
                              type='date'
                              value={Otm_joiningDate}
                              onInput={(e) => {
                                console.log(e.target.value);
                                setOtm_joiningDate(e.target.value);
                              }}
                              class='form-control'
                              placeholder='Enter Join date'
                            />
                          </div>
                          <div class=''>
                            <input
                              type='text'
                              value={Level}
                              onInput={(e) => {
                                console.log(e.target.value);
                                setLevel(e.target.value);
                              }}
                              class='form-control'
                              placeholder='Enter Level'
                            />
                          </div>
                          <button
                            class='btn_1 full_width text-center'
                            onClick={() => {
                              var formdata = new FormData();
                              formdata.append("Otm_username", Otm_username);
                              formdata.append("Otm_lastname", Otm_lastname);
                              formdata.append("Otm_password", Otm_password);
                              formdata.append("Otm_email", Otm_email);
                              formdata.append("Otm_contact", Otm_contact);
                              formdata.append("Otm_joiningDate", Otm_joiningDate);
                              formdata.append("Level", Level);

                              var requestOptions = {
                                method: "POST",
                                body: formdata,
                              };

                              fetch("http://127.0.0.1:5000/otm", requestOptions)
                                .then((response) => response.text())
                                .then((result) => {
                                  alert("Data inserted");
                                  console.log(result);
                                  navigate("/updateotm");
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

export default Addotm;
