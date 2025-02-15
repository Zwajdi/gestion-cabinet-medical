import { Component } from '@angular/core';
import { Patient } from '../models/patient';
import { PatientService } from '../Service/patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-salle-attente-secretaire',
  templateUrl: './salle-attente-secretaire.component.html',
  styleUrls: ['./salle-attente-secretaire.component.css']
})
export class SalleAttenteSecretaireComponent {
  tpatient: Patient[] = []
  title: string = "Liste des Patients En Attente";

  constructor(private patientsService: PatientService,
    private router: Router) { }
  ngOnInit(): void {
    this.patientsService.get_salle_doctor().subscribe(data => {
      this.tpatient = data
    })
  }


  delete(id: number) {
    console.log(id)
    let response = confirm("voulez vous vraiment supprimer ce compte ?");
    if (response) {
      this.patientsService.deletePatients_salle_doctor(id).subscribe(
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
    this.router.navigate(["edit_salle_attente_secretaire", id]);
  }

  editimg(id: number) {
    console.log(id);
    this.router.navigate(["editimage", id]);
  }

  

}
