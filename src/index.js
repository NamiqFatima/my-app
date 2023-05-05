import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import AppHeader from './AppHeader';
import AppContainer from './AppContainer';
import AppCarousel from './AppCarousel';
import Footer from './AppFooter';
import AppIncription from './AppInscription';
import AppAdmLogn from './AppAdmLogn';
 import Services from './Services';
 import Visiteur from './Visiteur';
import AppAdminInsc from './AppAdminInsc';
import ContactPage from './Tests';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    //<ContactPage/>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<AppContainer/>}/>
            <Route path='/services' element={<Services/>}/>
            <Route path='/espaceStagiaire' element={<AppIncription/>}/>
            <Route path='/espaceAdminlog' element={<AppAdmLogn/>}/>
            <Route path='/espaceAdminInsc' element={<AppAdminInsc/>}/>
            <Route path='/visiteur' element={<Visiteur/>}/>

        </Routes>
    </BrowserRouter>
    
);
    //<AppHeader /> 
    //<Footer/>  
    //<AppContainer/>
    //<AppCarousel/>
    //<AppIncription/>
    //< AppAdmInsct/>
    //< AppAdminLog/>
    //< Services/>
    //< Visiteur/>
