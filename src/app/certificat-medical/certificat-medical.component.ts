import { Component } from '@angular/core';
import { Patient } from '../models/patient';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../Service/patient.service';
import { Certificat } from '../models/certificat';

@Component({
  selector: 'app-certificat-medical',
  templateUrl: './certificat-medical.component.html',
  styleUrls: ['./certificat-medical.component.css']
})
export class CertificatMedicalComponent {
  patient: Patient = new Patient()

  //certificat: Certificat = new Certificat()
  idrecupere!: number

  constructor(private route: ActivatedRoute,
    private patientService: PatientService,
    private router: Router) { }

  ngOnInit(): void {
    this.idrecupere = this.route.snapshot.params['idpatient']
    this.patientService.get_liste_consul_PatientById(this.idrecupere).subscribe(
      data => {
        this.patient = data
      }
    )
  }

  isFormValid_Certificat(): boolean {
    return !!this.patient.nomDoctor && !!this.patient.prenomDoctor && !!this.patient.dateCertificate && !!this.patient.nomCabine && !!this.patient.numCabine && !!this.patient.nom && !!this.patient.prenom && !!this.patient.datenaissance && !!this.patient.sujetcertificat;
  }


  ajouter_Certificat() {
    if (this.isFormValid_Certificat()) {
      this.patientService.ajouter_Certificat(this.patient).subscribe(
        data => {
          alert('Certificat ajouté avec succès!');
          this.router.navigate(['/salle_consultation']);
        },
        error => {
          alert('Une erreur s\'est produite. Le certificat n\'a pas été ajouté.');
        }
      );
    } else {
      alert('Veuillez saisir les informations nécessaires !!');
    }
  }

}


