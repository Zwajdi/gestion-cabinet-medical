import { Component } from '@angular/core';
import { Directeur } from '../models/directeur';
import { PatientService } from '../Service/patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-compte-directeur',
  templateUrl: './create-compte-directeur.component.html',
  styleUrls: ['./create-compte-directeur.component.css']
})
export class CreateCompteDirecteurComponent {
  directeur: Directeur = new Directeur()

  constructor(private patientService: PatientService, private router: Router) { }

  isFormValid(): boolean {
    return !!this.directeur.Nom && !!this.directeur.Prenom && !!this.directeur.MotPasse && !!this.directeur.email;
  }


  async ajouter() {
    if (this.isFormValid()) {
      const hashedPassword = await this.hashPassword(this.directeur.MotPasse);

      this.directeur.MotPasse = hashedPassword;

      this.patientService.ajouter_Directeur(this.directeur).subscribe(
        data => {
          alert('Directeur ajoutée avec succès');
          this.router.navigate(['/liste_directeur']);
        },
        error => {
          alert('Une erreur s\'est produite. La directeur n\'a pas été ajoutée.');
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
