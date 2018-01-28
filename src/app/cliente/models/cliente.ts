
export class Cliente {
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

  constructor(cliente: Cliente) {
    this.nombres = cliente.nombres;
    this.apellidos = cliente.apellidos;
    this.correo = cliente.correo;
    this.fnac = cliente.fnac;
    this.sexo = cliente.sexo;
    this.direccion = cliente.direccion;
    this.dni = cliente.dni;
    this.cargo = cliente.cargo;
    this.celular = cliente.celular;
    this.estado = cliente.estado;
    this.login = cliente.login;
    this.clave = cliente.clave;
  }
}
