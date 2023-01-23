import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./css/Resister.css";
import "./css/main.css";
import { cloneDeep } from "lodash";
import DataTable from "react-data-table-component";
import "./css/table.css";
import "./css/Heading.css";
import { useRef } from "react";

function Updatetaskdata() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [userToEdit, setUserToEdit] = useState([]);
  const usersData = useRef([]);
  const [inputdata, setinputdata] = useState("");
  const [Expert_firstname, setExpert_firstname] = useState("");
  const [Client_name, setClient_name] = useState();
  const [Qc_Expert_name, setQc_Expert_name] = useState("");
  const [Otm_username, setOtm_username] = useState("");
  const [otmmamber, setotmmamber] = useState([]);
  const [expert, setexpert] = useState([]);
  const [client, setclient] = useState([]);

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
    fetchOTMData();
    fetchclientData();
    fetchtutorsData();
  }, []);
  const columns = [
    {
      name: "Order ID",
      selector: (row) => row.Order_ID,
    },
    {
      name: "Task Subject",
      selector: (row) => row.Task_Subject,
    },
    {
      name: "Vendor Budget",
      selector: (row) => row.Vendor_budget,
    },
    {
      name: "Expert ID",
      selector: (row) => row.Expert_ID,
    },
    {
      name: "Client ID",
      selector: (row) => row.Client_id,
    },
    {
      name: "Status",
      selector: (row) => row.Status,
    },
    {
      name: "Start date",
      selector: (row) => row.Start_date,
    },
    {
      name: "End Date",
      selector: (row) => row.End_date,
    },
    {
      name: "Expert_startDate",
      selector: (row) => row.Expert_startDate,
    },
    {
      name: "Expert End Date",
      selector: (row) => row.Expert_endDate,
    },
    {
      name: "Qc Expert Id",
      selector: (row) => row.Qc_Expert_id,
    },
    {
      name: "Otm Id",
      selector: (row) => row.Otm_id,
    },
    {
      name: "Description",
      selector: (row) => row.Description,
    },
    {
      name: "Otm Id",
      selector: (row) => row.Word_count,
    },
    {
      name: "Otm Id",
      selector: (row) => row.Expert_price,
    },
    {
      name: "Update",
      selector: (row) => row.EditUser,
    },
    {
      name: "Delete",
      selector: (row) => row.DeleteUser,
    },
  ];
  const fetchData = () => {
    fetch("http://127.0.0.1:5000/getordersdata")
      .then((res) => res.json())
      .then((rawData) => {
        // do something with data
        const parsedUsers = [...users];
        const data = JSON.parse(rawData);
        data.forEach((user) => {
          parsedUsers.push({
            Order_ID: user[0],
            Task_Subject: user[1],
            Vendor_budget: user[2],
            Expert_ID: user[3],
            Client_id: user[4],
            Status: user[5],
            Start_date: user[6],
            End_date: user[7],
            Expert_startDate: user[8],
            Expert_endDate: user[9],
            Qc_Expert_id: user[10],
            Otm_id: user[11],
            Description: user[12],
            Word_count: user[13],
            Expert_price: user[14],
            EditUser: (
              <button type='button' class='btn btn-success btn-sm' onClick={() => editUser(user[0])}>
                Edit
              </button>
            ),
            DeleteUser: (
              <button type='button' class='btn btn-danger  btn-sm' onClick={() => deleteUser(user[0])}>
                Delete
              </button>
            ),
          });
        });

        usersData.current = parsedUsers;

        setUsers(parsedUsers);
      })
      .catch((rejected) => {
        console.log(rejected);
      });
  };
  const deleteUser = (userId) => {
    console.log("Del", userId);
    fetch("http://127.0.0.1:5000/deleteorders/".concat(userId), {
      method: "delete",
    })
      .then((res) => res.text())
      .then((data) => {
        console.log(data);
      })
      .catch((rejected) => {
        console.log(rejected);
      })
      .finally(() => {
        fetchData();
      });
  };
  const editUser = (userId) => {
    console.log("Task ID", userId);
    navigate(`/Assingntask/${userId}`);
  };
  const search = (event) => {
    const searchTerm = event.target.value;
    setinputdata(searchTerm);
    if (searchTerm.trim() === "") {
      setUsers(usersData.current);
      return;
    }

    let filteredUsers = usersData.current.filter((user) => {
      let stringValues = Object.entries(user)
        .map((innerUser) => innerUser[1])
        .join("");

      return stringValues.toLowerCase().includes(searchTerm.toLowerCase());
    });

    setUsers(filteredUsers);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <>
        <div class='one'>
          <h1>Task information </h1>
        </div>
        {/* <button onClick={fetchData} className='OTMbutton'>
          <Link to=''>Tutors</Link>
        </button> */}
        <button className='OTMbutton'>
          <Link to='/addtask'>
            <button type='button' class='btn btn-success btn-sm'>
              Add task
            </button>
          </Link>
        </button>
        <form class='d-flex'>{/* <input class='form-control ' type='search' value={inputdata} onChange={(e) => search(e)} placeholder='Search' aria-label='Search' /> */}</form>
        <div className='datatable'>
          {" "}
          <DataTable columns={columns} data={users} pagination selectableRowsHighlight highlightOnHover subHeader subHeaderComponent={<input class='w-25 form-control ' type='search' value={inputdata} onChange={(e) => search(e)} placeholder='Search' aria-label='Search' />} />
        </div>

        <div class='main_content_iner ' id='displaynone'>
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
                                placeholder='Task_Subject'
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
                                placeholder='Enter Last Name'
                              />
                            </div>
                            <div class=''>
                              <label htmlFor=''>select Expert Name</label>
                              <select
                                class='form-select form-select-sm'
                                value={Expert_firstname}
                                onInput={(e) => {
                                  console.log(e.target.value);
                                  setExpert_firstname(e.target.value);
                                }}>
                                {expert.map((user, index) => (
                                  <option value={user[1]}>{user[1]}</option>
                                ))}
                              </select>
                            </div>
                            <div class=''>
                              <label htmlFor=''>select client Name</label>
                              <select
                                class='form-select form-select-sm'
                                value={Client_name}
                                onInput={(e) => {
                                  console.log(e.target.value);
                                  setClient_name(e.target.value);
                                }}>
                                {client.map((user, index) => (
                                  <option value={user[1]}>{user[1]}</option>
                                ))}
                              </select>
                            </div>
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
                                placeholder='Enter Your Contect No.'
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
                                placeholder='Enter Your Contect No.'
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
                                placeholder='Enter Your Contect No.'
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
                                placeholder='Enter Your Contect No.'
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
                                placeholder='Enter Your Contect No.'
                              />
                            </div>
                            <div class=''>
                              <label htmlFor=''>Select QC Expert Name</label>
                              <select
                                class='form-select form-select-sm'
                                value={Qc_Expert_name}
                                onInput={(e) => {
                                  console.log(e.target.value);
                                  setQc_Expert_name(e.target.value);
                                }}>
                                {expert.map((user, index) => (
                                  <option value={user[1]}>{user[1]}</option>
                                ))}
                              </select>
                            </div>
                            <div class=''>
                              <label htmlFor=''>select OTM mamber name </label>
                              <select
                                class='form-select form-select-sm'
                                value={Otm_username}
                                onInput={(e) => {
                                  console.log(e.target.value);
                                  setOtm_username(e.target.value);
                                }}>
                                {otmmamber.map((user, index) => (
                                  <option value={user[1]}>{user[1]}</option>
                                ))}
                              </select>
                            </div>
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
                                placeholder='Enter Your Contect No.'
                              />
                            </div>
                            <div class=''>
                              <input
                                type='text'
                                value={userToEdit[13]}
                                onInput={(e) => {
                                  let updatedData = cloneDeep(userToEdit);
                                  updatedData[13] = e.target.value;
                                  setUserToEdit(updatedData);
                                }}
                                class='form-control'
                                placeholder='Enter Your Contect No.'
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
                                placeholder='Enter Your Contect No.'
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

                                fetch("http://127.0.0.1:5000//updatetask/".concat(userToEdit[0]), requestOptions)
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
      </>
    </div>
  );
}

export default Updatetaskdata;
