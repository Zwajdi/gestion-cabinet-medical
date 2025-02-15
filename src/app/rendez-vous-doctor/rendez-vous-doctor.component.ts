import { Component } from '@angular/core';
import { Patient } from '../models/patient';
import { PatientService } from '../Service/patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rendez-vous-doctor',
  templateUrl: './rendez-vous-doctor.component.html',
  styleUrls: ['./rendez-vous-doctor.component.css']
})
export class RendezVousDoctorComponent {
  tpatient: Patient[] = []
  title: string = "Liste des Rendez_Vous";

  constructor(private patientsService: PatientService,
    private router: Router) { }
  ngOnInit(): void {
    this.patientsService.get_liste_Rendez_vous().subscribe(data => {
      this.tpatient = data
    })
  }

  edit_rendez_vous(id: number) {
    console.log(id);
    this.router.navigate(["edit_rendez_vous", id]);
  }


  delete(id: number) {
    console.log(id)
    let response = confirm("voulez vous vraiment supprimer ce Rendez_Vous ?");
    if (response) {
      this.patientsService.delete_Rendez_vous(id).subscribe(
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
  
  editimg(id: number) {
    console.log(id);
    this.router.navigate(["editimage", id]);
  }



}
