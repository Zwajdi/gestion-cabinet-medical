import { Component } from '@angular/core';
import { PatientService } from '../Service/patient.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from '../models/patient';

@Component({
  selector: 'app-add-salle-attente',
  templateUrl: './add-salle-attente.component.html',
  styleUrls: ['./add-salle-attente.component.css']
})
export class AddSalleAttenteComponent {
  patient: Patient = new Patient()
  tpatient: Patient[] = []
  idrecupere!: number

  constructor(private route: ActivatedRoute,
    private patientService: PatientService,
    private router: Router) { }
    
  ngOnInit(): void {
    this.idrecupere = this.route.snapshot.params['idpatient']
    this.patientService.getPatientById(this.idrecupere).subscribe(
      data => {
        this.patient = data;
        
      }
    );
    this.patientService.get_Rendez_vous_ById(this.idrecupere).subscribe(
      data => {
        this.patient = data;
        
      }
    )

  }

  isFormValid_patient(): boolean {
    return !!this.patient.numero && !!this.patient.datearrive && !!this.patient.heurearrive && !!this.patient.etatmaladie;
  }


  ajouter_salle() {
    if (this.isFormValid_patient()) {
      this.patientService.ajouter_salle_attente(this.patient).subscribe(
        data => {
          //console.log(data);
          alert('Patient ajoutée avec succès!');
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

  delete(id: number) {
    
      this.patientService.delete_Rendez_vous(id).subscribe(
        (data) => {
          console.log(this.tpatient);
          this.tpatient = this.tpatient.filter(element =>
            element.id !== id
          )
          console.log(this.tpatient);

        },
        
      )
    }
  }



