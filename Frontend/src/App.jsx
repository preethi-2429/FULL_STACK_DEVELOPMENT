import React from 'react'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import {Route, Routes} from "react-router-dom";
import Home from "./page/home";
import About from "./page/about";
import Service from "./page/service";
import Contact from "./page/contact";
const App = () => {
  return (
  <>
      {/*<Header/>
      <Footer/> */}
     <Navbar/>
     <Route>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/service" element={<Service />} />
      <Route path="/contact" element={<Contact />} />
     </Route>
  </>
  );
}

export default App
