
export class Usuario {
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

  constructor(usuario: Usuario) {
    this.nombres = usuario.nombres;
    this.apellidos = usuario.apellidos;
    this.correo = usuario.correo;
    this.fnac = usuario.fnac;
    this.sexo = usuario.sexo;
    this.direccion = usuario.direccion;
    this.dni = usuario.dni;
    this.cargo = usuario.cargo;
    this.celular = usuario.celular;
    this.estado = usuario.estado;
    this.login = usuario.login;
    this.clave = usuario.clave;
  }
}
