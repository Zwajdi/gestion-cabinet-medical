import { Component } from '@angular/core';
import { Patient } from '../models/patient';
import { PatientService } from '../Service/patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-salle-attent-docteur',
  templateUrl: './salle-attent-docteur.component.html',
  styleUrls: ['./salle-attent-docteur.component.css']
})
export class SalleAttentDocteurComponent {
  tpatient: Patient[] = []
  patient: Patient = new Patient();

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
  

 
  Acceptation_salle_consultation(id: number) {
    console.log(id);
    this.router.navigate(["Acceptation_salle_consultation", id]);
  }

  


}
