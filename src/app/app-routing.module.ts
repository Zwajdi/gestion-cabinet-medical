import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormPatientsComponent } from './form-patients/form-patients.component';
import { ListePatientsComponent } from './liste-patients/liste-patients.component';
import { EditPatientsComponent } from './edit-patients/edit-patients.component';
import { ListeSalleAttenteComponent } from './liste-salle-examen_médical/liste-salle-attente.component';
//import { AddSalleAttenteComponent } from './add-salle-attente/add-salle-attente.component';
import { EditSalleComponent } from './edit-salle/edit-salle.component';
import { SalleAttentDocteurComponent } from './salle-attent-docteur/salle-attent-docteur.component';
import { ListeConsultationComponent } from './Historique/liste-consultation.component';
import { FormConsultationComponent } from './add-examen/form-consultation.component';
import { InformationConsultsComponent } from './information-consults/information-consults.component';
import { RegardeInformationConsultationComponent } from './regarde-information-consultation/regarde-information-consultation.component';
import { PaiementComponent } from './paiement/paiement.component';
import { CertificatMedicalComponent } from './certificat-medical/certificat-medical.component';
import { CreateCompteSecretaireComponent } from './create-compte-secretaire/create-compte-secretaire.component';
import { CreateCompteDoctorComponent } from './create-compte-doctor/create-compte-doctor.component';
import { LogInSecretaireComponent } from './log-in-secretaire/log-in-secretaire.component';
import { PremiareInterfaceComponent } from './premiare-interface/premiare-interface.component';
import { LogInDoctorComponent } from './log-in-doctor/log-in-doctor.component';
import { LogInPatientComponent } from './log-in-patient/log-in-patient.component';
import { CreateComptePatientComponent } from './create-compte-patient/create-compte-patient.component';
import { InterfacePatientComponent } from './interface-patient/interface-patient.component';
import { ConfirmeConsultationComponent } from './confirme-consultation/confirme-consultation.component';
import { ListePatientOnligneComponent } from './liste-patient-onligne/liste-patient-onligne.component';
import { ReponceDemendeComponent } from './reponce-demende/reponce-demende.component';
import { ListeReponcePatientComponent } from './liste-reponce-patient/liste-reponce-patient.component';
import { ListePaimentComponent } from './liste-paiment/liste-paiment.component';
import { InterfaceDirecteurComponent } from './interface-directeur/interface-directeur.component';
import { LogInDirecteurComponent } from './log-in-directeur/log-in-directeur.component';
import { CreateCompteDirecteurComponent } from './create-compte-directeur/create-compte-directeur.component';
import { ListeSecretaireComponent } from './liste-secretaire/liste-secretaire.component';
import { ListeDoctorComponent } from './liste-doctor/liste-doctor.component';
import { ListeDirecteurComponent } from './liste-directeur/liste-directeur.component';
import { EditDoctorComponent } from './edit-doctor/edit-doctor.component';
import { EditSecretaireComponent } from './edit-secretaire/edit-secretaire.component';
import { EditDirecteurComponent } from './edit-directeur/edit-directeur.component';
import { FormRendezVousComponent } from './form-rendez-vous/form-rendez-vous.component';
import { ListeRendezVousComponent } from './liste-rendez-vous_secritaire/liste-rendez-vous.component';
import { SalleAttenteSecretaireComponent } from './salle-attente-secretaire/salle-attente-secretaire.component';
import { EditeSalleAttenteSecretaireComponent } from './edite-salle-attente-secretaire/edite-salle-attente-secretaire.component';
import { ListeHistoriquePaimentComponent } from './liste-historique-paiment/liste-historique-paiment.component';
import { HistoriquePaimentComponent } from './historique-paiment/historique-paiment.component';
import { SalleConsultationComponent } from './salle-consultation/salle-consultation.component';
import { AcceptationSalleConsultationComponent } from './acceptation-salle-consultation/acceptation-salle-consultation.component';
import { InformationPatientComponent } from './information-patient/information-patient.component';
import { OrdonnanceComponent } from './ordonnance/ordonnance.component';
import { RegardeOrdonnceComponent } from './regarde-ordonnce/regarde-ordonnce.component';
import { RegardeCertificatComponent } from './regarde-certificat/regarde-certificat.component';
import { RendezVousDoctorComponent } from './rendez-vous-doctor/rendez-vous-doctor.component';
import { EditRendezVousComponent } from './edit-rendez-vous/edit-rendez-vous.component';
import { AddSalleAttenteComponent } from './add-salle-Examen/add-salle-attente.component';
import { ImageInformationComponent } from './image-information/image-information.component';


