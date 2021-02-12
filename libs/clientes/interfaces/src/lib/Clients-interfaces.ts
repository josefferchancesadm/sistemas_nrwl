export interface IClients {
  id: number;
  nome: string;
  dtnascimento: Date;
  foto: Buffer | null;
  civil: number;
  createdAt: Date;
  updatedAt: Date;
}

export class MClients implements IClients{
  public id: number;
  public nome: string;
  public dtnascimento: Date;
  public foto: Buffer | null;
  public civil: number;
  public createdAt: Date;
  public updatedAt: Date;

  constructor (params?: Partial<IClients>){
    this.id = params?.id ?? null;
    this.nome = params?.nome ?? null;
    this.dtnascimento = params?.dtnascimento ?? null;
    this.foto = params?.foto ?? null;
    this.civil = params?.civil ?? null;
    this.createdAt = params?.createdAt ?? null;
    this.updatedAt = params?.updatedAt ?? null;
  }
}
