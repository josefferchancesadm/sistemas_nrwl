import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { TcDevices } from "./TcDevices";

@Index("PK_TC_EVENTS", ["id"], { unique: true })
@Entity("tc_events", { schema: "dbo" })
export class TcEvents {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "type", length: 128 })
  type: string;

  @Column("datetime", { name: "servertime" })
  servertime: Date;

  @Column("int", { name: "positionid", nullable: true })
  positionid: number | null;

  @Column("int", { name: "geofenceid", nullable: true })
  geofenceid: number | null;

  @Column("varchar", { name: "attributes", nullable: true, length: 4000 })
  attributes: string | null;

  @Column("int", { name: "maintenanceid", nullable: true })
  maintenanceid: number | null;

  @ManyToOne(() => TcDevices, (tcDevices) => tcDevices.tcEvents, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "deviceid", referencedColumnName: "id" }])
  device: TcDevices;
}
