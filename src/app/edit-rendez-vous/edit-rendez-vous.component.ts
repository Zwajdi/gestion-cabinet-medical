import { Component } from '@angular/core';
import { Patient } from '../models/patient';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../Service/patient.service';

@Component({
  selector: 'app-edit-rendez-vous',
  templateUrl: './edit-rendez-vous.component.html',
  styleUrls: ['./edit-rendez-vous.component.css']
})
export class EditRendezVousComponent {

  patient: Patient = new Patient()
  idrecupere!: number

  constructor(private route: ActivatedRoute,
    private patientService: PatientService,
    private router: Router) { }
   
  ngOnInit(): void {
    this.idrecupere = this.route.snapshot.params['idpatient']
    this.patientService.get_Rendez_vous_ById(this.idrecupere).subscribe(
      data => {
        this.patient = data
      }
    )
  }

  update() {
    this.patientService.update_Rendez_vous(this.idrecupere, this.patient).subscribe(
      data => {
        //this.router.navigate(["/liste_rendez_vous"])
        alert("La modification a été effectuée avec succès")
      },
      error => console.log(error)
    )
  }
}



