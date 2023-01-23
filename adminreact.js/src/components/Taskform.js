import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { cloneDeep } from "lodash";
import "./css/Resister.css";
import "./css/main.css";

function Taskform() {
  const navigate = useNavigate();
  let params = useParams();
  console.log(params, params.userId);
  const [users, setUsers] = useState([]);
  const [userToEdit, setUserToEdit] = useState([]);
  const [updated, setUpdated] = useState(false);
  const [Expert_firstname, setExpert_firstname] = useState("");
  const [Client_name, setClient_name] = useState();
  const [Qc_Expert_name, setQc_Expert_name] = useState("");
  const [Otm_username, setOtm_username] = useState("");
  const [otmmamber, setotmmamber] = useState([]);
  const [expert, setexpert] = useState([]);
  const [client, setclient] = useState([]);

  const fetchDataforupdate = (userId) => {
    console.log("OTM ID", userId);
    fetch("http://127.0.0.1:5000/gettaskid/".concat(userId))
      .then((res) => res.json())
      .then((data) => {
        // do something with data
        console.log("budget DATA", data);
        setUserToEdit(JSON.parse(data)[0]);
        // navigate("/Budgetform");
      })
      .catch((rejected) => {
        console.log(rejected);
      });
  };
  const fetchtutorsData = () => {
    fetch("http://127.0.0.1:5000/getexpert")
      .then((res) => res.json())
      .then((data) => {
        // do something with data
        console.log(data);
        setexpert(JSON.parse(data));
      })
      .catch((rejected) => {
        console.log(rejected);
      });
  };
  const fetchclientData = () => {
    fetch("http://127.0.0.1:5000/getclientdata")
      .then((res) => res.json())
      .then((data) => {
        // do something with data
        console.log(data);
        setclient(JSON.parse(data));
      })
      .catch((rejected) => {
        console.log(rejected);
      });
  };
  const fetchOTMData = () => {
    fetch("http://127.0.0.1:5000/getotm1")
      .then((res) => res.json())
      .then((data) => {
        // do something with data
        console.log(data);
        setotmmamber(JSON.parse(data));
      })
      .catch((rejected) => {
        console.log(rejected);
      });
  };

  useEffect(() => {
    fetchDataforupdate(params.userId);
    fetchOTMData();
    fetchclientData();
    fetchtutorsData();
  }, []);
  return (
    <div>
      <div class='one'>
        <h1>Task Data</h1>
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
                      <h5 class='modal-title text_white'>Task Member</h5>
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
                              placeholder=' Enter Subject'
                            />
                          </div>
                          <div class=''>
                            <input
                              type='number'
                              value={userToEdit[2]}
                              onInput={(e) => {
                                let updatedData = cloneDeep(userToEdit);
                                updatedData[2] = e.target.value;
                                setUserToEdit(updatedData);
                              }}
                              class='form-control'
                              placeholder='Enter Vendor budget'
                            />
                          </div>
                          <div class=''>
                            {/* <label htmlFor=''>select Expert Name</label> */}
                            <select
                              class='form-select form-select-sm'
                              value={Expert_firstname}
                              onInput={(e) => {
                                console.log(e.target.value);
                                setExpert_firstname(e.target.value);
                              }}>
                              <option>Select Expert Name</option>
                              {expert.map((user, index) => (
                                <option value={user[1]}>{user[1]}</option>
                              ))}
                            </select>
                          </div>
                          <br />
                          <div class=''>
                            {/* <label htmlFor=''>select client Name</label> */}
                            <select
                              class='form-select form-select-sm'
                              value={Client_name}
                              onInput={(e) => {
                                console.log(e.target.value);
                                setClient_name(e.target.value);
                              }}>
                              <option>Select Client Name</option>
                              {client.map((user, index) => (
                                <option value={user[1]}>{user[1]}</option>
                              ))}
                            </select>
                          </div>
                          <br />
                          <div class=''>
                            <input
                              type='text'
                              value={userToEdit[5]}
                              onInput={(e) => {
                                let updatedData = cloneDeep(userToEdit);
                                updatedData[5] = e.target.value;
                                setUserToEdit(updatedData);
                              }}
                              class='form-control'
                              placeholder='Enter Status'
                            />
                          </div>
                          <div class=''>
                            <input
                              type='date'
                              value={userToEdit[6]}
                              onInput={(e) => {
                                let updatedData = cloneDeep(userToEdit);
                                updatedData[6] = e.target.value;
                                setUserToEdit(updatedData);
                              }}
                              class='form-control'
                              placeholder='Enter Start_date'
                            />
                          </div>
                          <div class=''>
                            <input
                              type='date'
                              value={userToEdit[7]}
                              onInput={(e) => {
                                let updatedData = cloneDeep(userToEdit);
                                updatedData[7] = e.target.value;
                                setUserToEdit(updatedData);
                              }}
                              class='form-control'
                              placeholder='Enter End_date'
                            />
                          </div>
                          <div class=''>
                            <input
                              type='date'
                              value={userToEdit[8]}
                              onInput={(e) => {
                                let updatedData = cloneDeep(userToEdit);
                                updatedData[8] = e.target.value;
                                setUserToEdit(updatedData);
                              }}
                              class='form-control'
                              placeholder='Enter Expert_startDate'
                            />
                          </div>
                          <div class=''>
                            <input
                              type='date'
                              value={userToEdit[9]}
                              onInput={(e) => {
                                let updatedData = cloneDeep(userToEdit);
                                updatedData[9] = e.target.value;
                                setUserToEdit(updatedData);
                              }}
                              class='form-control'
                              placeholder='Enter Expert_endDate'
                            />
                          </div>
                          <div class=''>
                            {/* <label htmlFor=''>Select QC Expert Name</label> */}
                            <select
                              class='form-select form-select-sm'
                              value={Qc_Expert_name}
                              onInput={(e) => {
                                console.log(e.target.value);
                                setQc_Expert_name(e.target.value);
                              }}>
                              <option>Select QC Expert Name</option>
                              {expert.map((user, index) => (
                                <option value={user[1]}>{user[1]}</option>
                              ))}
                            </select>
                          </div>
                          <br />
                          <div class=''>
                            {/* <label htmlFor=''> </label> */}
                            <select
                              class='form-select form-select-sm'
                              value={Otm_username}
                              onInput={(e) => {
                                console.log(e.target.value);
                                setOtm_username(e.target.value);
                              }}>
                              <option>Select OTM Mamber Name</option>
                              {otmmamber.map((user, index) => (
                                <option value={user[1]}>{user[1]}</option>
                              ))}
                            </select>
                          </div>
                          <br />
                          <div class=''>
                            <input
                              type='text'
                              value={userToEdit[12]}
                              onInput={(e) => {
                                let updatedData = cloneDeep(userToEdit);
                                updatedData[12] = e.target.value;
                                setUserToEdit(updatedData);
                              }}
                              class='form-control'
                              placeholder='Enter Description'
                            />
                          </div>
                          <div class=''>
                            <input
                              type='number'
                              value={userToEdit[13]}
                              onInput={(e) => {
                                let updatedData = cloneDeep(userToEdit);
                                updatedData[13] = e.target.value;
                                setUserToEdit(updatedData);
                              }}
                              class='form-control'
                              placeholder='Enter Word_count'
                            />
                          </div>
                          <div class=''>
                            <input
                              type='number'
                              value={userToEdit[14]}
                              onInput={(e) => {
                                let updatedData = cloneDeep(userToEdit);
                                updatedData[14] = e.target.value;
                                setUserToEdit(updatedData);
                              }}
                              class='form-control'
                              placeholder='Enter Expert_price'
                            />
                          </div>
                          <button
                            class='btn_1 full_width text-center'
                            onClick={() => {
                              var formdata = new FormData();
                              formdata.append("Task_Subject", userToEdit[1]);
                              formdata.append("Vendor_budget", userToEdit[2]);
                              formdata.append("Expert_firstname", Expert_firstname);
                              formdata.append("Client_name", Client_name);
                              formdata.append("Status", userToEdit[5]);
                              formdata.append("Start_date", userToEdit[6]);
                              formdata.append("End_date", userToEdit[7]);
                              formdata.append("Expert_startDate", userToEdit[8]);
                              formdata.append("Expert_endDate", userToEdit[9]);
                              formdata.append("Qc_Expert_name", Qc_Expert_name);
                              formdata.append("Otm_username", Otm_username);
                              formdata.append("Description", userToEdit[12]);
                              formdata.append("Word_count", userToEdit[13]);
                              formdata.append("Expert_price", userToEdit[14]);

                              var requestOptions = {
                                method: "POST",
                                body: formdata,
                              };

                              fetch("http://127.0.0.1:5000/updatetask/".concat(userToEdit[0]), requestOptions)
                                .then((response) => response.json())
                                .then((result) => {
                                  alert("Data Updated");
                                  console.log(typeof result, result);
                                  setUserToEdit([]); // clear
                                  console.log(users);
                                  console.log("result", JSON.parse(result));
                                  setUsers(JSON.parse(result));
                                  navigate("/Assingntask");
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

export default Taskform;
