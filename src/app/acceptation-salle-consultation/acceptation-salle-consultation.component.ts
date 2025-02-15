import { Component } from '@angular/core';
import { Patient } from '../models/patient';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../Service/patient.service';

@Component({
  selector: 'app-acceptation-salle-consultation',
  templateUrl: './acceptation-salle-consultation.component.html',
  styleUrls: ['./acceptation-salle-consultation.component.css']
})
export class AcceptationSalleConsultationComponent {
  tpatient: Patient[] = []
  patient: Patient = new Patient();
  idrecupere!: number

  constructor(private route: ActivatedRoute,
    private patientService: PatientService,
    private router: Router) { }
   
  ngOnInit(): void {
    this.idrecupere = this.route.snapshot.params['idpatient']
    this.patientService.get_salle_doctor_PatientById(this.idrecupere).subscribe(
      data => {
        this.patient = data
      }
    )
  }


  ajouter_consult() {
    this.patientService.ajouter_salle_consult(this.patient).subscribe(
      (data) => {
        //alert('Patient ajoutée avec succès!');
        this.router.navigate(['/salle_consultation']);
      },
      (error) => {
        alert('Une erreur le patient n est pas ajouter.');
      }
    );
  } 

  Accepter(id: number) {
    console.log(id)
    let response = confirm("Ce patient est dans la salle de consultation 👨‍⚕️");
    if (response) {
      this.patientService.deletePatients_salle_doctor(id).subscribe(
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



}
