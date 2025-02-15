import { Component } from '@angular/core';
import { Secretaire } from '../models/secretaire';
import { PatientService } from '../Service/patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-compte-secretaire',
  templateUrl: './create-compte-secretaire.component.html',
  styleUrls: ['./create-compte-secretaire.component.css']
})
export class CreateCompteSecretaireComponent {
  secretaire: Secretaire = new Secretaire();

  constructor(private patientService: PatientService, private router: Router) {}

  isFormValid(): boolean {
    return !!this.secretaire.Nom && !!this.secretaire.Prenom && !!this.secretaire.MotPasse && !!this.secretaire.email;
  }

  async ajouter() {
    if (this.isFormValid()) {
      const hashedPassword = await this.hashPassword(this.secretaire.MotPasse);

      this.secretaire.MotPasse = hashedPassword;

      this.patientService.ajouter_Secretaire(this.secretaire).subscribe(
        data => {
          alert('Secrétaire ajoutée avec succès');
          this.router.navigate(['/liste_secretaire']);
        },
        error => {
          alert('Une erreur s\'est produite. La Secrétaire n\'a pas été ajoutée.');
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
