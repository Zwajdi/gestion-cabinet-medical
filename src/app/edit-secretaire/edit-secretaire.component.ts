import { Component } from '@angular/core';
import { Secretaire } from '../models/secretaire';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../Service/patient.service';

@Component({
  selector: 'app-edit-secretaire',
  templateUrl: './edit-secretaire.component.html',
  styleUrls: ['./edit-secretaire.component.css']
})
export class EditSecretaireComponent {
  secretaire : Secretaire = new Secretaire()
  
  idrecupere! :number

 constructor(private route:ActivatedRoute,
  private patientService: PatientService,
  private router: Router){}

  ngOnInit(): void {
    this.idrecupere= this.route.snapshot.params['idpat']
    this.patientService.getSecritaireById(this.idrecupere).subscribe(
      data =>{
        this.secretaire=data
      }
    )
  }

  update(){
    this.patientService.updateSecritaire(this.idrecupere,this.secretaire).subscribe(
      data=>{
        this.router.navigate(["/liste_secretaire"])
      },
      error=>console.log(error)
    )
  }

}
