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

function UpdateClientdata() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [userToEdit, setUserToEdit] = useState([]);
  const usersData = useRef([]);
  const [inputdata, setinputdata] = useState("");
  const columns = [
    {
      name: "client id",
      selector: (row) => row.client_id,
    },
    {
      name: "Client name",
      selector: (row) => row.Client_name,
    },
    {
      name: "Client contact",
      selector: (row) => row.Client_contact,
    },
    {
      name: "Client email",
      selector: (row) => row.Client_email,
    },
    {
      name: "Client status",
      selector: (row) => row.Client_status,
    },
    {
      name: "University",
      selector: (row) => row.University,
    },
    {
      name: "Business name",
      selector: (row) => row.Business_name,
    },
    {
      name: "Student login",
      selector: (row) => row.Student_login,
    },
    {
      name: "Student password",
      selector: (row) => row.Student_password,
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
    fetch("http://127.0.0.1:5000/getclientdata")
      .then((res) => res.json())
      .then((rawData) => {
        // do something with data
        const parsedUsers = [...users];
        const data = JSON.parse(rawData);
        data.forEach((user) => {
          parsedUsers.push({
            client_id: user[0],
            Client_name: user[1],
            Client_contact: user[2],
            Client_email: user[3],
            Client_status: user[4],
            University: user[5],
            Business_name: user[6],
            Student_login: user[7],
            Student_password: user[8],
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
    fetch("http://127.0.0.1:5000/deleteclient/".concat(userId), {
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
    console.log("client ID", userId);
    navigate(`/UpdateClientdata/${userId}`);
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
          <h1> Client information </h1>
        </div>
        {/* <button onClick={fetchData} className='OTMbutton'>
          <Link to=''>Tutors</Link>
        </button> */}
        <button className='OTMbutton'>
          <Link to='/Addclient'>
            <button type='button' class='btn btn-success btn-sm'>
              Add Client
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
                        <h5 class='modal-title text_white'>Update Client information</h5>
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
                                placeholder='Enter Your Contect No.'
                              />
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
                                type='text'
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
                                type='text'
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
                                type='text'
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
                            <button
                              class='btn_1 full_width text-center'
                              onClick={() => {
                                var formdata = new FormData();
                                formdata.append("Client_name", userToEdit[1]);
                                formdata.append("Client_contact", userToEdit[2]);
                                formdata.append("Client_email", userToEdit[3]);
                                formdata.append("Client_email", userToEdit[4]);
                                formdata.append("University", userToEdit[5]);
                                formdata.append("Business_name", userToEdit[6]);
                                formdata.append("Student_login", userToEdit[7]);
                                formdata.append("Student_password", userToEdit[8]);

                                var requestOptions = {
                                  method: "POST",
                                  body: formdata,
                                };

                                fetch("http://127.0.0.1:5000/updateclient/".concat(userToEdit[0]), requestOptions)
                                  .then((response) => response.json())
                                  .then((result) => {
                                    alert("Data Updated");
                                    console.log(typeof result, result);
                                    setUserToEdit([]); // clear
                                    console.log(users);
                                    console.log("result", JSON.parse(result));
                                    setUsers(JSON.parse(result));
                                    navigate("/otm");
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

export default UpdateClientdata;
