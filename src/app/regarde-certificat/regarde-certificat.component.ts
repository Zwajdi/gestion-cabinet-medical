import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../Service/patient.service';
import { Certificat } from '../models/certificat';
import { Patient } from '../models/patient';

@Component({
  selector: 'app-regarde-certificat',
  templateUrl: './regarde-certificat.component.html',
  styleUrls: ['./regarde-certificat.component.css']
})
export class RegardeCertificatComponent implements OnInit {
  patient : Patient = new Patient ()
  //certificat: Certificat = new Certificat();
  idrecupere!: number;

  constructor(
    private route: ActivatedRoute,
    private patientService: PatientService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.idrecupere = this.route.snapshot.params['idpatient'];
    this.patientService.get_Certificat_PatientById(this.idrecupere).subscribe(
      data => {
        this.patient = data;
      }
    );
  }
}
