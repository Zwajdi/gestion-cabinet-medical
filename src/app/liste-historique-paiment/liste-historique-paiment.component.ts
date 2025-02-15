import { Component } from '@angular/core';
import { Patient } from '../models/patient';
import { PatientService } from '../Service/patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-historique-paiment',
  templateUrl: './liste-historique-paiment.component.html',
  styleUrls: ['./liste-historique-paiment.component.css']
})
export class ListeHistoriquePaimentComponent {

  tpatient: Patient[] = []
  title: string = "Historique de paiement";

  constructor(private patientsService: PatientService,
    private router: Router) { }
  ngOnInit(): void {
    this.patientsService.get_paye().subscribe(data => {
      this.tpatient = data
    })
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
