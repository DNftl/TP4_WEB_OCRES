import ReactDOM from "react-dom";
//import Main from "./Main";
import React, { Component } from "react";
import "./index.css";
import "./corpsCom.js";
import CorpsCom from './corpsCom';


import PhotoJ from '/Users/davidneftel/Desktop/ING4-OCRES/Web/TP4/my-app3/src/img/imageJ.png'
import PhotoM from '/Users/davidneftel/Desktop/ING4-OCRES/Web/TP4/my-app3/src/img/imageM.png'
import PhotoC from '/Users/davidneftel/Desktop/ING4-OCRES/Web/TP4/my-app3/src/img/imageC.png'





class Corps extends React.Component {



	constructor(props) {
    super(props);

    this.state = {
      Firstname: "Claude",
      Lastname: "Mont",
      DateNaissance: "21/12/1990",
      CouleurDeFondID: 0,
      Photo : PhotoC
  }
}


	ChangeColorFunc(couleur)
	{
		/*this.setState({

			if(CouleurDeFondID<4)
			{
				CouleurDeFondID:this.state.CouleurDeFondID +1
			}*/
			
		document.getElementById("myDIV").style.backgroundColor = couleur;	
			
		//if(CouleurDeFondID==1) {document.getElementById("myDIV").style.backgroundColor = "lightblue";}
		/*else if(this.state.CouleurDeFondID==2) {document.getElementById("myDIV").style.backgroundColor = "red";}
		else if(this.state.CouleurDeFondID==3) {document.getElementById("myDIV").style.backgroundColor = "yellow";}
		else if(this.state.CouleurDeFondID==4) {document.getElementById("myDIV").style.backgroundColor = "brown";}

});*/	

	}

	AffichageInfosJeanne()
	{
		//this.name="Jeanne";
		this.setState({
			Firstname : "Jeanne",//this.state.name
			Lastname: "Laubert",
      		DateNaissance: "13/05/1995",
			Photo : PhotoJ   		

		});
	}
	AffichageInfosClaude()
	{
		//this.name="Jeanne";
		this.setState({
			Firstname : "Claude",//this.state.name
			Lastname: "Mont",
      		DateNaissance: "21/12/1990",
      		Photo : PhotoC
		});
	}
	AffichageInfosMartine()
	{
		//this.name="Jeanne";
		this.setState({
			Firstname : "Martine",//this.state.name
			Lastname: "Poe",
      		DateNaissance: "02/03/1988",
      		Photo : PhotoM
		});
	}


/*
      [
        { id: 1, Firstname: "Jeanne", LastName:"Sich" , DateNaissance : "21/08/1987"},
        { id: 2, Firstname: "Martine" , LastName:"Edmont" , DateNaissance : "12/05/1993"},
        { id: 3, Firstname: "Claude" , LastName:"Garnier" , DateNaissance : "02/11/1990"}
      ]
    };
  }*/




  render() {


    return (

<div>
    	 <div>
    <div class="container-fluid">
        <div class="row">
          <div class="col-lg-8 col-md-8 col-sm-8 col-xs-8"> 
          </div>
          <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
            <button onClick={()=>this.AffichageInfosJeanne()}>Jeanne</button>
    		<button onClick={()=>this.AffichageInfosClaude()}>Claude</button>
    		<button onClick={()=>this.AffichageInfosMartine()}>Martine</button>
         </div>
        </div>
      </div>
    </div>


     <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
        </div>

        <div id="myDIV" style={{backgroundColor: "orange"},{border: "solid"}} class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
          
          <div class="pic">
          <img  src={this.state.Photo} height="50" width="50"/>
          </div>
        <div>
        <br /><br /><br />
        <div class="row">
          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6"> 
          	<p>Prenom : {this.state.Firstname}</p>
          	<p>Date de Naissance : {this.state.DateNaissance}</p>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6"> 
          	<p>Nom : {this.state.Lastname}</p>
          </div>
          
          </div>
          </div>
          
          
          <button class="w3-button w3-xlarge w3-circle w3-black" onClick={() => this.ChangeColorFunc('aqua')}>Change Style</button>
          <button class="w3-button w3-xlarge w3-circle w3-black" onClick={() => this.ChangeColorFunc('orange')}></button>
          <button class="w3-button w3-xlarge w3-circle w3-black" onClick={() => this.ChangeColorFunc('yellow')}></button>
        </div>

        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
        </div>
      </div>
    </div>
    
    </div>
    <corpsCom donnéeParentPrénom= {this.state.Firstname}/>
    </div>
    );
  }
}
/*
class Car extends React.Component {
  render() {
    return <h2>I am a {this.props.donnéeParentPrénom}!</h2>;
  }
}*/




//export default NavigationCorps;

const rootElement3= document.getElementById("root3");
ReactDOM.render(<Corps /*name="Jeanne"*//>, rootElement3);