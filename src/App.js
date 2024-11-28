import React from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import Cart from "./Cart";
import Login from "./Login";
import NavBar from "./NavBar";
import SignUp from "./SignUp";
import Admin from "./Admin";
import { BrowserRouter, Routes, Route} from "react-router-dom";
export default function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <NavBar />
        <hr></hr>
        <Routes>
          <Route index element={<Content />} />
          <Route path="content" element={<Content />} />
          <Route path="cart" element={<Cart />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}