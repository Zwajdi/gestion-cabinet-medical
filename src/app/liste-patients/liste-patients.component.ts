import { Component, OnInit } from '@angular/core';
import { Patient } from '../models/patient';
import { PatientService } from '../Service/patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-patients',
  templateUrl: './liste-patients.component.html',
  styleUrls: ['./liste-patients.component.css']
})
export class ListePatientsComponent implements OnInit {
  tpatient : Patient [] = []
  title : string = "Liste des Patients";

  constructor(private patientsService: PatientService,
    private router: Router){}
  ngOnInit(): void {
    this.patientsService.getPatients().subscribe(data =>{
      this.tpatient=data
    })
  }


  delete(id: number) {
    console.log(id)
    let response = confirm("voulez vous vraiment supprimer ce compte ?");
    if (response) {
      this.patientsService.deletePatients(id).subscribe(
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
    this.router.navigate(["edit", id]);
  }
  
  addsalle(id: number) {
    console.log(id);
    this.router.navigate(["addSalle", id]);
  }

  editimg(id: number) {
    console.log(id);
    this.router.navigate(["editimage", id]);
  }
  

  addRendez_vous(id: number) {
    console.log(id);
    this.router.navigate(["form_Rendez_vous", id]);
  }



}
