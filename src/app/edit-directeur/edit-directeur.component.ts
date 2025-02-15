import { Component } from '@angular/core';
import { Directeur } from '../models/directeur';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../Service/patient.service';

@Component({
  selector: 'app-edit-directeur',
  templateUrl: './edit-directeur.component.html',
  styleUrls: ['./edit-directeur.component.css']
})
export class EditDirecteurComponent {
  directeur : Directeur = new Directeur()
  
  idrecupere! :number

 constructor(private route:ActivatedRoute,
  private patientService: PatientService,
  private router: Router){}

  ngOnInit(): void {
    this.idrecupere= this.route.snapshot.params['idpat']
    this.patientService.getdirecteurById(this.idrecupere).subscribe(
      data =>{
        this.directeur=data
      }
    )
  }

  update(){
    this.patientService.updateDirecteur(this.idrecupere,this.directeur).subscribe(
      data=>{
        this.router.navigate(["/liste_directeur"])
      },
      error=>console.log(error)
    )
  }


}
