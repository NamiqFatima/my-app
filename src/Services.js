import React from "react";
import AppHeader from "./AppHeader";
import Footer from "./AppFooter";
import "./style.css";
function Services(){
    const style1={backgroundColor: "#f8f9fa",borderRadius:"9px"}
    const style2={ marginBottom: "20px",backgroundColor: "#ffffff",borderRadius: "10px",
        borderStyle: "outset",padding: "20px",boxShadow: "0px 5px 6px rgba(0,0,0,0.1)",transition:"0.5s ease-in-out",
        overFlow: "hidden",}
    const style3={fontSize:"20px",textAlign:"centre"}
    return(
        <div>
            <div>
                <AppHeader/>
            </div>
            <div class="container" style={style1}>
                <h1 class="text-center mt-5 ">Une Gamme Complète des Services Proposés Par SNRT:</h1>
                <p class="pt-2" style={style3}>Découvrez les services de la SNRT,votre partenaire de confiance pour tous
                 vos besoins en communication audiovisuelle: </p><br/>
                 <div class="loading-dots">
                        <div class="dot dot-1"></div>
                        <div class="dot dot-2"></div>
                        <div class="dot dot-3"></div>
                        <div class="dot dot-4"></div>
                 </div><br/><br/>
                    <div class="row">
                        <div class="col-md-4">
                            <div className="service-card" style={style2}>
                                <h3>Télévision: <i class="fas fa-tv"></i></h3>
                                <p>La SNRT possède plusieurs chaînes de télévision, notamment 
                                la première chaîne, 2M, qui est la plus regardée au Maroc. Elle propose
                                également des chaînes thématiques telles que Arryadia (sports), Al
                                Maghribia (information), ainsi que des chaînes destinées..</p>
                                <a href="https://fr.wikipedia.org/wiki/Soci%C3%A9t%C3%A9_nationale_de_radiodiffusion_et_de_t%C3%A9l%C3%A9vision" target="_blank" class="btn btn-primary btn-sm mt-3">En savoir plus</a>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div className="service-card" style={style2}>
                                <h3>Radio : <i class="fas fa-radio"></i></h3>
                                <p>La SNRT possède plusieurs chaînes de télévision,
                                    notamment la première chaîne, 2M, qui est la plus regardée au Maroc.
                                    Elle propose également des chaînes thématiques telles que Arryadia (sports),
                                    Al Maghribia (information), ainsi que des chaînes destinées à un public francophone.</p>
                                <a href="https://fr.wikipedia.org/wiki/Soci%C3%A9t%C3%A9_nationale_de_radiodiffusion_et_de_t%C3%A9l%C3%A9vision" target="_blank" class="btn btn-primary btn-sm mt-3">En savoir plus</a>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div className="service-card" style={style2}>
                                <h3>Production audiovisuelle :<i class="fas fa-film"></i></h3>
                                <p>La SNRT produit également ses propres programmes télévisés et radiophoniques,
                                couvrant une variété de sujets tels que la culture,
                                les actualités, les émissions de divertissement et les émissions pour enfants.</p>
                                <a href="https://fr.wikipedia.org/wiki/Soci%C3%A9t%C3%A9_nationale_de_radiodiffusion_et_de_t%C3%A9l%C3%A9vision" target="_blank" class="btn btn-primary btn-sm mt-3">En savoir plus</a>
                            </div>
                        </div>
                        </div><br/><br/><br/>
                    <div class="row">
                        <div class="col-md-4">
                            <div className="service-card" style={style2}>
                                <h3>Location de studios et de matériel de production : <i class="fas fa-microphone-alt"></i></h3>
                                <p>La SNRT dispose de studios équipés de matériel de production de pointe pour la production de
                                   programmes audiovisuels. Ces studios peuvent être loués par des entreprises de production indépendantes.
                                   La SNRT propose également la location de matériel de production et de post-production.</p>
                                <a href="https://fr.wikipedia.org/wiki/Soci%C3%A9t%C3%A9_nationale_de_radiodiffusion_et_de_t%C3%A9l%C3%A9vision" target="_blank" class="btn btn-primary btn-sm mt-3">En savoir plus</a>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="service-card" style={style2}>
                                <h3> Diffusion en ligne : <i class="fas fa-broadcast-tower"></i></h3>
                                <p> La SNRT propose des services de diffusion en ligne de ses émissions télévisées et radiophoniques
                                     via son site web officiel,Le service de diffusion en ligne de la SNRT est accessible via le site web officiel de
                                    la SNRT (www.snrt.ma) ainsi que par le biais d'applications mobiles dédiées pour les appareils iOS et Android,Il est 
                                    recommandé de vérifier les conditions d'utilisation et les politiques de confidentialité du service de diffusion.</p>
                                <a href="https://fr.wikipedia.org/wiki/Soci%C3%A9t%C3%A9_nationale_de_radiodiffusion_et_de_t%C3%A9l%C3%A9vision" target="_blank" className="btn btn-primary btn-sm mt-3">En savoir plus</a>
                            </div>
                    </div>
                    <div class="col-md-4">
                            <div className="service-card" style={style2}>
                                <h3> Services de publicité et de sponsoring : <i class="fas fa-handshake"></i></h3>
                                <p>La SNRT propose des services de publicité et de sponsoring pour les entreprises souhaitant promouvoir leurs produits
                                    ou services sur les chaînes de télévision et les stations de radio de la SNRT. Les annonces publicitaires
                                    peuvent être diffusées pendant les pauses publicitaires ou lors de la diffusion de programmes sponsorisés.</p>
                                <a href="https://fr.wikipedia.org/wiki/Soci%C3%A9t%C3%A9_nationale_de_radiodiffusion_et_de_t%C3%A9l%C3%A9vision" target="_blank" class="btn btn-primary btn-sm mt-3">En savoir plus</a>
                            </div>
                    </div>
                   
            </div>
        </div>
        <br/><br/>
        <div>
            <Footer/>
        </div>
        </div>)
}
  export default Services