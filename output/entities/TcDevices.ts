import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { TcDeviceAttribute } from "./TcDeviceAttribute";
import { TcDeviceCommand } from "./TcDeviceCommand";
import { TcDeviceDriver } from "./TcDeviceDriver";
import { TcDeviceGeofence } from "./TcDeviceGeofence";
import { TcDeviceMaintenance } from "./TcDeviceMaintenance";
import { TcDeviceNotification } from "./TcDeviceNotification";
import { TcGroups } from "./TcGroups";
import { TcEvents } from "./TcEvents";
import { TcPositions } from "./TcPositions";
import { TcUserDevice } from "./TcUserDevice";

@Index("PK_TC_DEVICES", ["id"], { unique: true })
@Index("UQ__tc_devic__AA522ACB349C0C92", ["uniqueid"], { unique: true })
@Entity("tc_devices", { schema: "dbo" })
export class TcDevices {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", length: 128 })
  name: string;

  @Column("varchar", { name: "uniqueid", unique: true, length: 128 })
  uniqueid: string;

  @Column("datetime", { name: "lastupdate", nullable: true })
  lastupdate: Date | null;

  @Column("int", { name: "positionid", nullable: true })
  positionid: number | null;

  @Column("varchar", { name: "attributes", nullable: true, length: 4000 })
  attributes: string | null;

  @Column("varchar", { name: "phone", nullable: true, length: 128 })
  phone: string | null;

  @Column("varchar", { name: "model", nullable: true, length: 128 })
  model: string | null;

  @Column("varchar", { name: "contact", nullable: true, length: 512 })
  contact: string | null;

  @Column("varchar", { name: "category", nullable: true, length: 128 })
  category: string | null;

  @Column("bit", { name: "disabled", nullable: true, default: () => "(0)" })
  disabled: boolean | null;

  @OneToMany(
    () => TcDeviceAttribute,
    (tcDeviceAttribute) => tcDeviceAttribute.device
  )
  tcDeviceAttributes: TcDeviceAttribute[];

  @OneToMany(() => TcDeviceCommand, (tcDeviceCommand) => tcDeviceCommand.device)
  tcDeviceCommands: TcDeviceCommand[];

  @OneToMany(() => TcDeviceDriver, (tcDeviceDriver) => tcDeviceDriver.device)
  tcDeviceDrivers: TcDeviceDriver[];

  @OneToMany(
    () => TcDeviceGeofence,
    (tcDeviceGeofence) => tcDeviceGeofence.device
  )
  tcDeviceGeofences: TcDeviceGeofence[];

  @OneToMany(
    () => TcDeviceMaintenance,
    (tcDeviceMaintenance) => tcDeviceMaintenance.device
  )
  tcDeviceMaintenances: TcDeviceMaintenance[];

  @OneToMany(
    () => TcDeviceNotification,
    (tcDeviceNotification) => tcDeviceNotification.device
  )
  tcDeviceNotifications: TcDeviceNotification[];

  @ManyToOne(() => TcGroups, (tcGroups) => tcGroups.tcDevices, {
    onDelete: "SET NULL",
  })
  @JoinColumn([{ name: "groupid", referencedColumnName: "id" }])
  group: TcGroups;

  @OneToMany(() => TcEvents, (tcEvents) => tcEvents.device)
  tcEvents: TcEvents[];

  @OneToMany(() => TcPositions, (tcPositions) => tcPositions.device)
  tcPositions: TcPositions[];

  @OneToMany(() => TcUserDevice, (tcUserDevice) => tcUserDevice.device)
  tcUserDevices: TcUserDevice[];
}
