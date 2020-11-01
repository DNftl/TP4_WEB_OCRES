import ReactDOM from "react-dom";
//import Main from "./Main";
import React, { Component } from "react";
import "./index.css";
import "./corpsCom.js";
import CorpsCom from './corpsCom';



//import PhotoJ from '/Users/davidneftel/Desktop/ING4-OCRES/Web/TP4_WEB_OCRES/src/img/imageJ.png' 
//import PhotoM from '/Users/davidneftel/Desktop/ING4-OCRES/Web/TP4_WEB_OCRES/src/img/imageM.png'
//import PhotoC from '/Users/davidneftel/Desktop/ING4-OCRES/Web/TP4_WEB_OCRES/src/img/imageC.png'

/*import PhotoJ from 'imageJ.JPG' 
import PhotoC from 'imageC.JPG' 
import PhotoM from 'imageM.JPG'*/ 


class Corps extends React.Component {



	constructor(props) {
    super(props);

    this.state = {
      profils : [
      {

      Firstname: "Claude",
      Lastname: "Mont",
      DateNaissance: "21/12/1990",
      CouleurDeFondID: 0,
      Photo : "imageC.JPG",
      Publication : "Nouveau sur Facebook !",
      nbLikes : 0,  
  },
  {
      Firstname : "Martine",//this.state.name
      Lastname: "Poe",
      DateNaissance: "02/03/1988",
      CouleurDeFondID: 0,
      Photo :  "imageM.JPG",//PhotoM, //s'affiche sur mon ordi
      Publication : "Je passe sur TF1 à 18h!",
      nbLikes : 0,
},
{
      Firstname : "Jeanne",//this.state.name
      Lastname: "Laubert",
      DateNaissance: "13/05/1995",
      CouleurDeFondID: 0,
      Photo :  "imageJ.JPG",//PhotoJ , //s'affiche sur mon ordi
      Publication : "Salut tous le monde!",
      nbLikes : 0,
  },
  ]
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
			Photo :  "imageJ.JPG",//PhotoJ , //s'affiche sur mon ordi
      Publication : "Salut tous le monde!",
      nbLikes : 0

		});
	}
	AffichageInfosClaude()
	{
		//this.name="Jeanne";
		this.setState({
			Firstname : "Claude",//this.state.name
			Lastname: "Mont",
      DateNaissance: "21/12/1990",
      Photo :  "imageC.JPG",//PhotoC, //s'affiche sur mon ordi
      Publication : "Nouveau sur Facebook !",
      nbLikes : 0
		});
	}
	AffichageInfosMartine()
	{
		//this.name="Jeanne";
		this.setState({
			Firstname : "Martine",//this.state.name
			Lastname: "Poe",
      DateNaissance: "02/03/1988",
      Photo :  "imageM.JPG",//PhotoM, //s'affiche sur mon ordi
      Publication : "Je passe sur TF1 à 18h!",
      nbLikes : 0
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

          <br /><br /><br />
          <p>Dernière Publication: {this.state.Publication}</p>
          <p> 👍 {this.state.nbLikes}</p>
          <p>{this.state.CouleurDeFondID}</p>
        </div>

        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
        </div>
      </div>
    </div>
    
    </div>

    <CorpsCom donneeParentPrenom= {this.state.Firstname}/>
    </div>
    );
  }
}




//export default NavigationCorps;

const rootElement3= document.getElementById("root3");
ReactDOM.render(<Corps /*name="Jeanne"*//>, rootElement3);