import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';


function Footer() {
    const styleFt={color:'white'}
    const styleIc={margin:'10px'}
    const styleh3={fontSize:'Courier New'}
  return (
    <footer style={styleFt} class="navbar navbar-expand-sm bg-dark navbar-dark">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h4>À propos de la SNRT</h4>
            <p>La Société Nationale de Radiodiffusion et de Télévision (SNRT) est une entreprise publique marocaine qui exerce des activités de radiodiffusion et de télévision depuis plus de 60 ans.</p>
          </div>
          <div className="col-md-4">
            <h4>Nos chaînes</h4>
            <ul>
              <li>Al Aoula</li>
              <li>Arryadia</li>
              <li>Arrabiaa </li>
              <li>Assadissa </li>
              <li>Athaqafia</li>
              <li>Al Maghribia </li>
              <li>Laayoune </li>
              <li>Tamazight TV</li>

            </ul>
          </div>
          <div className="col-md-3"><h3>Contact </h3>
            <p>Fax : 0537 661 497 / 0537 685 100. E-mail :lemediateur@snrt.ma. Site web: www.snrt.ma.</p>
          
            <h3>Nos réseaux sociaux</h3>
            <div className="social-icons">
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" style={styleIc}><FontAwesomeIcon icon={faFacebook} /></a>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" style={styleIc}><FontAwesomeIcon icon={faTwitter} /></a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" style={styleIc}><FontAwesomeIcon icon={faInstagram} /></a>
            </div>
            </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
