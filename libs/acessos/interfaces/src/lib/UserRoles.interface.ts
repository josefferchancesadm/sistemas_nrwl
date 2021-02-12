import type { IRoles, IUsers } from '@sistemas/acessos-interfaces';

export interface IUserRoles {

  createdAt: Date;
  updatedAt: Date;
  roleId: number;
  userId: number;
  role: IRoles;
  user: IUsers;

}
export class MUserRoles implements IUserRoles {

  public createdAt: Date;
  public updatedAt: Date;
  public roleId: number;
  public userId: number;
  public role: IRoles;
  public user: IUsers;

  constructor (params?: Partial<IUserRoles>){

    this.createdAt = params?.createdAt ?? null;
    this.updatedAt = params?.updatedAt ?? null;
    this.roleId = params?.roleId ?? null;
    this.userId = params?.userId ?? null;
    this.role = params?.role ?? null;
    this.user = params?.user ?? null;

  }

}
