import { Component } from '@angular/core';
import { Patient } from '../models/patient';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../Service/patient.service';

@Component({
  selector: 'app-information-patient',
  templateUrl: './information-patient.component.html',
  styleUrls: ['./information-patient.component.css']
})
export class InformationPatientComponent {
  tpatient: Patient[] = []
  patient: Patient = new Patient();
  idrecupere!: number

  constructor(private route: ActivatedRoute,
    private patientService: PatientService,
    private router: Router) { }
   
  ngOnInit(): void {
    this.idrecupere = this.route.snapshot.params['idpatient']
    this.patientService.get_information_PatientById(this.idrecupere).subscribe(
      data => {
        this.patient = data
      }
    )
  }


}
