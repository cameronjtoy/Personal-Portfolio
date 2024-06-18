import logo from './logo.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar.js";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import React, {Component} from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Nav, Navbar } from 'react-bootstrap';


export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={
            <div className="App">
              <Banner />
              <Skills />
              <Projects />
              <Footer />
            </div>
          } />
        </Routes>
      </BrowserRouter>
    );
  }
}
