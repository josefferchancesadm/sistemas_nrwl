import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { TcDevices } from "./TcDevices";

@Index("PK_TC_POSITIONS", ["id"], { unique: true })
@Entity("tc_positions", { schema: "dbo" })
export class TcPositions {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "protocol", nullable: true, length: 128 })
  protocol: string | null;

  @Column("datetime", { name: "servertime", default: () => "getdate()" })
  servertime: Date;

  @Column("datetime", { name: "devicetime" })
  devicetime: Date;

  @Column("datetime", { name: "fixtime" })
  fixtime: Date;

  @Column("bit", { name: "valid" })
  valid: boolean;

  @Column("float", { name: "latitude", precision: 53 })
  latitude: number;

  @Column("float", { name: "longitude", precision: 53 })
  longitude: number;

  @Column("float", { name: "altitude", precision: 53 })
  altitude: number;

  @Column("float", { name: "speed", precision: 53 })
  speed: number;

  @Column("float", { name: "course", precision: 53 })
  course: number;

  @Column("varchar", { name: "address", nullable: true, length: 512 })
  address: string | null;

  @Column("varchar", { name: "attributes", nullable: true, length: 4000 })
  attributes: string | null;

  @Column("float", { name: "accuracy", precision: 53, default: () => "(0)" })
  accuracy: number;

  @Column("varchar", { name: "network", nullable: true, length: 4000 })
  network: string | null;

  @ManyToOne(() => TcDevices, (tcDevices) => tcDevices.tcPositions, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "deviceid", referencedColumnName: "id" }])
  device: TcDevices;
}
