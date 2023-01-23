import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/Resister.css";
import "./css/main.css";

function AddTutors() {
  const navigate = useNavigate();
  const [Expert_firstname, setExpert_firstname] = useState("");
  const [Expert_lastname, setExpert_lastname] = useState("");
  const [Expert_email, setExpert_email] = useState("");
  const [Expert_contact, setExpert_contact] = useState("");
  const [Expert_Address, setExpert_Address] = useState("");
  return (
    <div>
      <>
        <div class='one'>
          <h1>OTM Member Data</h1>
        </div>
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
                        <h5 class='modal-title text_white'>Add Tutors</h5>
                      </div>
                      <div class='modal-body'>
                        <form
                          onSubmit={(e) => {
                            e.preventDefault();
                          }}>
                          <div class=''>
                            <input
                              type='text'
                              value={Expert_firstname}
                              onInput={(e) => {
                                console.log(e.target.value);
                                setExpert_firstname(e.target.value);
                              }}
                              class='form-control'
                              placeholder=' Enter First Name'
                            />
                          </div>
                          <div class=''>
                            <input
                              type='text'
                              value={Expert_lastname}
                              onInput={(e) => {
                                console.log(e.target.value);
                                setExpert_lastname(e.target.value);
                              }}
                              class='form-control'
                              placeholder='Enter Last Name'
                            />
                          </div>
                          <div class=''>
                            <input
                              type='text'
                              value={Expert_email}
                              onInput={(e) => {
                                console.log(e.target.value);
                                setExpert_email(e.target.value);
                              }}
                              class='form-control'
                              placeholder='Enter Your Email'
                            />
                          </div>
                          <div class=''>
                            <input
                              type='Text'
                              value={Expert_contact}
                              onInput={(e) => {
                                console.log(e.target.value);
                                setExpert_contact(e.target.value);
                              }}
                              class='form-control'
                              placeholder='Enter Your Contect No.'
                            />
                          </div>
                          <div class=''>
                            <input
                              type='Text'
                              value={Expert_Address}
                              onInput={(e) => {
                                console.log(e.target.value);
                                setExpert_Address(e.target.value);
                              }}
                              class='form-control'
                              placeholder='Enter Address'
                            />
                          </div>
                          <button
                            class='btn_1 full_width text-center'
                            onClick={() => {
                              var formdata = new FormData();
                              formdata.append("Expert_firstname", Expert_firstname);
                              formdata.append("Expert_lastname", Expert_lastname);
                              formdata.append("Expert_email", Expert_email);
                              formdata.append("Expert_contact", Expert_contact);
                              formdata.append("Expert_Address", Expert_Address);

                              var requestOptions = {
                                method: "POST",
                                body: formdata,
                              };

                              fetch("http://127.0.0.1:5000/tutors", requestOptions)
                                .then((response) => response.text())
                                .then((result) => {
                                  alert("Data inserted");
                                  console.log(result);
                                  navigate("/Updatetutors");
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

export default AddTutors;
