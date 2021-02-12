import type { IClients }  from '@sistemas/clientes-interfaces'

export interface IAdresses {
  id: number;
  logradouro: string;
  numero: number | null;
  createdAt: Date;
  updatedAt: Date;
  client: IClients;
}

export class MAdresses implements IAdresses{
  public id: number;
  public logradouro: string;
  public numero: number | null;
  public createdAt: Date;
  public updatedAt: Date;
  public client: IClients;

  constructor (params?: Partial<IAdresses>){
    this.id = params?.id ?? null;
    this.logradouro = params?.logradouro ?? null;
    this.numero = params?.numero ?? null;
    this.createdAt = params?.createdAt ?? null;
    this.updatedAt = params?.updatedAt ?? null;
    this.client = params?.client ?? null;
  }

}
