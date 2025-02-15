import { Component } from '@angular/core';
import { Patient } from '../models/patient';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../Service/patient.service';

@Component({
  selector: 'app-edit-salle',
  templateUrl: './edit-salle.component.html',
  styleUrls: ['./edit-salle.component.css']
})
export class EditSalleComponent {
  patient: Patient = new Patient()
  idrecupere!: number

  constructor(private route: ActivatedRoute,
    private patientService: PatientService,
    private router: Router) { }
   
  ngOnInit(): void {
    this.idrecupere = this.route.snapshot.params['idpatient']
    this.patientService.get_salle_PatientById(this.idrecupere).subscribe(
      data => {
        this.patient = data
      }
    )
  }

  update() {
    this.patientService.update_salle(this.idrecupere, this.patient).subscribe(
      data => {
        this.router.navigate(["/salle"])
      },
      error => console.log(error)
    )
  }
}
