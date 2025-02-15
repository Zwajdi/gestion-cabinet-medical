import { Component } from '@angular/core';
import { Patient } from '../models/patient';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../Service/patient.service';

@Component({
  selector: 'app-reponce-demende',
  templateUrl: './reponce-demende.component.html',
  styleUrls: ['./reponce-demende.component.css']
})
export class ReponceDemendeComponent {
  patient: Patient = new Patient()
  tpatient: Patient[] = []
  idrecupere!: number

  constructor(private route: ActivatedRoute,
    private patientService: PatientService,
    private router: Router) { }

  ngOnInit(): void {
    this.idrecupere = this.route.snapshot.params['idpatient']
    this.patientService.getdemendeById(this.idrecupere).subscribe(
      data => {
        this.patient = data;

      }
    )
  }

  isFormValid_patient(): boolean {
    return !!this.patient.datearrive && !!this.patient.heurearrive && !!this.patient.etatmaladie;
  }


  Reponce() {
    if (this.isFormValid_patient()) {
      this.patientService.ajouter_reponce(this.patient).subscribe(
        data => {
          alert('Réponse envoyée✅');
        },
        error => {
          alert('Une erreur le patient n est pas ajouter .');
        }
      );
    } else {
      alert('Veuillez saisir les informations nécessaires !!');
    }
  }

  Ajouter_Rendez_vous() {
    if (this.isFormValid_patient()) {
      this.patientService.ajouter_Rendez_vous(this.patient).subscribe(
        data => {    
          this.router.navigate(["/liste_rendez_vous"])
        },
        error => {
          alert('Une erreur le patient n est pas ajouter .');
        }
      );
    } else {
      alert('Veuillez saisir les informations nécessaires !!');
    }
  }

  delete(id: number) {
      this.patientService.deletedemende(id).subscribe(
        (data) => {
          console.log(this.tpatient);
          this.tpatient = this.tpatient.filter(element =>
            element.id !== id
          )
          console.log(this.tpatient);

        },
        (error) => {
          console.log(error) // pour traiter les erreurs
        }
      )
    }
}

