import React, {useState} from "react";
import AppHeader from './AppHeader';
import Footer from "./AppFooter";
import './styleInscrp.css';

function AppIncription(){
    const styleH1={textTransform: 'uppercase', fontFamily:'Calibri Light' ,textAlign:'center',marginTop:'20px'}
    const styleP={textIndent: '55px',textAlign: 'justify', letterSpacing: '1px' , 
    fontSize: '20px', margin: '15px 40px 30px 40px' }
    const styleic={fontSize:'48px',color:'green',paddingLeft:'48%'}
    const stylehfr={color: 'red'}
    const styleinputs={margin:'20x 50px 50px 0px', height:'90px' }
    const styleAj={ height:'50px'}
    const [formData, setFormData] = useState({
        nom: "",
        prenom: "",
        dateNss: "",
        email: "",
        cin: "",
        telephone: "",
        departement: "",
        dateDebut: "",
        dateFin: "",
        fileCv: "",
      });
      const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("/submit-form", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(formData),
            });
            const data = await response.json();
            console.log(data);
          } catch (err) {
            console.error(err);
          }
    }
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
    return <>
    <div>
        <AppHeader/>
    </div>
    <div>
        <h1 style={styleH1}>Bienvenue sur l'espace Stagiaire de la SNRT </h1>
        <p style={styleP}>La partie de l'espace stagiaire permet aux étudiants et jeunes diplômés
            de postuler pour un stage au sein de la société SNRT. Elle offre une 
            interface conviviale pour remplir un formulaire de demande de stage. Les
            candidats peuvent fournir leurs informations personnelles, leurs diplômes,
            leurs compétences et leur expérience professionnelle. Ils peuvent également
            préciser leur domaine d'intérêt et la période à laquelle ils souhaitent effectuer 
            leur stage. Cette partie de l'espace stagiaire est un moyen facile et rapide pour 
            les étudiants et jeunes diplômés de postuler pour des stages dans les différents 
            départements de la SNRT. Les demandes de stage sont traitées de manière 
            professionnelle et les candidats reçoivent une réponse dans les meilleurs délais.
        </p>
        <i class='fas fa-angle-double-down' style={styleic}></i>
        <h1 style={styleH1}>inscription</h1>
        <p style={styleP}>Ces informations doit etre correct, merci de verifier tous les champs avant d'enregistrer votre incription</p>
        <div className="bod">
        <form onSubmit={handleSubmit} method="POST" action="/submit-form" >
            <h5 style={stylehfr}>(*) : Champ Obligatoire</h5>
            <div class='row' >

                <div class="col-md-6" >
                    <select class="form-control" style={styleAj} >
                        <option >Monsieur</option>
                        <option>Madame</option>
                    </select>
                </div>
                
                <div className= 'inputs' class="col-md-6" style={styleinputs}>
                    <input class="form-control" style={styleAj} type="text"  id="nom"
                    placeholder='Nom en majuscule (*)' required name='nom' value={formData.nom}
                     onChange={handleChange}/>
                </div>

                <div className= 'inputs' class="col-md-6" style={styleinputs}>
                    <input  class="form-control" style={styleAj} type="text" id="prenom"
                    placeholder='Prenom en majuscule (*)'  name='prenom' required
                     value={formData.prenom} onChange={handleChange} />
                </div >

                <div className= 'inputs' class="col-md-6" style={styleinputs}>
                    <input class="form-control" style={styleAj} type="text" id="dateNss"
                    placeholder='Date de Naissance (JJ/MM/AAAA)' name='dateNss' required 
                    value={formData.dateNss} onChange={handleChange} />
                </div>

                <div className= 'inputs' class="col-md-6" style={styleinputs}>
                    <input class="form-control" style={styleAj}  type="email" id="email"
                    placeholder='E-mail (*)' name='email'  required 
                    value={formData.email} onChange={handleChange}/>
                </div >

                <div className= 'inputs' class="col-md-6" style={styleinputs}>
                    <input class="form-control" style={styleAj} type="text" id="cin"
                    placeholder='CIN (Exemple: AA2222 *)' name='cin' required
                     value={formData.cin} onChange={handleChange}/>
                </div>

                <div className= 'inputs' class="col-md-6" style={styleinputs}>
                    <input class="form-control" style={styleAj} type="text" id="telephone"
                    placeholder='Téléphone (*)' name='telephone' required 
                    value={formData.telephone} onChange={handleChange}/>
                </div>

                <div className= 'inputs' class="col-md-6" style={styleinputs}>
                    <input class="form-control" style={styleAj} type="text" id="adresse"
                    placeholder='Adresse' name='adresse' required/>
                </div>

                <div className= 'inputs' class="col-md-6">
                    <input class="form-control" style={styleAj} type="text" id="departement"
                    placeholder='Département (*)' name='departement' required 
                    value={formData.departement} onChange={handleChange}/>
                </div>

                <div className='text' class="col-md-6" style={styleinputs} > 
                    <input class="form-control" style={styleAj} type="text" id="dateDebut"
                    placeholder='Date de Début (JJ/MM/AAAA *)' name='dateDebut' required
                     value={formData.dateDebut} onChange={handleChange}/>
                </div>
                <div className='text' class="col-md-6" style={styleinputs} > 
                    <input class="form-control"style={styleAj} type="text" dateFin
                    placeholder='Date de Fin (JJ/MM/AAAA *)' name='dateFin' required 
                    value={formData.dateFin} onChange={handleChange}/>  
                </div>
                <div className='text' class="col-md-6" style={styleinputs} > 
                    <input class="form-control"s type="file"  name='fileCv' id="fileCv"
                    required value={formData.fileCv} onChange={handleChange}/>  
                </div>
                <div className="ctn" >
                    <input type="submit" class="btn btn-outline-primary btn-lg" value='Postuler' />
                </div>
            </div>
            
        </form>
        </div>
        <div>
            <Footer/>
        </div>
        </div>
    
    </>
}
export default AppIncription;