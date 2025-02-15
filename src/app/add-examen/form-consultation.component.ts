import { Component } from '@angular/core';
import { PatientService } from '../Service/patient.service';
import { ActivatedRoute, Router } from '@angular/router';

import { Patient } from '../models/patient';

@Component({
  selector: 'app-form-consultation',
  templateUrl: './form-consultation.component.html',
  styleUrls: ['./form-consultation.component.css']
})
export class FormConsultationComponent {
  patient: Patient = new Patient()
 
  idrecupere!: number

  constructor(private route: ActivatedRoute,
    private patientService: PatientService,
    private router: Router) { }

  ngOnInit(): void {
    this.idrecupere = this.route.snapshot.params['idpatient']
    this.patientService.get_salle_PatientById(this.idrecupere).subscribe(
      data => {
        console.log(data);
        this.patient = data;

      }
    )
  }
  isFormValid_patient(): boolean {
    return !!this.patient.Poids && !!this.patient.Taille && !!this.patient.Temperature && !!this.patient.plaintes && !!this.patient.Symptomes;
  }


  ajouter_salle_doctor() {
    if (this.isFormValid_patient()) {
      this.patientService.ajouter_salle_doctor(this.patient).subscribe(
        data => {
          //console.log(data);
          alert('Patient ajoutée à la salle de médecin!');
          this.router.navigate(["/salle"])
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

  ajouter_examen_medical() {
   
      this.patientService.ajouter_examen_medical(this.patient).subscribe(
        data => {
       
        
         // this.router.navigate(["/salle"])
        },
       
      );
    } 
  

  delete_patient_salle_exam(id: number) {
  
    this.patientService.deletePatients_salle_attente(id).subscribe(
      (data) => {
        // Update the list or perform other actions upon deletion
      },
     
    );
  }

}






