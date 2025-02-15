import { Component } from '@angular/core';
import { Patient } from '../models/patient';
import { PatientService } from '../Service/patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-paiment',
  templateUrl: './liste-paiment.component.html',
  styleUrls: ['./liste-paiment.component.css']
})
export class ListePaimentComponent {
  tpatient: Patient[] = []
  title: string = "PAIMENT";

  constructor(private patientsService: PatientService,
    private router: Router) { }
  ngOnInit(): void {
    this.patientsService.get_Paiment().subscribe(data => {
      this.tpatient = data
    })
  }

 
  addpaiment(id: number) {
    console.log(id);
    this.router.navigate(["paiment", id]);
  }

  editimg(id: number) {
    console.log(id);
    this.router.navigate(["editimage", id]);
  }

}
