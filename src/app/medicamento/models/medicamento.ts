
export class Medicamento {
    id?: string;
    presentacion: string;
    cantidad: number;
    unidadMedida: string;
    restringido: boolean;
    nombre: boolean;
    dolencia: string;
    instruccion: string;
    logo: string;

  constructor(medicamento: Medicamento) {
    this.presentacion = medicamento.presentacion;
    this.cantidad = medicamento.cantidad;
    this.unidadMedida = medicamento.unidadMedida;
    this.restringido = medicamento.restringido;
    this.nombre = medicamento.nombre;
    this.dolencia = medicamento.dolencia;
    this.instruccion = medicamento.instruccion;
    this.logo = medicamento.logo;
  }
}

export class Upload {
  id?: string;
  file: File;
  name: string;
  url: string;
  progress: number;
  createdAt: Date = new Date();

  constructor(file: File) {
    this.file = file;
  }
}
