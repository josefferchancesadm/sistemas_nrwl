export interface IRoles {
  id: number;
  name: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export class MRoles implements IRoles {
  public id: number;
  public name: string | null;
  public createdAt: Date;
  public updatedAt: Date;

  constructor (params?: Partial<IRoles>){

    this.id = params?.id ?? null;
    this.name = params?.name ?? null;
    this.createdAt = params?.createdAt ?? null;
    this.updatedAt = params?.updatedAt ?? null;

  }


}
