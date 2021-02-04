import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { TcDeviceGeofence } from "./TcDeviceGeofence";
import { TcCalendars } from "./TcCalendars";
import { TcGroupGeofence } from "./TcGroupGeofence";
import { TcUserGeofence } from "./TcUserGeofence";

@Index("PK_TC_GEOFENCES", ["id"], { unique: true })
@Entity("tc_geofences", { schema: "dbo" })
export class TcGeofences {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", length: 128 })
  name: string;

  @Column("varchar", { name: "description", nullable: true, length: 128 })
  description: string | null;

  @Column("varchar", { name: "area", length: 4096 })
  area: string;

  @Column("varchar", { name: "attributes", nullable: true, length: 4000 })
  attributes: string | null;

  @OneToMany(
    () => TcDeviceGeofence,
    (tcDeviceGeofence) => tcDeviceGeofence.geofence
  )
  tcDeviceGeofences: TcDeviceGeofence[];

  @ManyToOne(() => TcCalendars, (tcCalendars) => tcCalendars.tcGeofences, {
    onDelete: "SET NULL",
  })
  @JoinColumn([{ name: "calendarid", referencedColumnName: "id" }])
  calendar: TcCalendars;

  @OneToMany(
    () => TcGroupGeofence,
    (tcGroupGeofence) => tcGroupGeofence.geofence
  )
  tcGroupGeofences: TcGroupGeofence[];

  @OneToMany(() => TcUserGeofence, (tcUserGeofence) => tcUserGeofence.geofence)
  tcUserGeofences: TcUserGeofence[];
}
