import { Component, OnInit } from '@angular/core';
import { Patient } from '../models/patient';
import { PatientService } from '../Service/patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-patient-onligne',
  templateUrl: './liste-patient-onligne.component.html',
  styleUrls: ['./liste-patient-onligne.component.css']
})
export class ListePatientOnligneComponent implements OnInit {
  tpatient: Patient[] = []
  title: string = "Les Demande de Consultation en ligne";

  constructor(private patientsService: PatientService,
    private router: Router) { }
  ngOnInit(): void {
    this.patientsService.get_Patients_Onligne().subscribe(data => {
      this.tpatient = data
    })
  }


  delete(id: number) {
    console.log(id)
    let response = confirm("voulez vous vraiment supprimer ce compte ?");
    if (response) {
      this.patientsService.deletedemende(id).subscribe(
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



  reponce(id: number) {
    console.log(id);
    this.router.navigate(["reponce", id]);
  }


  


}
