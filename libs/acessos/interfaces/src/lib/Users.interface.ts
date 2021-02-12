import { LocalDateTime } from '@js-joda/core';
import { prop } from '@rxweb/reactive-form-validators';

export interface IUsers {
  id?: number;
  username?: string | null;
  email?: string | null;
  password?: string | null;
  createdAt: LocalDateTime;
  updatedAt: LocalDateTime;
}

export class MUsers implements IUsers {
  @prop()
  public id?: number;
  @prop()
  public username?: string | null;
  @prop()
  public email?: string | null;
  @prop()
  public password?: string | null;
  @prop()
  public createdAt: LocalDateTime;
  @prop()
  public updatedAt: LocalDateTime;

  constructor(params?: Partial<IUsers>) {
    this.id = params?.id ?? null;
    this.username = params?.username ?? null;
    this.email = params?.email ?? null;
    this.password = params?.password ?? null;
    this.createdAt = params?.createdAt ?? LocalDateTime.now();
    this.updatedAt = params?.updatedAt ?? LocalDateTime.now();
  }
}
