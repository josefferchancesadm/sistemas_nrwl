import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { TcDevices } from "./TcDevices";
import { TcGroupAttribute } from "./TcGroupAttribute";
import { TcGroupCommand } from "./TcGroupCommand";
import { TcGroupDriver } from "./TcGroupDriver";
import { TcGroupGeofence } from "./TcGroupGeofence";
import { TcGroupMaintenance } from "./TcGroupMaintenance";
import { TcGroupNotification } from "./TcGroupNotification";
import { TcUserGroup } from "./TcUserGroup";

@Index("PK_TC_GROUPS", ["id"], { unique: true })
@Entity("tc_groups", { schema: "dbo" })
export class TcGroups {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", length: 128 })
  name: string;

  @Column("int", { name: "groupid", nullable: true })
  groupid: number | null;

  @Column("varchar", { name: "attributes", nullable: true, length: 4000 })
  attributes: string | null;

  @OneToMany(() => TcDevices, (tcDevices) => tcDevices.group)
  tcDevices: TcDevices[];

  @OneToMany(
    () => TcGroupAttribute,
    (tcGroupAttribute) => tcGroupAttribute.group
  )
  tcGroupAttributes: TcGroupAttribute[];

  @OneToMany(() => TcGroupCommand, (tcGroupCommand) => tcGroupCommand.group)
  tcGroupCommands: TcGroupCommand[];

  @OneToMany(() => TcGroupDriver, (tcGroupDriver) => tcGroupDriver.group)
  tcGroupDrivers: TcGroupDriver[];

  @OneToMany(() => TcGroupGeofence, (tcGroupGeofence) => tcGroupGeofence.group)
  tcGroupGeofences: TcGroupGeofence[];

  @OneToMany(
    () => TcGroupMaintenance,
    (tcGroupMaintenance) => tcGroupMaintenance.group
  )
  tcGroupMaintenances: TcGroupMaintenance[];

  @OneToMany(
    () => TcGroupNotification,
    (tcGroupNotification) => tcGroupNotification.group
  )
  tcGroupNotifications: TcGroupNotification[];

  @OneToMany(() => TcUserGroup, (tcUserGroup) => tcUserGroup.group)
  tcUserGroups: TcUserGroup[];
}
