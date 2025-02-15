import { Component, OnInit } from '@angular/core';
import { Directeur } from '../models/directeur';
import { PatientService } from '../Service/patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-directeur',
  templateUrl: './liste-directeur.component.html',
  styleUrls: ['./liste-directeur.component.css']
})
export class ListeDirecteurComponent implements OnInit {
  tdirecteur : Directeur [] = []
  title : string = "Liste des Directeur";

  constructor(private patientsService: PatientService,
    private router: Router){}
  ngOnInit(): void {
    this.patientsService.getDirecteur().subscribe(data =>{
      this.tdirecteur=data
    })
  }


  delete(id: number) {
    console.log(id)
    let response = confirm("voulez vous vraiment supprimer ce compte ?");
    if (response) {
      this.patientsService.deleteDirecteur(id).subscribe(
        (data) => {
          console.log(this.tdirecteur);
          this.tdirecteur = this.tdirecteur.filter(element =>
            element.id !== id
          )
          console.log(this.tdirecteur);

        },
        (error) => {
          console.log(error) // pour traiter les erreurs
        }
      )
    }
  }

  edit(id: number) {
    console.log(id);
    this.router.navigate(["edit_directeur", id]);
  }


}

