import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./css/main.css";
import "./css/Login.css";
function Login() {
  const navigate = useNavigate();
  const [user, setuser] = useState("");
  const [password, setpassword] = useState("");
  return (
    <>
      <div class='main_content_iner '>
        <div class='container-fluid'>
          <div class='row justify-content-center mx-5'>
            <div class='col-8'>
              <div class='dashboard_header '>
                <div class='row'></div>
              </div>
            </div>
            <div class='col-lg-8 '>
              <div class='white_box '>
                <div class='row justify-content-center'>
                  <div class='col-lg-6'>
                    <div class='modal-content cs_modal '>
                      <div class='modal-header justify-content-center theme_bg_1 '>
                        <h5 class='modal-title text_white'>Log in</h5>
                      </div>
                      <div class='modal-body'>
                        <form
                          onSubmit={(e) => {
                            e.preventDefault();
                          }}>
                          <div class=''>
                            <input
                              type='text'
                              value={user}
                              onInput={(e) => {
                                console.log(e.target.value);
                                setuser(e.target.value);
                              }}
                              class='form-control'
                              placeholder='Enter your email'
                            />
                          </div>
                          <div class=''>
                            <input
                              type='password'
                              value={password}
                              onInput={(e) => {
                                console.log(e.target.value);
                                setpassword(e.target.value);
                              }}
                              class='form-control'
                              placeholder='Password'
                            />
                          </div>
                          <button
                            class='btn_1 full_width text-center'
                            onClick={() => {
                              var formdata = new FormData();
                              formdata.append("name", user);
                              formdata.append("password", password);

                              var requestOptions = {
                                method: "POST",
                                body: formdata,
                              };

                              fetch("http://127.0.0.1:5000/test", requestOptions)
                                .then((response) => response.text())
                                .then((result) => {
                                  // alert(result);
                                  console.log(result);
                                  localStorage.setItem("USER_DATA", result);
                                  // <Redirect to='/home' />;
                                  navigate("/home");
                                  // <Navigate replace to='/home' />;
                                  // {
                                  //   component: () => <Navigate to='/404' />;
                                  // }

                                  let user = localStorage.getItem("USER_DATA");
                                  // redirect("/dASHBOARD")
                                })
                                .catch((error) => alert("error", error));
                            }}>
                            Log in
                          </button>
                          <p>
                            Need an account?{" "}
                            <a id='link' data-toggle='modal' data-target='#sing_up' data-dismiss='modal' href='#'>
                              Sign Up
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
      </div>
    </>
  );
}

export default Login;
