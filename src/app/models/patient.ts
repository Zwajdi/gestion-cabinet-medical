import { Certificat } from "./certificat"

export class Patient {
    id!: number
    numdossier!: number
    nom!: string
    prenom!: string
    datenaissance!: string
    age!: number
    sexe!: string
    situationFamilial!: string
    profession!: string
    email!: string
    telephone!: number
    adresse!: string
    MotPasse!: string
    antecedents!: string
    note!: string
    datedemande!: string
    datearrive!: string
    heurearrive!: string
    etatmaladie!: string
    numero!: number


    Poids!: number
    Taille!: number
    Temperature!: number
    Frequencecardiaque!: string
    Tensionarterielle!: string
    Frequencerespiratoire!: string
    Symptomes!: string
    plaintes!: string
    Antecedentsmedicaux!: string

    observation!: string
    resulta!: string
    diagnostique!: string





    nomdemalade!: string
    dateordonnace!: string
    OtherMedicaments!: string; 
    Duree!: string
    posologie!: string

    Medicaments: string[] = [];


    
    
    prixconsult!:number
    prixTotal!:number


    prixSERUM!:number
    prixINJECTION!:number
    prixPANSEMENT!:number
   

    Qt!:number

    QtSERUM!:number
    QtINJECTION!:number
    QtPANSEMENT!:number
    


    nomDoctor!:string
    prenomDoctor!:string
    specialite!:string
    dateOrdonnance!:string
    sujet!:string
    nomCabine!:string
    numCabine!:number


    certificat?: Certificat;

   
   
    dateCertificate!:string
    dureeValidite!:number
    sujetcertificat!:string
   

    image = "pat1.png" 
    /* constructor(numdossier: number, nom: string, prenom: string, datenaissance: string, age: number, sexe: string, profession: string, email: string, telephone: number, adresse: string, antecedents: string, note: string, image: string) {
         this.numdossier = numdossier
         this.nom = nom
         this.prenom = prenom
         this.datenaissance = datenaissance
         this.age = age
         this.sexe = sexe
         this.profession = profession
         this.email = email
         this.telephone = telephone
         this.adresse = adresse
         this.antecedents = antecedents
         this.note = note
         this.image = image
     }*/
}

