
export class Compra {
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

  constructor(compra: Compra) {
    this.nombres = compra.nombres;
    this.apellidos = compra.apellidos;
    this.correo = compra.correo;
    this.fnac = compra.fnac;
    this.sexo = compra.sexo;
    this.direccion = compra.direccion;
    this.dni = compra.dni;
    this.cargo = compra.cargo;
    this.celular = compra.celular;
    this.estado = compra.estado;
    this.login = compra.login;
    this.clave = compra.clave;
  }
}
