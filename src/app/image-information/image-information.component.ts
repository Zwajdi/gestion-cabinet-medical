import { Component } from '@angular/core';
import { Patient } from '../models/patient';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../Service/patient.service';

@Component({
  selector: 'app-image-information',
  templateUrl: './image-information.component.html',
  styleUrls: ['./image-information.component.css']
})
export class ImageInformationComponent {
  patient : Patient = new Patient()
  
  idrecupere! :number

 constructor(private route:ActivatedRoute,
  private patientService: PatientService,
  private router: Router){}

  ngOnInit(): void {
    this.idrecupere= this.route.snapshot.params['idpat']
    this.patientService.getPatientById(this.idrecupere).subscribe(
      data =>{
        this.patient=data
      }
    )
  }

  update(){
    this.patientService.updatepatient(this.idrecupere,this.patient).subscribe(
      data=>{
        alert("Vous etre acssepté pour l'image !✅")
      },
      error=>console.log(error)
    )
  }

}
