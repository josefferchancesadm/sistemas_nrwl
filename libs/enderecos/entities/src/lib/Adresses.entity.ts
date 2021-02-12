import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Clients } from '@sistemas/clientes-entities';

import type { IClients }  from '@sistemas/clientes-interfaces';
import type { IAdresses } from '@sistemas/enderecos-interfaces';

@Index("PK__adresses__3213E83F4CDC4AD4", ["id"], { unique: true })
@Entity("adresses", { schema: "dbo" })
export class Adresses implements IAdresses {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("nvarchar", { name: "logradouro" })
  logradouro: string;

  @Column("int", { name: "numero", nullable: true })
  numero: number | null;

  @Column("datetimeoffset", { name: "createdAt" })
  createdAt: Date;

  @Column("datetimeoffset", { name: "updatedAt" })
  updatedAt: Date;

  @ManyToOne(() => Clients)
  @JoinColumn([{ name: "clientId", referencedColumnName: "id" }])
  client: IClients;
}
