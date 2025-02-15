import { Component, OnInit } from '@angular/core';

import { PatientService } from '../Service/patient.service';
import { Router } from '@angular/router';
import { Patient } from '../models/patient';
import { Ordonnance } from '../models/ordonnance';

@Component({
  selector: 'app-liste-consultation',
  templateUrl: './liste-consultation.component.html',
  styleUrls: ['./liste-consultation.component.css']
})
export class ListeConsultationComponent implements OnInit {
  tpatient: Patient[] = []
  tordonnace: Ordonnance[] =[]
  title: string = "Liste de l'historique des visites";
  
  constructor(private patientsService: PatientService,
    private router: Router) { }
  ngOnInit(): void {
    this.patientsService.get_consult().subscribe(data => {
      this.tpatient = data
    });
  }


  delete(id: number) {
    console.log(id)
    let response = confirm("voulez vous vraiment supprimer ce compte ?");
    if (response) {
      this.patientsService.deletePatients(id).subscribe(
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

  regardconsult(id: number) {
    console.log(id);
    this.router.navigate(["regarde", id]);
  }

  regardOrdonnace(id: number) {
    console.log(id);
    this.router.navigate(["regardordonnace", id]);
  }

  regardCertificat(id: number) {
    console.log(id);
    this.router.navigate(["regardcertificat", id]);
  }

  Historique_paiment(id: number) {
    console.log(id);
    this.router.navigate(["historique_paiment", id]);
  }

  editimg(id: number) {
    console.log(id);
    this.router.navigate(["editimage", id]);
  }


}
