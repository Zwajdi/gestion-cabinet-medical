import { Component } from '@angular/core';
import { PatientService } from '../Service/patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in-patient',
  templateUrl: './log-in-patient.component.html',
  styleUrls: ['./log-in-patient.component.css']
})
export class LogInPatientComponent {
  email: string = '';
  motPasse: string = '';

  constructor(private patientService: PatientService, private router: Router) { }

  Entre() {
    this.patientService.verifyLogin_Patient(this.email, this.motPasse).subscribe(isValid => {
      if (isValid) {
        console.log('Connexion réussie');
        alert('Votre compte a été vérifié 😊✅');
        this.router.navigate(["/Interface_Patient"])
      } else {
        console.log('Échec de la connexion. Email ou mot de passe incorrect.');
        alert('Veuillez saisir les informations correctes. Ce compte est faux.⛔🚨!!');
      }
    });
  }

}
