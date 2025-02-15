import { Component, OnInit } from '@angular/core';
import { Patient } from '../models/patient';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../Service/patient.service';

@Component({
  selector: 'app-regarde-information-consultation',
  templateUrl: './regarde-information-consultation.component.html',
  styleUrls: ['./regarde-information-consultation.component.css']
})
export class RegardeInformationConsultationComponent implements OnInit {
  patient: Patient = new Patient();
  medications = ['SERUM', 'INJECTION', 'PANSEMENT'];
  idrecupere!: number;
  tpatient: Patient[] = [];

  constructor(
    private route: ActivatedRoute,
    private patientService: PatientService,
    private router: Router
  ) { }


   ngOnInit(): void {
     this.idrecupere = this.route.snapshot.params['idpatient'];
     this.patientService.get_liste_consull_PatientById(this.idrecupere).subscribe(
       data => {
        this.patient = data;
      }
    );
   }

  isSelected(medication: string): boolean {
    return this.patient.Medicaments && this.patient.Medicaments.includes(medication);
  }
}
