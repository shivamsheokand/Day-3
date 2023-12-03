import React from "react";
import { Form, Route, Routes } from "react-router-dom";
import Nav from "./Pages/Nav";
import Hero from "./Pages/Hero";
import Acceptcha from "./Pages/Acceptcha";
import Cources from "./Pages/Cources";
import About from "./Pages/About";
import User from "./Pages/User";
import Userform from "./Pages/Userform";
import Footer from "./Pages/Footer";
function App() {
  return (
    <div className="h-screen flex flex-col bg-[#171717] ">
      <Nav />
      <Routes>
        <Route path="/" element={<Hero />} />
      </Routes>
      <Acceptcha />
      <Cources />
      <About />
      <User />
      <Userform />
      <Footer />
    </div>
  );
}

export default App;
