import { Column, Entity } from "typeorm";

@Entity("tc_positions1", { schema: "dbo" })
export class TcPositions1 {
  @Column("int", { name: "ID" })
  id: number;

  @Column("nvarchar", { name: "PROTOCOL", length: 50 })
  protocol: string;

  @Column("int", { name: "DEVICEID" })
  deviceid: number;

  @Column("datetime2", { name: "SERVERTIME" })
  servertime: Date;

  @Column("datetime2", { name: "DEVICETIME" })
  devicetime: Date;

  @Column("datetime2", { name: "FIXTIME" })
  fixtime: Date;

  @Column("bit", { name: "VALID" })
  valid: boolean;

  @Column("nvarchar", { name: "LATITUDE" })
  latitude: string;

  @Column("nvarchar", { name: "LONGITUDE" })
  longitude: string;

  @Column("nvarchar", { name: "ALTITUDE" })
  altitude: string;

  @Column("nvarchar", { name: "SPEED" })
  speed: string;

  @Column("nvarchar", { name: "COURSE" })
  course: string;

  @Column("nvarchar", { name: "ADDRESS", nullable: true })
  address: string | null;

  @Column("nvarchar", { name: "ATTRIBUTES" })
  attributes: string;

  @Column("float", { name: "ACCURACY", precision: 53 })
  accuracy: number;

  @Column("nvarchar", { name: "NETWORK" })
  network: string;
}
