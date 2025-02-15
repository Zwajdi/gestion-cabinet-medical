import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListePatientsComponent } from './liste-patients/liste-patients.component';
import { FormPatientsComponent } from './form-patients/form-patients.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header_Secretaire/header.component';
import { EditPatientsComponent } from './edit-patients/edit-patients.component';
import { ListeSalleAttenteComponent } from './liste-salle-examen_médical/liste-salle-attente.component';
//import { AddSalleAttenteComponent } from './add-salle-/add-salle-attente.component';
import { EditSalleComponent } from './edit-salle/edit-salle.component';
import { SalleAttentDocteurComponent } from './salle-attent-docteur/salle-attent-docteur.component';
import { FormConsultationComponent } from './add-examen/form-consultation.component';
import { ListeConsultationComponent } from './Historique/liste-consultation.component';
import { AddListeConsultationComponent } from './add-liste-consultation/add-liste-consultation.component';
import { InformationConsultsComponent } from './information-consults/information-consults.component';
import { RegardeInformationConsultationComponent } from './regarde-information-consultation/regarde-information-consultation.component';
import { PaiementComponent } from './paiement/paiement.component';
import { CertificatMedicalComponent } from './certificat-medical/certificat-medical.component';
import { CreateCompteSecretaireComponent } from './create-compte-secretaire/create-compte-secretaire.component';
import { CreateCompteDoctorComponent } from './create-compte-doctor/create-compte-doctor.component';
import { LogInDoctorComponent } from './log-in-doctor/log-in-doctor.component';
import { LogInSecretaireComponent } from './log-in-secretaire/log-in-secretaire.component';
import { PremiareInterfaceComponent } from './premiare-interface/premiare-interface.component';
import { HeaderDoctorComponent } from './header-doctor/header-doctor.component';
import { CreateComptePatientComponent } from './create-compte-patient/create-compte-patient.component';
import { LogInPatientComponent } from './log-in-patient/log-in-patient.component';
import { InterfacePatientComponent } from './interface-patient/interface-patient.component';
import { HeaderPatientComponent } from './header-patient/header-patient.component';
import { ConfirmeConsultationComponent } from './confirme-consultation/confirme-consultation.component';
import { ListePatientOnligneComponent } from './liste-patient-onligne/liste-patient-onligne.component';
import { ReponceDemendeComponent } from './reponce-demende/reponce-demende.component';
import { ListeReponcePatientComponent } from './liste-reponce-patient/liste-reponce-patient.component';
import { ListePaimentComponent } from './liste-paiment/liste-paiment.component';
import { LogInDirecteurComponent } from './log-in-directeur/log-in-directeur.component';
import { InterfaceDirecteurComponent } from './interface-directeur/interface-directeur.component';
import { CreateCompteDirecteurComponent } from './create-compte-directeur/create-compte-directeur.component';
import { HeaderDirecteurComponent } from './header-directeur/header-directeur.component';
import { ListeDoctorComponent } from './liste-doctor/liste-doctor.component';
import { ListeDirecteurComponent } from './liste-directeur/liste-directeur.component';
import { ListeSecretaireComponent } from './liste-secretaire/liste-secretaire.component';
import { EditDoctorComponent } from './edit-doctor/edit-doctor.component';
import { EditSecretaireComponent } from './edit-secretaire/edit-secretaire.component';
import { EditDirecteurComponent } from './edit-directeur/edit-directeur.component';
import { ListeRendezVousComponent } from './liste-rendez-vous_secritaire/liste-rendez-vous.component';
import { FormRendezVousComponent } from './form-rendez-vous/form-rendez-vous.component';
import { SalleAttenteSecretaireComponent } from './salle-attente-secretaire/salle-attente-secretaire.component';
import { EditeSalleAttenteSecretaireComponent } from './edite-salle-attente-secretaire/edite-salle-attente-secretaire.component';
import { HistoriquePaimentComponent } from './historique-paiment/historique-paiment.component';
import { ListeHistoriquePaimentComponent } from './liste-historique-paiment/liste-historique-paiment.component';
import { SalleConsultationComponent } from './salle-consultation/salle-consultation.component';
import { AcceptationSalleConsultationComponent } from './acceptation-salle-consultation/acceptation-salle-consultation.component';
import { InformationPatientComponent } from './information-patient/information-patient.component';
import { OrdonnanceComponent } from './ordonnance/ordonnance.component';
import { RegardeCertificatComponent } from './regarde-certificat/regarde-certificat.component';
import { RegardeOrdonnceComponent } from './regarde-ordonnce/regarde-ordonnce.component';
import { RendezVousDoctorComponent } from './rendez-vous-doctor/rendez-vous-doctor.component';
import { EditRendezVousComponent } from './edit-rendez-vous/edit-rendez-vous.component';
import { AddSalleAttenteComponent } from './add-salle-Examen/add-salle-attente.component';
import { ImageInformationComponent } from './image-information/image-information.component';


@NgModule({
  declarations: [
    AppComponent,
    ListePatientsComponent,
    FormPatientsComponent,
    HeaderComponent,
    EditPatientsComponent,
    ListeSalleAttenteComponent,
    AddSalleAttenteComponent,
    EditSalleComponent,
    SalleAttentDocteurComponent,
    FormConsultationComponent,
    ListeConsultationComponent,
    AddListeConsultationComponent,
    InformationConsultsComponent,
    RegardeInformationConsultationComponent,
    PaiementComponent,
    CertificatMedicalComponent,
    CreateCompteSecretaireComponent,
    CreateCompteDoctorComponent,
    LogInDoctorComponent,
    LogInSecretaireComponent,
    PremiareInterfaceComponent,
    HeaderDoctorComponent,
    CreateComptePatientComponent,
    LogInPatientComponent,
    InterfacePatientComponent,
    HeaderPatientComponent,
    ConfirmeConsultationComponent,
    ListePatientOnligneComponent,
    ReponceDemendeComponent,
    ListeReponcePatientComponent,
    ListePaimentComponent,
    LogInDirecteurComponent,
    InterfaceDirecteurComponent,
    CreateCompteDirecteurComponent,
    HeaderDirecteurComponent,
    ListeDoctorComponent,
    ListeDirecteurComponent,
    ListeSecretaireComponent,
    EditDoctorComponent,
    EditSecretaireComponent,
    EditDirecteurComponent,
    ListeRendezVousComponent,
    FormRendezVousComponent,
    SalleAttenteSecretaireComponent,
    EditeSalleAttenteSecretaireComponent,
    HistoriquePaimentComponent,
    ListeHistoriquePaimentComponent,
    SalleConsultationComponent,
    AcceptationSalleConsultationComponent,
    InformationPatientComponent,
    OrdonnanceComponent,
    RegardeCertificatComponent,
    RegardeOrdonnceComponent,
    RendezVousDoctorComponent,
    EditRendezVousComponent,
    ImageInformationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