const routes: Routes = [
  { path: "form", component: FormPatientsComponent },
  { path: "form_Rendez_vous/:idpat", component: FormRendezVousComponent },
  { path: "form_Rendez", component: FormRendezVousComponent },
  { path: "liste_rendez_vous", component: ListeRendezVousComponent },
  { path: "liste_rendez_vous_doctor", component: RendezVousDoctorComponent },
  { path: "Directeur", component: InterfaceDirecteurComponent },
  { path: "premaire", component: PremiareInterfaceComponent },
  { path: "Interface_Patient", component: InterfacePatientComponent },
  { path: "liste_patient_onligne", component: ListePatientOnligneComponent },
  { path: "Conferme_Consultation", component: ConfirmeConsultationComponent },
  { path: "login_secretaire", component: LogInSecretaireComponent },
  { path: "login_Doctor", component: LogInDoctorComponent },
  { path: "login_Directeur", component: LogInDirecteurComponent },
  { path: "login_Patient", component: LogInPatientComponent },
  { path: "create_Doctor", component: CreateCompteDoctorComponent },
  { path: "create_Patient", component: CreateComptePatientComponent },
  { path: "create_secretaire", component: CreateCompteSecretaireComponent },
  { path: "create_Directeur", component: CreateCompteDirecteurComponent },
  { path: "regarde/:idpatient", component: RegardeInformationConsultationComponent },
  { path: "certificat/:idpatient", component: CertificatMedicalComponent },
  { path: "ordonnace/:idpatient", component: OrdonnanceComponent },
  { path: "regardordonnace/:idpatient", component: RegardeOrdonnceComponent },
  { path: "regardcertificat/:idpatient", component: RegardeCertificatComponent },
  { path: "paiment/:idpatient", component: PaiementComponent },
  { path: "information/:idpatient", component: InformationConsultsComponent },
  { path: "liste", component: ListePatientsComponent },
  { path: "salle", component: ListeSalleAttenteComponent },
  { path: "salle_attente_secretaire", component: SalleAttenteSecretaireComponent },
  { path: "liste_Paiment", component: ListePaimentComponent },
  { path: "liste_directeur", component: ListeDirecteurComponent },
  { path: "liste_doctor", component: ListeDoctorComponent },
  { path: "liste_secretaire", component: ListeSecretaireComponent },
  { path: "reponce_demende", component: ListeReponcePatientComponent },
  { path: "salle_docteur", component: SalleAttentDocteurComponent },
  { path: "salle_consultation", component: SalleConsultationComponent },
  { path: "listeconsults", component: ListeConsultationComponent },
  { path: "formconsult/:idpatient", component: FormConsultationComponent },
  { path: 'edit/:idpat', component: EditPatientsComponent },
  { path: 'editimage/:idpat', component: ImageInformationComponent },
  { path: 'edit_salle_attente_secretaire/:idpatient', component: EditeSalleAttenteSecretaireComponent },
  { path: 'edit_doctor/:idpat', component: EditDoctorComponent },
  { path: 'edit_secritaire/:idpat', component: EditSecretaireComponent },
  { path: 'edit_directeur/:idpat', component: EditDirecteurComponent },
  { path: 'editsalle/:idpatient', component: EditSalleComponent },
  { path: 'edit_rendez_vous/:idpatient', component: EditRendezVousComponent },
  { path: 'Acceptation_salle_consultation/:idpatient', component: AcceptationSalleConsultationComponent },
  { path: 'information_patient/:idpatient', component: InformationPatientComponent },
  { path: 'addSalle/:idpatient', component: AddSalleAttenteComponent },
  { path: 'reponce/:idpatient', component: ReponceDemendeComponent },
  { path: 'liste_historique_paiment', component: ListeHistoriquePaimentComponent },
  { path: 'historique_paiment/:idpatient', component: HistoriquePaimentComponent },
  { path: "", component: PremiareInterfaceComponent },
  { path: "*", component: PremiareInterfaceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
