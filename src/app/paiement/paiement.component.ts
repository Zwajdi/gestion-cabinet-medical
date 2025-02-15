import { Component, Input } from '@angular/core';
import { Patient } from '../models/patient';
import { PatientService } from '../Service/patient.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.css']
})
export class PaiementComponent {
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
    this.patientService.get_Paiment_PatientById(this.idrecupere).subscribe(
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


  ajouter_paiment() {
    if (this.isFormValid_patient()) {
      this.patientService.ajouter_Ptient_paye(this.patient).subscribe(
        (data) => {
          alert('Patient payé');
          this.router.navigate(["/liste_Paiment"])
        },
        (error) => {
          alert('Une erreur!!');
        }
      );
    } else {
      alert('Veuillez saisir le Prix de Consultation !!');
    }
  }




  paiment() {

    this.patient.prixSERUM = this.patient.prixSERUM || 0;
    this.patient.prixINJECTION = this.patient.prixINJECTION || 0;
    this.patient.prixPANSEMENT = this.patient.prixPANSEMENT || 0;
   
    this.patient.QtSERUM = this.patient.QtSERUM || 0;
    this.patient.QtINJECTION = this.patient.QtINJECTION|| 0;
    this.patient.QtPANSEMENT = this.patient.QtPANSEMENT || 0;
    

    this.patient.prixTotal = Number(
      this.patient.prixconsult + (
        this.patient.prixSERUM * this.patient.QtSERUM+
        this.patient.prixINJECTION* this.patient.QtINJECTION +
        this.patient.prixPANSEMENT * this.patient.QtPANSEMENT 
     )
    )
  }


  resue(id: number) {

    this.patientService.delete_liste_Paiment(id).subscribe(
      (data) => {
        // Update the list or perform other actions upon deletion
      },

    );
  }
}


