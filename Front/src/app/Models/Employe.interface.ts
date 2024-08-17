export interface Employe {
  _id?: string;  // MongoDB generates this field
  id?: number;
  login: string;
  nom: string;
  pw: string;
  tel: string;
  email: string;
  image?: string;
  department: string;  // Assuming the department field is a string of the department ID
  solde?: number;
}
