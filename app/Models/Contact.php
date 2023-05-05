<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    protected $table = 'stagiaires';
    protected $fillable = ['nom', 'prenom', 'email', 'cin', 'telephone','dateNaissance','departement', 'dateDebut', 'dateFin', 'nomFicheCv'];

    use HasFactory;
}
