import { Component } from '@angular/core';
import { Secretaire } from '../models/secretaire';
import { PatientService } from '../Service/patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in-secretaire',
  templateUrl: './log-in-secretaire.component.html',
  styleUrls: ['./log-in-secretaire.component.css']
})
export class LogInSecretaireComponent {
  secretaire: Secretaire = new Secretaire();
  email: string = '';
  motPasse: string = '';

  constructor(private patientService: PatientService, private router: Router) { }

  Entre() {
    this.patientService.verifyLogin_Secretaire(this.email, this.motPasse).subscribe(isValid => {
      console.log('isValid:', isValid);
      if (isValid) {
        console.log('Connexion réussie');
        alert('Votre compte a été vérifié 😊');
        this.router.navigate(["/liste"]);
      } else {
        console.log('Échec de la connexion. Email ou mot de passe incorrect.');
        alert('Veuillez saisir les informations correctes. Ce compte est faux.!!');
      }
    });
  }
  
  
}
