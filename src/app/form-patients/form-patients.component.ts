import { Component } from '@angular/core';
import { Patient } from '../models/patient';
import { PatientService } from '../Service/patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-patients',
  templateUrl: './form-patients.component.html',
  styleUrls: ['./form-patients.component.css']
})
export class FormPatientsComponent {
  patient: Patient = new Patient() 



  constructor(private patientService: PatientService, private router: Router) { }

  isFormValid(): boolean {
    return !!this.patient.numdossier && !!this.patient.nom && !!this.patient.prenom && !!this.patient.datenaissance;
  }


  ajouter() {
    if (this.isFormValid()) {
      this.patientService.ajouterPatients(this.patient).subscribe(
        data => {
          //console.log(data);
          alert('Patient ajoutée avec succès!');
          this.router.navigate(["/liste"])
        },
        error => {
          //console.error('Erreur lors de l\'ajout de l\'actualité:', error);
          alert('Une erreur le patient n est pas ajouter .');
        }
      );
    } else {
      alert('Veuillez saisir les informations nécessaires !!');
      //console.error('Veuillez saisir toutes les informations nécessaires.');
    }
  }
}
