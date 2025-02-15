import { Component } from '@angular/core';
import { Patient } from '../models/patient';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../Service/patient.service';

@Component({
  selector: 'app-edite-salle-attente-secretaire',
  templateUrl: './edite-salle-attente-secretaire.component.html',
  styleUrls: ['./edite-salle-attente-secretaire.component.css']
})
export class EditeSalleAttenteSecretaireComponent {
  patient: Patient = new Patient()

  idrecupere!: number

  constructor(private route: ActivatedRoute,
    private patientService: PatientService,
    private router: Router) { }


  ngOnInit(): void {
    this.idrecupere = this.route.snapshot.params['idpatient']
    this.patientService.get_salle_doctor_PatientById(this.idrecupere).subscribe(
      data => {
        this.patient = data
      }
    )
  }



  update() {
    this.patientService.update_salle_attente_secretaire(this.idrecupere, this.patient).subscribe(
      data => {
        this.router.navigate(["/salle_attente_secretaire"])
      },
      error => console.log(error)
    )
  }


}
