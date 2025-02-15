import { Component } from '@angular/core';
import { Patient } from '../models/patient';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../Service/patient.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-historique-paiment',
  templateUrl: './historique-paiment.component.html',
  styleUrls: ['./historique-paiment.component.css']
})
export class HistoriquePaimentComponent {
  patient: Patient = new Patient();
  tpatient: Patient[] = []
  medications = ['SERUM', 'INJECTION', 'PANSEMENT'];
  idrecupere!: number;



  constructor(
    private route: ActivatedRoute,
    private patientService: PatientService,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.idrecupere = this.route.snapshot.params['idpatient'];
    this.update_paiment_Total();
    this.idrecupere = this.route.snapshot.params['idpatient'];
    this.patientService.get_liste_consull_PatientById(this.idrecupere).subscribe(
      data => {
        this.patient = data;
      }
    );
  }

  update_paiment_Total() {
    this.patientService.get_Paiment_PatientById(this.idrecupere).subscribe(
      (data) => {
        if (data && data.prixTotal !== undefined) {
          this.patient.prixTotal = data.prixTotal;
        }
      },
    );
  }


  isSelected(medication: string): boolean {
    return this.patient.Medicaments && this.patient.Medicaments.includes(medication);
  }

  isFormValid_patient(): boolean {
    return (
      !!this.patient.prixconsult
    );
  }

  update() {
    this.patientService.updatepaiment(this.idrecupere, this.patient).subscribe(
      data => {
        //this.router.navigate(["/liste_historique_paiment"])
        alert('Modification réussie');
      },
      error => console.log(error)
    )
  }




  paiment() {

    this.patient.prixSERUM = this.patient.prixSERUM || 0;
    this.patient.prixINJECTION = this.patient.prixINJECTION || 0;
    this.patient.prixPANSEMENT = this.patient.prixPANSEMENT || 0;

    this.patient.QtSERUM = this.patient.QtSERUM || 0;
    this.patient.QtINJECTION = this.patient.QtINJECTION || 0;
    this.patient.QtPANSEMENT = this.patient.QtPANSEMENT || 0;


    this.patient.prixTotal = Number(
      this.patient.prixconsult + (
        this.patient.prixSERUM * this.patient.QtSERUM +
        this.patient.prixINJECTION * this.patient.QtINJECTION +
        this.patient.prixPANSEMENT * this.patient.QtPANSEMENT
      )
    )
  }


}
