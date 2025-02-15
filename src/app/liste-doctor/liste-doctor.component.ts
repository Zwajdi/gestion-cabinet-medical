import { Component, OnInit } from '@angular/core';
import { Doctor } from '../models/doctor';
import { PatientService } from '../Service/patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-doctor',
  templateUrl: './liste-doctor.component.html',
  styleUrls: ['./liste-doctor.component.css']
})
export class ListeDoctorComponent implements OnInit {
  tdoctor : Doctor [] = []
  title : string = "Liste des Médecins";

  constructor(private patientsService: PatientService,
    private router: Router){}
  ngOnInit(): void {
    this.patientsService.getDoctor().subscribe(data =>{
      this.tdoctor=data
    })
  }


  delete(id: number) {
    console.log(id)
    let response = confirm("voulez vous vraiment supprimer ce compte ?");
    if (response) {
      this.patientsService.deleteDoctor(id).subscribe(
        (data) => {
          console.log(this.tdoctor);
          this.tdoctor = this.tdoctor.filter(element =>
            element.id !== id
          )
          console.log(this.tdoctor);

        },
        (error) => {
          console.log(error) // pour traiter les erreurs
        }
      )
    }
  }

  edit(id: number) {
    console.log(id);
    this.router.navigate(["edit_doctor", id]);
  }


}
