import React,{useState} from "react";
import AppCarousel from './AppCarousel';
import AppHeader from './AppHeader';
import Footer from "./AppFooter";
import './styleInscrp.css';

function AppContainer(){
    //styles:
    const styleh2={fontFamily: 'Lucida Console', textAlign:'left' , color: '#D2691E',margin:'30px '}
    const styleP={textIndent: '55px',textAlign: 'justify', letterSpacing: '2px', fontFamily:'Times New Roman' , 
    fontSize: '25px', margin: '15px 30px 15px 30px' }
    const styleP2={textIndent: '55px',textAlign: 'justify', letterSpacing: '1px', fontFamily:'Times New Roman' , 
    fontSize: '25px', margin: '30px 40px 30px 50px' }
    const stylediv={fontFamily:'Cooper Black', fontSize:'40px', textAlign: 'center'}
    const styleBtn={textAlign:'center' }
    //fonctionalité du button:
    const [showNewParagraph, setShowNewParagraph] = useState(false);
    const handleButtonClick = () => setShowNewParagraph(true);
    return <div >
        <div>
            <AppHeader/>
        </div>
        <div >
        <div  class="d-flex justify-content-center align-items-center">
            <img src="snrtar.png" alt="Stages NRT" />
        </div> 
        <h2 style={styleh2} >Une <kbd>nouvelle</kbd> façon de trouver votre voie. </h2>
        <p></p> <br/>
        <p style={styleP}>Bienvenue sur Stages NRT, le site de dépôt de demandes de stage pour la Société Nationale de 
            Radiodiffusion et de Télévision. Notre plateforme en ligne permet aux clients de postuler
            pour des stages dans différents domaines, tels que l'information, la production, la technique
            et bien d'autres. En remplissant notre formulaire de demande de stage, vous avez la possibilité
            de postuler pour des stages de courte ou de longue durée selon vos disponibilités. Chez SNRT, 
            nous sommes déterminés à offrir des opportunités de stage de qualité pour aider les étudiants
            et les jeunes professionnels à acquérir une expérience pratique dans le domaine de la radiodiffusion
            et de la télévision. Nous sommes impatients de vous accueillir sur notre site Stages NRT et de vous
            aider à réaliser vos aspirations professionnelles.</p><br/>
        <div class="row">
            <div class="col-md-6"><img src="snrtar.png" alt="SNRT" /></div>
            <div class="col-md-6" style={stylediv}>Société nationale de radiodiffusion et de télévision,
             une société marocaine à vocation audiovisuelle</div>
        </div><br/>
        <div style={styleP2}>
            <p>La Société nationale de radiodiffusion et de télévision (SNRT) est une société de 
                participation marocaine, à vocation audiovisuelle, dont le capital est détenu à 
                100 % par l'État marocain. En 2007, le périmètre économique du groupe comprend 
                plus de 12 sociétés.</p>
                <p>La SNRT est un membre actif de l'Union européenne de radio-télévision et un
                  actionnaire de la chaîne d'information Euronews1.
                  La mission de la SNRT est de fournir des contenus de qualité qui répondent aux besoins et aux 
                  attentes des citoyens marocains.</p>
                {showNewParagraph && <div>
                  <p>
                  La société s'efforce de refléter la diversité et la richesse culturelle du Maroc, en diffusant
                  des programmes qui mettent en valeur la musique, le cinéma, le sport, les débats et les actualités.</p><p>
                  Les chaînes de télévision de la SNRT, telles que Al Aoula, 2M et Arryadia, sont des destinations populaires
                  pour les téléspectateurs marocains. Elles proposent une variété de programmes qui répondent aux goûts et aux
                  intérêts de différents publics, allant des feuilletons et des émissions pour enfants aux talk-shows et aux documentaires.</p><p>
                  De même, les stations de radio de la SNRT, telles que Radio Maroc, Radio Aswat et Chaîne Inter, sont très 
                  appréciées des auditeurs marocains. Elles proposent des émissions de musique, des émissions d'actualité et
                  des programmes interactifs qui permettent aux auditeurs de participer activement aux débats et discussions.</p><p>
                  En résumé, la SNRT est une entreprise publique marocaine de radiodiffusion et de télévision qui propose une 
                  variété de programmes de qualité aux téléspectateurs et aux auditeurs marocains. Elle joue un rôle important 
                  dans la promotion de la langue et de la culture marocaines, en reflétant la diversité et la richesse culturelle 
                  du pays à travers ses programmes.
                  </p></div>}
                <div ><button class="button button1" onClick={handleButtonClick} style={styleBtn}>En savoir plus</button>
                </div>
        </div>
        </div>
        <div>
            <AppCarousel/>
        </div>
        <div>
            <Footer/>
        </div>
        <div></div>

    </div>
}
export default AppContainer;