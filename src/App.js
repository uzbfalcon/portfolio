import React from "react";
import GlobalStyle from "./globalStyles";
import { Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import {Button} from "./components/Buttons/fab-Button/index.js"

//Pages
import Home from "./pages/Home";
// import SignUp from "./pages/SignupPage";
// import Pricing from "./pages/PricingPage";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
        <Home/>
      <Routes>
       
        {/* <Route path="/signup"  elements={<SignUp/>} />
				<Route path="/pricing"  elements={<Pricing/>} /> */}
      </Routes>
      <Button/>
      <Footer />
    </>
  );
}

export default App;
