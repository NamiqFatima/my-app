import React from "react";
import AppHeader from "./AppHeader";
import Footer from "./AppFooter";
import { NavLink } from "react-router-dom";
import "./style.css";

function AppAdminInsc(){
  const stylee3={fontSize:"20px",textAlign:"centre", marginLeft:"40px",marginTop:"0px"}

    return(<div class="cnx">
        <div>
          <AppHeader/>
        </div>
        <div>
        <h1>BIENVENUE SUR L'ESPACE ADMINISTRATEUR DE STAGES NRT</h1>
        <div class="">
            <p class="alert alert-info" style={stylee3}>Bienvenue dans l'espace d'administration ! Veuillez remplir le formulaire ci-dessous pour
            accéder aux fonctionnalités réservées aux administrateurs. Ce formulaire est conçu pour
            garantir la sécurité et la confidentialité des données sensibles de  l'administration.
            Merci de remplir tous les champs obligatoires pour soumettre votre demande.</p> <br/>
    <div >
    <form action="/inscription" method="post" class="form-container">
      <div class="form-group" className= 'inputs'>
        <input type="text" class="form-control" id="nom" name="nom" required placeholder="Saisir votre nom"/>
      </div>

      <div class="form-group" className= 'inputs'>
        <input type="text" class="form-control" id="prenom" name="prenom" required placeholder="Saisir votre prenom"/>
      </div>

      <div class="form-group" className= 'inputs'>
        
        <input type="email" class="form-control" id="email" name="email" required placeholder="Saisir votre email" />
      </div>

      <div class="form-group" className= 'inputs'>
        <input type="textx" class="form-control" id="id" name="id" required placeholder="Id" />
      </div>

      <div class="form-group" className= 'inputs'>
        <input type="password" class="form-control" id="password" name="password" required placeholder="Password"/>
      </div>

      <div class="form-group" className= 'inputs'>
        <input type="password" class="form-control" id="confirm_password" name="confirm_password" required placeholder="Confirmer votre password"/>
      </div>

      <div class="text-center">
        <NavLink to="/espaceAdminlog">
        <button type="submit" class="btn btn-primary">Envoyer</button><br/></NavLink>
      </div>
    </form></div>
    </div>
  </div>
  <br/>
        <div>
            <Footer/>
        </div>
        </div>
    )
}
export default AppAdminInsc;