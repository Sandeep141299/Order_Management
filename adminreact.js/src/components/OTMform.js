import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { cloneDeep } from "lodash";
import "./css/Resister.css";
import "./css/main.css";

function OTMform() {
  const navigate = useNavigate();
  let params = useParams();
  console.log(params, params.userId);

  const [userToEdit, setUserToEdit] = useState([]);
  const [updated, setUpdated] = useState(false);

  const fetchDataforupdate = (userId) => {
    console.log("OTM ID", userId);
    fetch("http://127.0.0.1:5000/getotmuser/".concat(userId))
      .then((res) => res.json())
      .then((data) => {
        // do something with data
        console.log("OTM DATA", data);
        setUserToEdit(JSON.parse(data)[0]);
        // navigate("/OTMform");
      })
      .catch((rejected) => {
        console.log(rejected);
      });
  };
  useEffect(() => {
    fetchDataforupdate(params.userId);
  }, []);
  return (
    <div>
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
                      <h5 class='modal-title text_white'>Add OTM Member</h5>
                    </div>
                    <div class='modal-body'>
                      {updated ? <h1>Updated!</h1> : null}
                      {userToEdit.length > 0 && (
                        <form
                          onSubmit={(e) => {
                            e.preventDefault();
                          }}>
                          <div class=''>
                            <input
                              type='text'
                              value={userToEdit[1]}
                              onInput={(e) => {
                                let updatedData = cloneDeep(userToEdit);
                                updatedData[1] = e.target.value;
                                setUserToEdit(updatedData);
                              }}
                              class='form-control'
                              placeholder=' Enter First Name'
                            />
                          </div>
                          <div class=''>
                            <input
                              type='text'
                              value={userToEdit[2]}
                              onInput={(e) => {
                                let updatedData = cloneDeep(userToEdit);
                                updatedData[2] = e.target.value;
                                setUserToEdit(updatedData);
                              }}
                              class='form-control'
                              placeholder='Enter Last Name'
                            />
                          </div>
                          <div class=''>
                            <input
                              type='text'
                              value={userToEdit[3]}
                              onInput={(e) => {
                                let updatedData = cloneDeep(userToEdit);
                                updatedData[3] = e.target.value;
                                setUserToEdit(updatedData);
                              }}
                              class='form-control'
                              placeholder='Enter password'
                            />
                          </div>
                          <div class=''>
                            <input
                              type='text'
                              value={userToEdit[4]}
                              onInput={(e) => {
                                let updatedData = cloneDeep(userToEdit);
                                updatedData[4] = e.target.value;
                                setUserToEdit(updatedData);
                              }}
                              class='form-control'
                              placeholder='Enter Your Email'
                            />
                          </div>
                          <div class=''>
                            <input
                              type='number'
                              value={userToEdit[5]}
                              onInput={(e) => {
                                let updatedData = cloneDeep(userToEdit);
                                updatedData[5] = e.target.value;
                                setUserToEdit(updatedData);
                              }}
                              class='form-control'
                              placeholder='Enter Your Contect No.'
                            />
                          </div>
                          <div class=''>
                            <label htmlFor=''>Select Joining Date</label>
                            <input
                              type='date'
                              value={userToEdit[6]}
                              onInput={(e) => {
                                let updatedData = cloneDeep(userToEdit);
                                updatedData[6] = e.target.value;
                                setUserToEdit(updatedData);
                              }}
                              class='form-control'
                              placeholder='Enter Join date'
                            />
                          </div>
                          <div class=''>
                            <input
                              type='text'
                              value={userToEdit[7]}
                              onInput={(e) => {
                                let updatedData = cloneDeep(userToEdit);
                                updatedData[7] = e.target.value;
                                setUserToEdit(updatedData);
                              }}
                              class='form-control'
                              placeholder='Enter Level'
                            />
                          </div>
                          <button
                            class='btn_1 full_width text-center'
                            onClick={() => {
                              var formdata = new FormData();
                              formdata.append("Otm_username", userToEdit[1]);
                              formdata.append("Otm_lastname", userToEdit[2]);
                              formdata.append("Otm_password", userToEdit[3]);
                              formdata.append("Otm_email", userToEdit[4]);
                              formdata.append("Otm_contact", userToEdit[5]);
                              formdata.append("Otm_joiningDate", userToEdit[6]);
                              formdata.append("Level", userToEdit[7]);

                              var requestOptions = {
                                method: "POST",
                                body: formdata,
                              };

                              fetch("http://127.0.0.1:5000/updateotm/".concat(userToEdit[0]), requestOptions)
                                .then((response) => response.json())
                                .then((result) => {
                                  //   alert("Data Updated");
                                  console.log(typeof result, result);
                                  setUserToEdit([]); // clear
                                  console.log("result", JSON.parse(result));
                                  setUpdated(true);
                                  navigate("/updateotm");
                                })
                                .catch((error) => {
                                  console.log(error);
                                  // alert("error", error)
                                });
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
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OTMform;
