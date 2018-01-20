
export class Empleado {
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

  constructor(empleado: Empleado) {
    this.nombres = empleado.nombres;
    this.apellidos = empleado.apellidos;
    this.correo = empleado.correo;
    this.fnac = empleado.fnac;
    this.sexo = empleado.sexo;
    this.direccion = empleado.direccion;
    this.dni = empleado.dni;
    this.cargo = empleado.cargo;
    this.celular = empleado.celular;
    this.estado = empleado.estado;
    this.login = empleado.login;
    this.clave = empleado.clave;
  }
}
