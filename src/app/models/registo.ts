export class Registo {
  id: number;
  entidade: string;
  tipo: string;
  codigo: string;
  valor: number;

  constructor(
    id: number,
    entidade: string,
    tipo: string,
    codigo: string,
    valor: number
  ) {
    this.id = id;
    this.entidade = entidade;
    this.tipo = tipo;
    this.codigo = codigo;
    this.valor = valor;
  }
}
