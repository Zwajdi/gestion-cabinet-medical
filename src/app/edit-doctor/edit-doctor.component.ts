import { Component } from '@angular/core';
import { Doctor } from '../models/doctor';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../Service/patient.service';

@Component({
  selector: 'app-edit-doctor',
  templateUrl: './edit-doctor.component.html',
  styleUrls: ['./edit-doctor.component.css']
})
export class EditDoctorComponent {
  doctor : Doctor = new Doctor()
  
  idrecupere! :number

 constructor(private route:ActivatedRoute,
  private patientService: PatientService,
  private router: Router){}

  ngOnInit(): void {
    this.idrecupere= this.route.snapshot.params['idpat']
    this.patientService.getdoctorById(this.idrecupere).subscribe(
      data =>{
        this.doctor=data
      }
    )
  }

  update(){
    this.patientService.updateDoctor(this.idrecupere,this.doctor).subscribe(
      data=>{
        this.router.navigate(["/liste_doctor"])
      },
      error=>console.log(error)
    )
  }


}
