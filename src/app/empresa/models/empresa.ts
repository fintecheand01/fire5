
export class Empresa {
    id?: string;
    nombre: string;
    impuesto: string;
    porcentaje: number;
    simbolo: string;
    logo: string;


  constructor(empresa: Empresa) {
    this.nombre = empresa.nombre;
    this.impuesto = empresa.impuesto;
    this.porcentaje = empresa.porcentaje;
    this.simbolo = empresa.simbolo;
    this.logo = empresa.logo;
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
