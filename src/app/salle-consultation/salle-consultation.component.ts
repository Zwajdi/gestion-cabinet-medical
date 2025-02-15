import { Component } from '@angular/core';
import { PatientService } from '../Service/patient.service';
import { Router } from '@angular/router';
import { Patient } from '../models/patient';

@Component({
  selector: 'app-salle-consultation',
  templateUrl: './salle-consultation.component.html',
  styleUrls: ['./salle-consultation.component.css']
})
export class SalleConsultationComponent {
  title : string = "Bienvenu";
  tpatient: Patient[] = []
  constructor(private patientsService: PatientService,
    private router: Router) { }

  ngOnInit(): void {
    this.patientsService.get_salle_consultation().subscribe(data => {
      this.tpatient = data
    })
  }


  information_patient(id: number) {
    console.log(id);
    this.router.navigate(["information_patient", id]);
  }

  addconsult(id: number) {
    console.log(id);
    this.router.navigate(["information", id]);
  }


  edit(id: number) {
    console.log(id);
    this.router.navigate(["editsalle", id]);
  }

  addOrdonnace(id: number) {
    console.log(id);
    this.router.navigate(["ordonnace", id]);
  }

  addCertificat(id: number) {
    console.log(id);
    this.router.navigate(["certificat", id]);
  }


  delete(id: number) {
    console.log(id)
    let response = confirm("voulez vous vraiment dégagé ce Patient ?");
    if (response) {
      this.patientsService.deletePatients_salle_consultation(id).subscribe(
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

}
