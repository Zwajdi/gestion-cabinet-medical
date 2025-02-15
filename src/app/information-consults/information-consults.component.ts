import { Component } from '@angular/core';
import { Patient } from '../models/patient';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../Service/patient.service';

@Component({
  selector: 'app-information-consults',
  templateUrl: './information-consults.component.html',
  styleUrls: ['./information-consults.component.css']
})
export class InformationConsultsComponent {
  selectedMedicaments: string[] = [];

  medications = [
    'SERUM',
    'INJECTION',
    'PANSEMENT'
  ];

  updateMedicament(medication: string, event: any) {
    const isChecked = event.target.checked;
    if (isChecked) {
      this.selectedMedicaments.push(medication);
    } else {
      this.selectedMedicaments = this.selectedMedicaments.filter(m => m !== medication);
    }
    this.patient.Medicaments = this.selectedMedicaments;
  }
  patient: Patient = new Patient();

  idrecupere!: number;


  constructor(
    private route: ActivatedRoute,
    private patientService: PatientService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.idrecupere = this.route.snapshot.params['idpatient'];
    this.patientService
      .get_examen_PatientById(this.idrecupere)
      .subscribe((data) => {
        this.patient = data;
      });
  }

  isFormValid_patient(): boolean {
    return (
      !!this.patient.Poids &&
      !!this.patient.Taille &&
      !!this.patient.Temperature &&
      !!this.patient.resulta &&
      !!this.patient.diagnostique &&
      !!this.patient.observation &&
      !!this.patient.prixconsult &&
      !!this.patient.plaintes &&
      !!this.patient.Symptomes
    );
  }

  ajouter_consult() {
    if (this.isFormValid_patient()) {
      this.patientService.ajouter_consult(this.patient).subscribe(
        (data) => {
          alert('Rapport ajoutée avec succès!');
          this.router.navigate(['/salle_consultation']);
        },
        (error) => {
          alert('Une erreur le patient n est pas ajouter.');
        }
      );
    } else {
      alert('Veuillez saisir les informations nécessaires !!');
    }
  }

  ajouterPourPaiment() {
    if (this.isFormValid_patient()) {
      this.patientService.ajouter_Paiment(this.patient).subscribe(
        (data) => {

        },

      );

    }
  }


}

