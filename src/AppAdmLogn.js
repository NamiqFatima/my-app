import React from "react";
import AppHeader from "./AppHeader";
import Footer from "./AppFooter";
import AppAdminInsc from "./AppAdminInsc";
import { NavLink } from "react-router-dom";

import "./style.css";
function AppAdmLogn(){
    const stylee3={fontSize:"20px",textAlign:"centre", marginLeft:"40px",marginTop:"0px"}
    return(
        <div>
            <div>
                <AppHeader/> 
            </div>
                <div class="wrapper">
                  <h1>Connectez-vous à votre espace:</h1>
                  <p class="alert alert-success" style={stylee3} >Bienvenue dans l'espace administrateur ! Accédez à l'outil de gestion pour gérer les données et les utilisateurs du système.
                    Pour toute question,contactez notre service d'assistance.
                    Merci et bonne utilisation de notre outil de gestion.</p>
                   <div class="card">
                       <div class="form_icon"><i class="fa fa-user-circle"></i></div><br/>
                            <h1>Login</h1>
                       <form>
                            <div>
                                <span class="input-icon1"><i class="fa fa-user"></i></span>
                                <input type="text" id="username" placeholder="Username" required />
                            </div>
                            <div>
                                <span class="input-icon2"><i class="fa fa-lock"></i></span>
                                <input type="password" id="password" placeholder="Password" required />
                           </div>
                                <button type="submit">Submit</button><br/>
                                <p class="forget">Forget Password ?<a href="#">Click Here</a></p>
                                <p class="forget">Dont't have account <NavLink to='/espaceAdminInsc'><a href="#">Sign up</a></NavLink></p>
                       </form>
                    </div>
        <div>
            <Footer/>
        </div>
        </div>
        </div>
    )
}
export default AppAdmLogn;
