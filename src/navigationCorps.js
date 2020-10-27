import ReactDOM from "react-dom";
//import Main from "./Main";
import React, { Component } from "react";
import "./index.css";
import Corps from "./corps.js";


function Affichage({ todo }) {
  return <button>{todo.name}</button>;
}

class NavigationCorps extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      profils: [
        { id: 1, name: "Jeanne" },
        { id: 2, name: "Martine" },
        { id: 3, name: "Claude" }
      ]
    };
  }

  render() {
    return (

    	 <div>
    <div class="container-fluid">
        <div class="row">
          <div class="col-lg-8 col-md-8 col-sm-8 col-xs-8"> 
          </div>
          <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
            
			{this.state.profils.map(todo => (
          <Affichage todo={todo} key={todo.id.toString()} />
        ))}

		
      
          </div>
        </div>
      </div>
    </div>
          );
  }
}

/*
const rootElement2= document.getElementById("root2");
ReactDOM.render(<NavigationCorps />, rootElement2);*/


/*

class NavigationCorps1 extends React.Component {
  render() {
    return (

    	 <div>
    <div class="container-fluid">
        <div class="row">
          <div class="col-lg-8 col-md-8 col-sm-8 col-xs-8"> 
          </div>
          <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
            

           <button>{this.props.brand1.name}</button>
           <button>{this.props.brand2.name}</button>
           <button>{this.props.brand3.name}</button>
			
      
          </div>
        </div>
      </div>
    </div>
          );
  }
}
class NavigationCorps2 extends React.Component {
  render() {
  	const profil1 = {id: "1", name: "Jeanne"};
  	const profil2 = {id: "2", name: "Claude"};
  	const profil3 = {id: "3", name: "Martine"};
    return (

    	 <div>
    <div class="container-fluid">
        <div class="row">
          <div class="col-lg-8 col-md-8 col-sm-8 col-xs-8"> 
          </div>
          <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
            

         <NavigationCorps2 brand1={profil1} />
         <NavigationCorps2 brand2={profil2} />
         <NavigationCorps2 brand3={profil3} />
			
      
          </div>
        </div>
      </div>
    </div>
          );
  }
}



const rootElement2= document.getElementById("root2");
ReactDOM.render(<NavigationCorps2 />, rootElement2);
const rootElement3= document.getElementById("root3");
ReactDOM.render(<NavigationCorps1 />, rootElement3);
*/


