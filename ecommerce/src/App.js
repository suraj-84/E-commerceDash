import "./App.css";
import Footer from "./Components/Footer";

import Nav from "./Components/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./Components/SignUp";
import PrivateCompent from "./Components/PrivateCompent";
import Login from "./Components/Login";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
        <Route element={<PrivateCompent/>}>
          <Route path="/" element={<h1>product listing </h1>} />
          <Route path="/add" element={<h1> add product listing </h1>} />
          <Route path="/update" element={<h1> update product listing </h1>} />
          <Route path="/logout" element={<h1> logut product listing </h1>} />
          <Route path="/profile" element={<h1> profile product listing </h1>} />
          </Route>
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/login" element={<Login/>} />

        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
