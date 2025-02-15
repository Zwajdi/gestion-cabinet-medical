import { Component } from '@angular/core';
import { Patient } from '../models/patient';
import { PatientService } from '../Service/patient.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-rendez-vous',
  templateUrl: './form-rendez-vous.component.html',
  styleUrls: ['./form-rendez-vous.component.css']
})
export class FormRendezVousComponent {
  patient: Patient = new Patient()
  idrecupere! :number

  constructor(private route:ActivatedRoute,
    private patientService: PatientService, 
    private router: Router) { }
   
  ngOnInit(): void {
    this.idrecupere= this.route.snapshot.params['idpat']
    this.patientService.getPatientById(this.idrecupere).subscribe(
      data =>{
        this.patient=data
      }
    )
  }

  isFormValid(): boolean {
    return !!this.patient.datearrive && !!this.patient.nom && !!this.patient.prenom && !!this.patient.heurearrive;
  }


  ajouter() {
    if (this.isFormValid()) {
      this.patientService.ajouter_Rendez_vous(this.patient).subscribe(
        data => {
          //console.log(data);
          alert('Rendez_vous ajoutée avec succès!');
          //this.router.navigate(["/liste_rendez_vous"])
        },
        error => {
          //console.error('Erreur lors de l\'ajout de l\'actualité:', error);
          alert('Une erreur le Rendez_vous n est pas ajouter .');
        }
      );
    } else {
      alert('Veuillez saisir les informations nécessaires !!');
      //console.error('Veuillez saisir toutes les informations nécessaires.');
    }
  }

}
