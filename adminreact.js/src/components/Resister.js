import React from "react";
import "./css/Resister.css";
import "./css/main.css";

function Resister() {
  return (
    <div>
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
                        <h5 class='modal-title text_white'>Resister</h5>
                      </div>
                      <div class='modal-body'>
                        <form>
                          <div class=''>
                            <input type='text' class='form-control' placeholder='Full Name' />
                          </div>
                          <div class=''>
                            <input type='text' class='form-control' placeholder='Enter your email' />
                          </div>
                          <div class=''>
                            <input type='password' class='form-control' placeholder='Password' />
                          </div>
                          <div class=' cs_check_box'>
                            <input type='checkbox' id='check_box' class='common_checkbox' />
                            <label for='check_box'> Keep me up to date </label>
                          </div>
                          <a href='#' class='btn_1 full_width text-center'>
                            {" "}
                            Sign Up
                          </a>
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

export default Resister;
