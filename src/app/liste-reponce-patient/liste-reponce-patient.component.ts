import { Component } from '@angular/core';
import { Patient } from '../models/patient';
import { PatientService } from '../Service/patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-reponce-patient',
  templateUrl: './liste-reponce-patient.component.html',
  styleUrls: ['./liste-reponce-patient.component.css']
})
export class ListeReponcePatientComponent {
  tpatient: Patient[] = []
  title: string = "Réponse à la Demande";

  constructor(private patientsService: PatientService,
    private router: Router) { }
  ngOnInit(): void {
    this.patientsService.get_reponce().subscribe(data => {
      this.tpatient = data
    })
  }


  delete(id: number) {
    console.log(id)
    let response = confirm("voulez vous vraiment supprimer ce compte ?");
    if (response) {
      this.patientsService.deletePatients_salle_attente(id).subscribe(
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

  addconsult(id: number) {
    console.log(id);
    this.router.navigate(["regarde", id]);
  }


}
