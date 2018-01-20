
export class Venta {
    id?: string;
    nombres: string;
    apellidos: string;
    fnac: string;
    sexo: boolean;
    direccion: string;
    celular: string;
    correo: string;
    dni: string;
    cargo: string;
    estado: boolean;
    login: string;
    clave: string;

  constructor(venta: Venta) {
    this.nombres = venta.nombres;
    this.apellidos = venta.apellidos;
    this.correo = venta.correo;
    this.fnac = venta.fnac;
    this.sexo = venta.sexo;
    this.direccion = venta.direccion;
    this.dni = venta.dni;
    this.cargo = venta.cargo;
    this.celular = venta.celular;
    this.estado = venta.estado;
    this.login = venta.login;
    this.clave = venta.clave;
  }
}
