import { Component } from '@angular/core';
import { Patient } from '../models/patient';
import { PatientService } from '../Service/patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-compte-patient',
  templateUrl: './create-compte-patient.component.html',
  styleUrls: ['./create-compte-patient.component.css']
})
export class CreateComptePatientComponent {
  patient: Patient = new Patient()


  constructor(private patientService: PatientService, private router: Router) { }

  isFormValid(): boolean {
    return !!this.patient.nom && !!this.patient.prenom && !!this.patient.MotPasse && !!this.patient.email;
  }


  ajouter() {
    if (this.isFormValid()) {
      this.patientService.ajouter_Patient(this.patient).subscribe(
        data => {
          //console.log(data);
          alert('Patient ajoutée avec succès ✅');
          this.router.navigate(["/login_Patient"])
        },
        error => {
          //console.error('Erreur lors de l\'ajout de l\'actualité:', error);
          alert('Une erreur le Doctor n est pas ajouter .');
        }
      );
    } else {
      alert('Veuillez saisir les informations nécessaires !!');
      //console.error('Veuillez saisir toutes les informations nécessaires.');
    }
  }

}
