import React, { useState } from 'react';
import './App.css'


const ContactPage = () => {
  

  return (
    <div >
      <h1>Laissez un commentaire </h1>
      <form >
    <div class="row">
           <div class="col-md-6">
            <input type="text" class="name"  required placeholder='Nom' />
           </div>
           <div class="col-md-6"> 
            <input type="email" class="email" required placeholder='Email' />
           </div>
    </div>
        <div>
          <textarea class="message"  required placeholder='Message'></textarea>
        </div>
        <div class="btn">
        <button type="submit" class="btn btn-primary btn-sm mt-3">Envoyer</button><br/><br/>
        </div>
      </form>
    </div>
  )
}

export default ContactPage;