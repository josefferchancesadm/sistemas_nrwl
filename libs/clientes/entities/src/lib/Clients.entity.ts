
import {
  Column,
  Entity,
  Index,
  PrimaryGeneratedColumn,
} from "typeorm";
//import { Adresses } from "./Adresses.entity";

import type { IClients } from '@sistemas/clientes-interfaces';

@Index("PK__clients__3213E83FE614000C", ["id"], { unique: true })
@Entity("clients", { schema: "dbo" })
export class Clients implements IClients{
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("nvarchar", { name: "nome" })
  nome: string;

  @Column("date", { name: "dtnascimento" })
  dtnascimento: Date;

  @Column("varbinary", { name: "foto", nullable: true })
  foto: Buffer | null;

  @Column("int", { name: "civil" })
  civil: number;

  @Column("datetimeoffset", { name: "createdAt" })
  createdAt: Date;

  @Column("datetimeoffset", { name: "updatedAt" })
  updatedAt: Date;

  //@OneToMany(() => Adresses, (adresses) => adresses.client)
  //adresses: Adresses[];
}
