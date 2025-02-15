import { Component, OnInit } from '@angular/core';
import { Secretaire } from '../models/secretaire';
import { PatientService } from '../Service/patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-secretaire',
  templateUrl: './liste-secretaire.component.html',
  styleUrls: ['./liste-secretaire.component.css']
})
export class ListeSecretaireComponent implements OnInit {
  tsecritaire : Secretaire [] = []
  title : string = "Liste des Secrétaire";

  constructor(private patientsService: PatientService,
    private router: Router){}
  ngOnInit(): void {
    this.patientsService.getSecritaire().subscribe(data =>{
      this.tsecritaire=data
    })
  }


  delete(id: number) {
    console.log(id)
    let response = confirm("voulez vous vraiment supprimer ce compte ?");
    if (response) {
      this.patientsService.deleteSecritaire(id).subscribe(
        (data) => {
          console.log(this.tsecritaire);
          this.tsecritaire = this.tsecritaire.filter(element =>
            element.id !== id
          )
          console.log(this.tsecritaire);

        },
        (error) => {
          console.log(error) // pour traiter les erreurs
        }
      )
    }
  }

  edit(id: number) {
    console.log(id);
    this.router.navigate(["edit_secritaire", id]);
  }


}
