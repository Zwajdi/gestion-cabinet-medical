import { Component } from '@angular/core';
import { Doctor } from '../models/doctor';
import { Router } from '@angular/router';
import { PatientService } from '../Service/patient.service';

@Component({
  selector: 'app-create-compte-doctor',
  templateUrl: './create-compte-doctor.component.html',
  styleUrls: ['./create-compte-doctor.component.css']
})
export class CreateCompteDoctorComponent {
  doctor: Doctor = new Doctor()

  constructor(private patientService: PatientService, private router: Router) { }

  isFormValid(): boolean {
    return !!this.doctor.Nom && !!this.doctor.Prenom && !!this.doctor.MotPasse && !!this.doctor.email;
  }


  async ajouter() {
    if (this.isFormValid()) {
      const hashedPassword = await this.hashPassword(this.doctor.MotPasse);

      this.doctor.MotPasse = hashedPassword;

      this.patientService.ajouter_Doctor(this.doctor).subscribe(
        data => {
          alert('Doctor ajoutée avec succès');
          this.router.navigate(['/liste_doctor']);
        },
        error => {
          alert('Une erreur s\'est produite. Doctor n\'a pas été ajoutée.');
        }
      );
    } else {
      alert('Veuillez saisir les informations nécessaires !!');
    }
  }

  async hashPassword(password: string): Promise<string> {
    const buffer = new TextEncoder().encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', buffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
    return hashHex;
  }

}
