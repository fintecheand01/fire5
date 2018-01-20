export class Proveedor {
    id?: string;
    proveedor: string;
    razonSocial: string;
    tipodocumento: string;
    nrodocumento: number;
    departamento: string;
    provincia: string;
    direccion: string;
    telefono: string;
    email: string;
    cuentabancaria: string;
    estado: boolean;
    constructor(s: Proveedor) {
      this.proveedor = s.proveedor;
      this.razonSocial = s.razonSocial;
      this.tipodocumento = s.tipodocumento;
      this.nrodocumento = s.nrodocumento;
      this.departamento = s.departamento;
      this.provincia = s.provincia;
      this.direccion = s.direccion;
      this.telefono = s.telefono;
      this.cuentabancaria = s.cuentabancaria;
      this.email = s.email;
      this.estado = s.estado;
    }
  }
