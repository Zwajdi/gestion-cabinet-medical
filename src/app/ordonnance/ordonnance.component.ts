import { Component } from '@angular/core';
import { Ordonnance } from '../models/ordonnance';
import { Patient } from '../models/patient';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../Service/patient.service';
import { Doctor } from '../models/doctor';

@Component({
  selector: 'app-ordonnance',
  templateUrl: './ordonnance.component.html',
  styleUrls: ['./ordonnance.component.css']
})
export class OrdonnanceComponent {
  patient: Patient = new Patient()
  doctor: Doctor = new Doctor ()
 
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
    );
   
  }

  isFormValid_Certificat(): boolean {
    return !!this.patient.nomDoctor && !!this.patient.prenomDoctor && !!this.patient.dateOrdonnance && !!this.patient.nomCabine && !!this.patient.numCabine;
  }


  ajouter_Ordonnace() {
    if (this.isFormValid_Certificat()) {
      this.patientService.ajouter_Ordonnace(this.patient).subscribe(
        data => {
          //console.log(data);
          alert('Certificat ajoutée avec succès!');
          this.router.navigate(["/salle_consultation"])
        },
        error => {
          //console.error('Erreur lors de l\'ajout de l\'actualité:', error);
          alert('Une erreur le Certificat n est pas ajouter .');
        }
      );
    } else {
      alert('Veuillez saisir les informations nécessaires !!');
      //console.error('Veuillez saisir toutes les informations nécessaires.');
    }
  }


}
