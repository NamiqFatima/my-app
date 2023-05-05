<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class FormController extends Controller
{
    public function submitForm(Request $request){

        $contact = Contact::create([
            'nom' => $request->input('nom'),
            'prenom' => $request->input('prenom'),
            'email' => $request->input('email'),
            'cin' => $request->input('cin'),
            'telephone' => $request->input('telephone'),
            'dateNss' => $request->input('dateNss'),
            'departement' => $request->input('departement'),
            'dateDebut' => $request->input('dateDebut'),
            'dateFin' => $request->input('dateFin'),
            'fileCv' => $request->input('fileCv'),
        ]);  


        $validateDAta=$request->validate([
            'nom'=>'required|string|max:255',
            'prenom'=>'required|string|max:255',
            'email'=>'required|string|max:255',
            'cin'=>'required|string|max:255',
            'telephone'=>'required|string|max:255',
            'dateNss'=>'required|date|max:255',
            'departement'=>'required|string|max:255',
            'dateDebut'=>'required|date|max:255',
            'dateFin'=>'required|date|max:255',
            'fileCv'=>'required|string|max:255'
        ]);

        $contact = new Contact;
        $contact->nom = $validateDAta['nom'];
        $contact->prenom = $validateDAta['prenom'];
        $contact->email = $validateDAta['email'];
        $contact->cin = $validateDAta['cin'];
        $contact->telephone = $validateDAta['telephone'];
        $contact->dateNss = $validateDAta['dateNss'];
        $contact->departement = $validateDAta['departement'];
        $contact->dateDebut = $validateDAta['dateDebut'];
        $contact->dateFin = $validateDAta['dateFin'];
        $contact->fileCv = $validateDAta['fileCv'];
        $contact->save();

        return response()->json([
            'message'=>'Success',
            'contact'=>$contact,
        ]);

    }
}
    
    