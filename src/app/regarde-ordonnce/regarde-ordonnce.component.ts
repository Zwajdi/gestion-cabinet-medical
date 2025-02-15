import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { PatientService } from '../Service/patient.service';
import { Ordonnance } from '../models/ordonnance';
import { Patient } from '../models/patient';

@Component({
  selector: 'app-regarde-ordonnce',
  templateUrl: './regarde-ordonnce.component.html',
  styleUrls: ['./regarde-ordonnce.component.css']
})
export class RegardeOrdonnceComponent  {
  patient: Patient = new Patient()

 

  idrecupere!: number;


  constructor(
    private route: ActivatedRoute,
    private patientService: PatientService,
    private router: Router
  ) { }


  ngOnInit(): void {
    this.idrecupere = this.route.snapshot.params['idpatient'];
    this.patientService.get_ordonnace_PatientById(this.idrecupere).subscribe(
      data => {
        this.patient = data;
      });
  }
}
