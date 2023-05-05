import React from "react";
import Visiteur2 from "./Visiteur2";
import AppHeader from "./AppHeader";
import Footer from "./AppFooter";
import './styleInscrp.css';
import { NavLink } from "react-router-dom";

function Visiteur() {
  const style1 ={fontFamily: 'créativité', margin:'30px',padding:'40px'}
  const style2 ={fontFamily: 'Times New Roman',fontSize:"20px"}
  const style3 ={padding:"15px",margin:"1%",marginLeft:"20%" ,textAlign:"centre",display: "inlineBlock" }
  const style4 ={width:"70", height:"500", textAlign:"right", margin:"right"} 
  const styleln={ textDecoration:'none' }
  return ( <>
  <div>
    <AppHeader/>
  </div>
      <div class="row">
    <div class="col-md-5 float-left" style={style1}><h2>BIENVENUE SUR L'ESPACE VISITEUR DE LA SNRT</h2><br/><br/>
    <p style={style2} >Bienvenue sur notre site ! Si vous êtes à la recherche d'une formation ou d'informations
     spécifiques sur notre entreprise, nous vous invitons à nous rendre visite. Vous pouvez vous rendre à 
     notre entreprise et demander un badge pour rencontrer l'un de nos représentants, qui sera heureux de
      répondre à vos questions et de vous fournir toutes les informations dont vous avez besoin. Si vous 
      préférez, vous pouvez également nous laisser un message via notre formulaire de contact en ligne. 
      Nous sommes là pour vous aider à trouver les solutions de formation dont vous avez besoin pour réussir dans votre domaine.
      </p>
      <button class="button button1" btn-lg style={style3}><a  href="https://snrt.ma" target="_blank">Découvrir Plus Info</a><i class="fas fa-sort-down ml-2"></i></button></div>
    <div class="col-md-4 float-right"><img src="photo1.jpg" alt="logo" class="float-start" style={style4}/></div>
  </div>
  <div>
    <Visiteur2/>
  </div>
  <div>
    <Footer/>
  </div>
  </>
 );
  }
  export default Visiteur;