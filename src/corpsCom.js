import ReactDOM from "react-dom";
//import Main from "./Main";
import React, { Component } from "react";
import "./index.css";

import Corps from './corps';


 
class CorpsCom extends React.Component {

  constructor(props) {
  super(props);

  this.state = {
    publicationContenu:'',
    items:[]
    
  };
}

onChange(event)
{
  this.setState({
    publicationContenu:event.target.value
  });
}

AjouterPubl(event)
{
  event.preventDefault();
  this.setState({
    publicationContenu:'',
    items:[...this.state.items, this.state.publicationContenu],
    //identifiant: {this.state.Firstname}
  })
}

renderPubl()
{
  return this.state.items.map((items)=>{
    return(
      <div key={items}>
         {items} <button onClick={this.deletePubl.bind(this)}>X / commantaire de : {this.props.donnéeParentPrénom}</button>
      </div>
      );
  })
}



deletePubl(event)
{
    event.preventDefault();
    const array=this.state.items
    const index=array.indexOf(event.target.value);
    array.splice(index,1);
    this.setState({
      items : array
  });
}

  render() {
    return (
     <div>
    <br/><br/><br/><br/>
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
        </div>
        <div style={{backgroundColor: "orange"},{border: "solid"}} class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
          
          <form>
            <input  value ={this.state.publicationContenu} 
                    type="hypertext" 
                    placeholder="Inserez votre publication"
                    onChange ={this.onChange.bind(this)}/>
          </form>
          <button onClick={this.AjouterPubl.bind(this)} class="w3-button w3-xlarge w3-circle w3-black">Ajouter</button>

          <div >
            {this.renderPubl()} 
            commantaire de : {this.props.donnéeParentPrénom}

            <button>C'est super</button>
          </div>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
        </div>
      </div>
    </div>
    
    </div>
    );
  }
}

//The data from parent is:{this.props.donnéeParentPrénom}
//export default NavigationCorps;

const rootElement4= document.getElementById("root4");
ReactDOM.render(<CorpsCom />, rootElement4);