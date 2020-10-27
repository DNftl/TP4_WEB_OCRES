//import React from "react";
import ReactDOM from "react-dom";
//import Main from "./Main";
import React, { Component } from "react";
import "./index.css";

 
class Navigation extends React.Component {
  render() {
    return (
    <header>
     <div
      class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
            <button class="w3-button w3-xlarge w3-circle w3-black"></button>
            <button class="w3-button w3-xlarge w3-circle w3-black"></button>
            <button class="w3-button w3-xlarge w3-circle w3-black"></button>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <h3>Mon navigateur</h3>
          </div>
          <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
          </div>
        </div>
      </div>
      </div>
    </header>
    );
  }
}

const rootElement= document.getElementById("root");
ReactDOM.render(<Navigation />, rootElement);
