import { Component } from '@angular/core';
import { PatientService } from '../Service/patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in-directeur',
  templateUrl: './log-in-directeur.component.html',
  styleUrls: ['./log-in-directeur.component.css']
})
export class LogInDirecteurComponent {
  email: string = '';
  motPasse: string = '';

  constructor(private patientService: PatientService, private router: Router) { }

  
  Entre() {
    this.patientService.verifyLogin_Directeur(this.email, this.motPasse).subscribe(isValid => {
      console.log('isValid:', isValid);
      if (isValid) {
        console.log('Connexion réussie');
        alert('Votre compte a été vérifié 😊');
        this.router.navigate(["/Directeur"]);
      } else {
        console.log('Échec de la connexion. Email ou mot de passe incorrect.');
        alert('Veuillez saisir les informations correctes. Ce compte est faux.!!');
      }
    });
  }

}
