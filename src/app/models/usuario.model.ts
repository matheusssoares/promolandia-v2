export interface Usuario {
  key: string;
  name: string;
  email: string;
  password: string;
  createIn: Date;
  updateIn: Date;
  status: boolean;
  photoProfile: string;
}
