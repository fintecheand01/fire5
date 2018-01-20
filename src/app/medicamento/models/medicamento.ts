
export class Medicamento {
    id?: string;
    presentacion: string;
    unidadMedida: string;
    restringido: boolean;
    nombre: boolean;
    dolencia: string;
    instruccion: string;
    imagen: string;
    url: string;
  constructor(medicamento: Medicamento) {
    this.presentacion = medicamento.presentacion;
    this.unidadMedida = medicamento.unidadMedida;
    this.restringido = medicamento.restringido;
    this.nombre = medicamento.nombre;
    this.dolencia = medicamento.dolencia;
    this.instruccion = medicamento.instruccion;
    this.imagen = medicamento.imagen;
    this.url = medicamento.url;
  }
}
