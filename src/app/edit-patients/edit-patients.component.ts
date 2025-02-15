import { Component } from '@angular/core';
import { Patient } from '../models/patient';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../Service/patient.service';

@Component({
  selector: 'app-edit-patients',
  templateUrl: './edit-patients.component.html',
  styleUrls: ['./edit-patients.component.css']
})
export class EditPatientsComponent {
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
        this.router.navigate(["/liste"])
      },
      error=>console.log(error)
    )
  }

}
