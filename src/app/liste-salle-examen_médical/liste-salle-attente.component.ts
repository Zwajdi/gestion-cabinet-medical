import { Component } from '@angular/core';
import { PatientService } from '../Service/patient.service';
import { Router } from '@angular/router';
import { Patient } from '../models/patient';

@Component({
  selector: 'app-liste-salle-attente',
  templateUrl: './liste-salle-attente.component.html',
  styleUrls: ['./liste-salle-attente.component.css']
})
export class ListeSalleAttenteComponent {
  tpatient: Patient[] = []
  title: string = "Salle d'examen médical";

  constructor(private patientsService: PatientService,
    private router: Router) { }
  ngOnInit(): void {
    this.patientsService.get_salle_attente().subscribe(data => {
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

  edit(id: number) {
    console.log(id);
    this.router.navigate(["editsalle", id]);
  }

  addsalle(id: number) {
    console.log(id);
    this.router.navigate(["formconsult", id]);
  }

  editimg(id: number) {
    console.log(id);
    this.router.navigate(["editimage", id]);
  }

 
}
