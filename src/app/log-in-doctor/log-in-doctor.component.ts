import { Component } from '@angular/core';
import { PatientService } from '../Service/patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in-doctor',
  templateUrl: './log-in-doctor.component.html',
  styleUrls: ['./log-in-doctor.component.css']
})
export class LogInDoctorComponent {
  //secretaire: Secretaire = new Secretaire();
  email: string = '';
  motPasse: string = '';

  constructor(private patientService: PatientService, private router: Router) { }

 
  Entre() {
    this.patientService.verifyLogin_Doctor(this.email, this.motPasse).subscribe(isValid => {
      console.log('isValid:', isValid);
      if (isValid) {
        console.log('Connexion réussie');
        alert('Votre compte a été vérifié 😊');
        this.router.navigate(["/salle_docteur"]);
      } else {
        console.log('Échec de la connexion. Email ou mot de passe incorrect.');
        alert('Veuillez saisir les informations correctes. Ce compte est faux.!!');
      }
    });
  }

}
