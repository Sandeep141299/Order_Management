import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Resister from "./components/Resister";
import Headerr from "./components/Headerr";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import "./components/css/main.css";
import AddTutors from "./components/Addtutors";
import Addotm from "./components/Addotm";
import UpdateOTMdata from "./components/UpdateOTMdata";
import OTMform from "./components/OTMform";
import DataTableTuytors from "./components/DataTableTuytors";
import UpdateTutordata from "./components/UpdateTutordata";
import Tutorform from "./components/Tutorform";
import Updatetaskdata from "./components/Updatetaskdata";
import Addtask from "./components/Addtask";
import OTMdata from "./components/OTMdata";
import Addclient from "./components/Addclient";
import UpdateClientdata from "./components/UpdateClientdata";
import Clientform from "./components/Clientform";
import AddBudget from "./components/AddBudget";
import UpdateBudgetdata from "./components/UpdateBudgetdata";
import Budgetform from "./components/Budgetform";
import Taskform from "./components/Taskform";
import Allbutton from "./components/Allbutton";

function App() {
  return (
    <>
      <div class='main justify-content-center'>
        <div className='main_content_iner'>
          <BrowserRouter>
            <Headerr />
            <Routes>
              <Route path='/tutors' element={<AddTutors />} />
              <Route path='/otm' element={<Addotm />} />
              <Route path='/home' element={<Home />} />
              <Route path='/' element={<Resister />} />
              <Route path='/login' element={<Login />} />
              <Route path='/updateotm' element={<UpdateOTMdata />} />
              <Route path='/updateotm/:userId' element={<OTMform />} />
              <Route path='/Updatetutors' element={<UpdateTutordata />} />
              <Route path='/Updatetutors/:userId' element={<Tutorform />} />
              <Route path='/1' element={<DataTableTuytors />} />
              <Route path='/addtask' element={<Addtask />} />
              <Route path='/new' element={<OTMdata />} />
              <Route path='/Assingntask' element={<Updatetaskdata />} />
              <Route path='/Assingntask/:userId' element={<Taskform />} />
              <Route path='/Addclient' element={<Addclient />} />
              <Route path='/UpdateClientdata' element={<UpdateClientdata />} />
              <Route path='/UpdateClientdata/:userId' element={<Clientform />} />
              <Route path='/Budget' element={<AddBudget />} />
              <Route path='/Updatebudget' element={<UpdateBudgetdata />} />
              <Route path='/Updatebudget/:userId' element={<Budgetform />} />
              <Route path='/allbutton' element={<Allbutton />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}

export default App;
