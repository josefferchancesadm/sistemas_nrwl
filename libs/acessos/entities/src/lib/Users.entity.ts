
import {
  Column,
  Entity,
  Index,
  PrimaryGeneratedColumn,
} from "typeorm";

import { LocalDateTime } from '@js-joda/core';

import type { IUsers } from '@sistemas/acessos-interfaces';

@Index("PK__users__3213E83FE459DA36", ["id"], { unique: true })
@Entity("users", { schema: "dbo" })
export class Users implements IUsers {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("nvarchar", { name: "username", nullable: true, length: 255 })
  username: string | null;

  @Column("nvarchar", { name: "email", nullable: true, length: 255 })
  email: string | null;

  @Column("nvarchar", { name: "password", nullable: true, length: 255 })
  password: string | null;

  @Column("datetimeoffset", { name: "createdAt" })
  createdAt: LocalDateTime;

  @Column("datetimeoffset", { name: "updatedAt" })
  updatedAt: LocalDateTime;

}
