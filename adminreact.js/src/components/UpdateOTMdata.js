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

function UpdateOTMdata() {
  const usersData = useRef([]);
  const [inputdata, setinputdata] = useState("");
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [userToEdit, setUserToEdit] = useState([]);
  const columns = [
    {
      name: "OTM ID",
      selector: (row) => row.Tutor_ID,
    },
    {
      name: "OTM First Name",
      selector: (row) => row.first_name,
    },
    {
      name: "OTM last Name",
      selector: (row) => row.last_name,
    },
    {
      name: " OTM Password",
      selector: (row) => row.password,
    },
    {
      name: "OTM Email",
      selector: (row) => row.Email,
    },
    {
      name: "OTM Contact No.",
      selector: (row) => row.Contact_No,
    },
    {
      name: "joining Date",
      selector: (row) => row.joiningDate,
    },
    {
      name: "Level",
      selector: (row) => row.Level,
    },
    {
      name: "Upadet",
      selector: (row) => row.EditUser,
    },
    {
      name: "Delete",
      selector: (row) => row.DeleteUser,
    },
  ];
  const fetchData = () => {
    fetch("http://127.0.0.1:5000/getotm1")
      .then((res) => res.json())
      .then((rawData) => {
        // do something with data
        const parsedUsers = [...users];
        const data = JSON.parse(rawData);
        data.forEach((user) => {
          parsedUsers.push({
            Tutor_ID: user[0],
            first_name: user[1],
            last_name: user[2],
            password: user[3],
            Email: user[4],
            Contact_No: user[5],
            joiningDate: user[6],
            Level: user[7],
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
  // const fetchData = () => {
  //   fetch("http://127.0.0.1:5000/getotm1")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // do something with data
  //       console.log(data);
  //       setUsers(JSON.parse(data));
  //     })
  //     .catch((rejected) => {
  //       console.log(rejected);
  //     });
  // };
  const deleteUser = (userId) => {
    console.log("Del", userId);
    fetch("http://127.0.0.1:5000/deleteotm/".concat(userId), {
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
    console.log("OTM ID", userId);
    navigate(`/updateotm/${userId}`);
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
          <h1> OTM Member information </h1>
        </div>
        <button className='OTMbutton'>
          <Link to='/otm'>
            <button type='button' class='btn btn-success btn-sm'>
              Add OTM members
            </button>
          </Link>
        </button>
        <form class='d-flex'>{/* <input class='form-control ' type='search' value={inputdata} onChange={(e) => search(e)} placeholder='Search' aria-label='Search' /> */}</form>
        <div className='datatable'>
          <DataTable columns={columns} data={users} pagination selectableRowsHighlight highlightOnHover subHeader subHeaderComponent={<input class='w-25 form-control ' type='search' value={inputdata} onChange={(e) => search(e)} placeholder='Search' aria-label='Search' />} />
        </div>

        {/* <DataTable className='datatable' title='Tutors Data' columns={columns} data={users} pagination subHeader subHeaderComponent={<input class='w-25 form-control ' type='search' value={inputdata} onChange={(e) => search(e)} placeholder='Search' aria-label='Search' />} /> */}
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
                            <div class=' cs_check_box'>
                              <input type='checkbox' id='check_box' class='common_checkbox' />
                              <label htmlFor='check_box'> Keep me up to date </label>
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
                                    alert("Data Updated");
                                    console.log(typeof result, result);
                                    setUserToEdit([]); // clear
                                    console.log(users);
                                    console.log("result", JSON.parse(result));
                                    setUsers(JSON.parse(result));
                                    // navigate("/otm");
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

export default UpdateOTMdata;
