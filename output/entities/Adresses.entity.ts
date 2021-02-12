import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Clients } from "./Clients.entity";

@Index("PK__adresses__3213E83F4CDC4AD4", ["id"], { unique: true })
@Entity("adresses", { schema: "dbo" })
export class Adresses {
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
  client: Clients;
}
