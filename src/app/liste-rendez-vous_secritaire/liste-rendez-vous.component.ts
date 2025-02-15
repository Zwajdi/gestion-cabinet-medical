import { Component } from '@angular/core';
import { Patient } from '../models/patient';
import { PatientService } from '../Service/patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-rendez-vous',
  templateUrl: './liste-rendez-vous.component.html',
  styleUrls: ['./liste-rendez-vous.component.css']
})
export class ListeRendezVousComponent {
  tpatient: Patient[] = []
  patient: Patient = new Patient() 
  title: string = "Liste des Rendez_Vous";

  constructor(private patientsService: PatientService,
    private router: Router) { }
  ngOnInit(): void {
    this.patientsService.get_liste_Rendez_vous().subscribe(data => {
      this.tpatient = data
    })
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

  edit_rendez_vous(id: number) {
    console.log(id);
    this.router.navigate(["edit_rendez_vous", id]);
  }

  
  addsalle(id: number) {
    console.log(id);
    this.router.navigate(["addSalle", id]);
  }

  editimg(id: number) {
    console.log(id);
    this.router.navigate(["editimage", id]);
  }

  
 

}
