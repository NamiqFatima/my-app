import React, {useState} from "react";
import AppContainer from "./AppContainer";
import AppIncription from "./AppInscription";
import Services from "./Services";
import AppAdminLog from "./AppAdminInsc";
import Visiteur from "./Visiteur";
import { NavLink } from "react-router-dom";

function AppHeader() {
  const stylelogo= { with:'70px',height:'70px'}
  //const stylehdr={position: "fixed"}
  return <nav class="navbar navbar-expand-sm bg-dark navbar-dark" >
    <div class="container"  >
      <img style={stylelogo} src="logo1.png" alt="Stages NRT" />
      <div class="collapse navbar-collapse" id="collapsibleNavbar">
        <ul class="navbar-nav">
          <NavLink to='/'>
            <li class="nav-item" > <a class="nav-link" href="#" >Home</a></li>
          </NavLink>

          <NavLink to='/services'>
            <li class="nav-item" ><a class="nav-link" href="#" > Services</a></li>
          </NavLink>

          <NavLink to='/espaceStagiaire' >
            <li class="nav-item" ><a class="nav-link" href="#" > Espace Stagiaire</a></li>
          </NavLink>

          <NavLink to='/espaceAdminlog' >
            <li class="nav-item" ><a class="nav-link" href="#" > Espace Administrateur</a></li>
          </NavLink>

          <NavLink to='/visiteur' >
            <li class="nav-item" ><a class="nav-link" href="#" > Visiteur</a></li>
          </NavLink>
        </ul>
      </div>

    </div>
  </nav>


  const [activeMenu, setActiveMenu] = useState(null)
  const handleClick = (menu) => {
    setActiveMenu(menu);
  };
  return <nav class="navbar navbar-expand-sm bg-dark navbar-dark" >
    <div class="container"  >
        <img style={stylelogo} src="logo1.png" alt="Stages NRT" />
      <div class="collapse navbar-collapse" id="collapsibleNavbar">
        <ul class="navbar-nav">
          <li class="nav-item" onClick={() => handleClick('home')}><a class="nav-link" href="#" >Home</a></li>
          <li class="nav-item" onClick={() => handleClick('services')}><a class="nav-link" href="#" >Services</a></li>
          <li class="nav-item" onClick={() => handleClick('espace_stagiaire')}><a class="nav-link" href="#" >Espace Stagiaire</a></li>
          <li class="nav-item" onClick={() => handleClick('espace_administrateur')}><a class="nav-link" href="#" >Espace Administrateur</a></li>
          <li class="nav-item" onClick={() => handleClick('visiteur')}><a class="nav-link" href="#" >Visiteur</a></li>
        </ul>
        
      </div>
    </div>
  </nav>
 
}

export default AppHeader;
