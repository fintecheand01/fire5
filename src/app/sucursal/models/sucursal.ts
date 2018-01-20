export class Sucursal {
    id?: string;
    ruc: string;
    razonSocial: string;
    direccion: string;
    email: number;
    createdAt: Date = new Date();
    constructor(s: Sucursal) {
      this.ruc = s.ruc;
      this.razonSocial = s.razonSocial;
      this.direccion = s.direccion;
      this.email = s.email;
    }
  }
