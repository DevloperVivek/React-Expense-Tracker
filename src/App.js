import "./App.css";
import React from "react";
import Home from "./components/Expense/Home";
import Header from "./components/Expense/Layout/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/Expense/Pages/Signup";
import Login from "./components/Expense/Pages/Login";
import { AuthContextProvider } from "./Context/Auth-Context";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Header />
        <Routes>
          {/* <Route path="/SignUp" element={<Home />} /> */}
          <Route path="/Home" element={<Home />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;