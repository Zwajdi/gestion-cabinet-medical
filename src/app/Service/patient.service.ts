import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Patient } from '../models/patient';
import { Certificat } from '../models/certificat';
import { Secretaire } from '../models/secretaire';
import { Doctor } from '../models/doctor';
import { map } from 'rxjs/operators';
import { Directeur } from '../models/directeur';
import { switchMap } from 'rxjs/operators';
import { Ordonnance } from '../models/ordonnance';
import { catchError, tap } from 'rxjs/operators';
import { Observer } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class PatientService {
  url = 'http://localhost:3000/patient';
  url2 = 'http://localhost:3000/salle_Examen_Patient';
  url3 = 'http://localhost:3000/liste_salle_doctor';
  url4 = 'http://localhost:3000/Liste_consult';
  url5 = 'http://localhost:3000/liste_paiement';
  url6 = 'http://localhost:3000/liste_Certificat';
  url7 = 'http://localhost:3000/liste_Doctor';
  url8 = 'http://localhost:3000/liste_Secretaire';
  url9 = 'http://localhost:3000/liste_Patient';
  url10 = 'http://localhost:3000/liste_Consultation_Onligne';
  url11 = 'http://localhost:3000/Reponce_Demende';
  url12 = 'http://localhost:3000/Patient_paye';
  url13 = 'http://localhost:3000/liste_Directeur';
  url14 = 'http://localhost:3000/liste_rendez_vous';
  url15 = 'http://localhost:3000/liste_Patient_en_salle_consultation';
  url16 = 'http://localhost:3000/examen_medical';
  url17 = 'http://localhost:3000/liste_Ordonnace';

  constructor(private http: HttpClient) { }

  verifyLogin_Secretaire(email: string, motPasse: string): Observable<boolean> {
    return this.http.get<Secretaire[]>(this.url8).pipe(
      switchMap(async (secretaires: Secretaire[] = []) => {
        const isValid = await Promise.all(secretaires.map(async (secretaire) => {
          const hashedPassword = await this.hashPassword(motPasse);
          return secretaire.email === email && secretaire.MotPasse === hashedPassword;
        }));

        return isValid.some(result => result);
      })
    );
  }



  private async hashPassword(password: string): Promise<string> {
    const buffer = new TextEncoder().encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', buffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map((byte) => byte.toString(16).padStart(2, '0')).join('');
  }


  verifyLogin_Doctor(email: string, motPasse: string): Observable<boolean> {
    return this.http.get<Doctor[]>(this.url7).pipe(
      switchMap(async (doctor: Doctor[] = []) => {
        const isValid = await Promise.all(doctor.map(async (doctor) => {
          const hashedPassword = await this.hashPasswords(motPasse);
          return doctor.email === email && doctor.MotPasse === hashedPassword;
        }));

        return isValid.some(result => result);
      })
    );
  }



  private async hashPasswords(password: string): Promise<string> {
    const buffer = new TextEncoder().encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', buffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map((byte) => byte.toString(16).padStart(2, '0')).join('');
  }


  verifyLogin_Directeur(email: string, motPasse: string): Observable<boolean> {
    return this.http.get<Directeur[]>(this.url13).pipe(
      switchMap(async (directeur: Directeur[] = []) => {
        const isValid = await Promise.all(directeur.map(async (directeur) => {
          const hashedPassword = await this.hashPasswordss(motPasse);
          return directeur.email === email && directeur.MotPasse === hashedPassword;
        }));

        return isValid.some(result => result);
      })
    );
  }



  private async hashPasswordss(password: string): Promise<string> {
    const buffer = new TextEncoder().encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', buffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map((byte) => byte.toString(16).padStart(2, '0')).join('');
  }


  verifyLogin_Patient(email: string, motPasse: string): Observable<boolean> {
    return this.http.get<any[]>(this.url9 || this.url).pipe(
      map((patient: Patient[] = []) => {
        return patient.some(patient =>
          patient.email === email &&
          patient.MotPasse === motPasse);
      })
    );
  }




  getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.url)
  }

  getDoctor(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(this.url7)
  }

  getSecritaire(): Observable<Secretaire[]> {
    return this.http.get<Secretaire[]>(this.url8)
  }

  getDirecteur(): Observable<Directeur[]> {
    return this.http.get<Directeur[]>(this.url13)
  }



  get_salle_attente(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.url2)
  }

  get_liste_Rendez_vous(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.url14)
  }

  get_salle_doctor(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.url3)
  }

  get_salle_consultation(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.url15)
  }

  get_consult(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.url4)
  }

  get_Ordonnace(): Observable<Ordonnance[]> {
    return this.http.get<Ordonnance[]>(this.url17)
  }


  get_Paiment(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.url5)
  }

  get_Patients_Onligne(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.url10)
  }

  get_reponce(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.url11)
  }

  get_paye(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.url12)
  }




  ajouterPatients(patient: Patient): Observable<object> {
    return this.http.post(this.url, patient)
  }

  ajouter_Rendez_vous(patient: Patient): Observable<object> {
    return this.http.post(this.url14, patient)
  }

  ajouter_salle_attente(patient: Patient): Observable<object> {
    return this.http.post(this.url2, patient)
  }



  ajouter_salle_doctor(patient: Patient): Observable<object> {
    return this.http.post(this.url3, patient)
  }

  ajouter_examen_medical(patient: Patient): Observable<object> {
    return this.http.post(this.url16, patient)
  }

  ajouter_consult(patient: Patient): Observable<object> {
    return this.http.post(this.url4, patient)
  }

  ajouter_salle_consult(patient: Patient): Observable<object> {
    return this.http.post(this.url15, patient)
  }

  ajouter_Paiment(patient: Patient): Observable<object> {
    return this.http.post(this.url5, patient)
  }

  ajouter_Certificat(patient: Patient): Observable<object> {
    return this.http.post(this.url6, patient);
  }

  ajouter_Ordonnace(patient: Patient): Observable<object> {
    return this.http.post(this.url17, patient)
  }


  ajouter_Secretaire(Secretaire: Secretaire): Observable<object> {
    return this.http.post(this.url8, Secretaire)
  }

  ajouter_Doctor(docteur: Doctor): Observable<object> {
    return this.http.post(this.url7, docteur)
  }


  ajouter_Directeur(directeur: Directeur): Observable<object> {
    return this.http.post(this.url13, directeur)
  }

  ajouter_Patient(patient: Patient): Observable<object> {
    return this.http.post(this.url9, patient)
  }

  ajouterPatientEnLigne(patient: Patient): Observable<object> {
    return this.http.post(this.url10, patient)
  }

  ajouter_reponce(patient: Patient): Observable<object> {
    return this.http.post(this.url11, patient)
  }

  ajouter_Ptient_paye(patient: Patient): Observable<object> {
    return this.http.post(this.url12, patient)
  }





  deletePatients(id: number): Observable<object> {
    return this.http.delete(`${this.url}/${id}`);
  }

  deleteDoctor(id: number): Observable<object> {
    return this.http.delete(`${this.url7}/${id}`);
  }

  deleteDirecteur(id: number): Observable<object> {
    return this.http.delete(`${this.url13}/${id}`);
  }

  deleteSecritaire(id: number): Observable<object> {
    return this.http.delete(`${this.url8}/${id}`);
  }


  deletedemende(id: number): Observable<object> {
    return this.http.delete(`${this.url10}/${id}`);
  }

  deletePatients_salle_attente(id: number): Observable<object> {
    return this.http.delete(`${this.url2}/${id}`);
  }

  delete_Rendez_vous(id: number): Observable<object> {
    return this.http.delete(`${this.url14}/${id}`);
  }

  delete_liste_Paiment(id: number): Observable<object> {
    return this.http.delete(`${this.url5}/${id}`);
  }



  deletePatients_salle_doctor(id: number): Observable<object> {
    return this.http.delete(`${this.url3}/${id}`);
  }

  deletePatients_salle_consultation(id: number): Observable<object> {
    return this.http.delete(`${this.url15}/${id}`);
  }



  getPatientById(id: number): Observable<Patient> {
    return this.http.get<Patient>(`${this.url}/${id}`)
  }

  get_ordonnace_PatientById(id: number): Observable<Patient> {
    return this.http.get<Patient>(`${this.url17}/${id}`);
  }

  get_Certificat_PatientById(id: number): Observable<Patient> {
    return this.http.get<Patient>(`${this.url6}/${id}`);
  }


  get_Rendez_vous_ById(id: number): Observable<Patient> {
    return this.http.get<Patient>(`${this.url14}/${id}`)
  }

  getdoctorById(id: number): Observable<Doctor> {
    return this.http.get<Doctor>(`${this.url7}/${id}`)
  }

  getdirecteurById(id: number): Observable<Directeur> {
    return this.http.get<Directeur>(`${this.url13}/${id}`)
  }

  getSecritaireById(id: number): Observable<Secretaire> {
    return this.http.get<Secretaire>(`${this.url8}/${id}`)
  }


  getdemendeById(id: number): Observable<Patient> {
    return this.http.get<Patient>(`${this.url10}/${id}`)
  }

  get_salle_PatientById(id: number): Observable<Patient> {
    return this.http.get<Patient>(`${this.url2}/${id}`)
  }

  get_salle_doctor_PatientById(id: number): Observable<Patient> {
    return this.http.get<Patient>(`${this.url3}/${id}`)
  }

  get_examen_PatientById(id: number): Observable<Patient> {
    return this.http.get<Patient>(`${this.url15}/${id}`)
  }

  get_liste_consul_PatientById(id: number): Observable<Patient> {
    return this.http.get<Patient>(`${this.url4}/${id}`)
  }

  get_liste_consull_PatientById(id: number): Observable<Patient> {
    return this.http.get<Patient>(`${this.url12}/${id}`)
  }




  get_Paiment_PatientById(id: number): Observable<Patient> {
    return this.http.get<Patient>(`${this.url5}/${id}`)
  }

  get_information_PatientById(id: number): Observable<Patient> {
    return this.http.get<Patient>(`${this.url15}/${id}`)
  }






  updatepatient(id: number, patient: Patient): Observable<Object> {
    return this.http.put(`${this.url}/${id}`, patient)
  }

  updatepaiment(id: number, patient: Patient): Observable<Object> {
    return this.http.put(`${this.url12}/${id}`, patient)
  }

  updateDoctor(id: number, doctor: Doctor): Observable<Object> {
    return this.http.put(`${this.url7}/${id}`, doctor)
  }

  updateDirecteur(id: number, directeur: Directeur): Observable<Object> {
    return this.http.put(`${this.url13}/${id}`, directeur)
  }

  updateSecritaire(id: number, secritaire: Secretaire): Observable<Object> {
    return this.http.put(`${this.url8}/${id}`, secritaire)
  }

  update_salle(id: number, patient: Patient): Observable<Object> {
    return this.http.put(`${this.url2}/${id}`, patient)
  }

  update_Rendez_vous(id: number, patient: Patient): Observable<Object> {
    return this.http.put(`${this.url14}/${id}`, patient)
  }

  update_salle_attente_secretaire(id: number, patient: Patient): Observable<Object> {
    return this.http.put(`${this.url3}/${id}`, patient)
  }


}
