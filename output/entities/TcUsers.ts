import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { TcUserAttribute } from "./TcUserAttribute";
import { TcUserCalendar } from "./TcUserCalendar";
import { TcUserCommand } from "./TcUserCommand";
import { TcUserDevice } from "./TcUserDevice";
import { TcUserDriver } from "./TcUserDriver";
import { TcUserGeofence } from "./TcUserGeofence";
import { TcUserGroup } from "./TcUserGroup";
import { TcUserMaintenance } from "./TcUserMaintenance";
import { TcUserNotification } from "./TcUserNotification";
import { TcUserUser } from "./TcUserUser";

@Index("PK_TC_USERS", ["id"], { unique: true })
@Index("UQ__tc_users__AB6E616429B76A93", ["email"], { unique: true })
@Entity("tc_users", { schema: "dbo" })
export class TcUsers {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", length: 128 })
  name: string;

  @Column("varchar", { name: "email", unique: true, length: 128 })
  email: string;

  @Column("varchar", { name: "hashedpassword", nullable: true, length: 128 })
  hashedpassword: string | null;

  @Column("varchar", { name: "salt", nullable: true, length: 128 })
  salt: string | null;

  @Column("bit", { name: "readonly", default: () => "(0)" })
  readonly: boolean;

  @Column("bit", { name: "administrator", nullable: true })
  administrator: boolean | null;

  @Column("varchar", { name: "map", nullable: true, length: 128 })
  map: string | null;

  @Column("float", { name: "latitude", precision: 53, default: () => "(0)" })
  latitude: number;

  @Column("float", { name: "longitude", precision: 53, default: () => "(0)" })
  longitude: number;

  @Column("int", { name: "zoom", default: () => "(0)" })
  zoom: number;

  @Column("bit", { name: "twelvehourformat", default: () => "(0)" })
  twelvehourformat: boolean;

  @Column("varchar", { name: "attributes", nullable: true, length: 4000 })
  attributes: string | null;

  @Column("varchar", { name: "coordinateformat", nullable: true, length: 128 })
  coordinateformat: string | null;

  @Column("bit", { name: "disabled", nullable: true, default: () => "(0)" })
  disabled: boolean | null;

  @Column("datetime", { name: "expirationtime", nullable: true })
  expirationtime: Date | null;

  @Column("int", { name: "devicelimit", nullable: true, default: () => "(-1)" })
  devicelimit: number | null;

  @Column("varchar", { name: "token", nullable: true, length: 128 })
  token: string | null;

  @Column("int", { name: "userlimit", nullable: true, default: () => "(0)" })
  userlimit: number | null;

  @Column("bit", {
    name: "devicereadonly",
    nullable: true,
    default: () => "(0)",
  })
  devicereadonly: boolean | null;

  @Column("varchar", { name: "phone", nullable: true, length: 128 })
  phone: string | null;

  @Column("bit", {
    name: "limitcommands",
    nullable: true,
    default: () => "(0)",
  })
  limitcommands: boolean | null;

  @Column("varchar", { name: "login", nullable: true, length: 128 })
  login: string | null;

  @Column("varchar", { name: "poilayer", nullable: true, length: 512 })
  poilayer: string | null;

  @OneToMany(() => TcUserAttribute, (tcUserAttribute) => tcUserAttribute.user)
  tcUserAttributes: TcUserAttribute[];

  @OneToMany(() => TcUserCalendar, (tcUserCalendar) => tcUserCalendar.user)
  tcUserCalendars: TcUserCalendar[];

  @OneToMany(() => TcUserCommand, (tcUserCommand) => tcUserCommand.user)
  tcUserCommands: TcUserCommand[];

  @OneToMany(() => TcUserDevice, (tcUserDevice) => tcUserDevice.user)
  tcUserDevices: TcUserDevice[];

  @OneToMany(() => TcUserDriver, (tcUserDriver) => tcUserDriver.user)
  tcUserDrivers: TcUserDriver[];

  @OneToMany(() => TcUserGeofence, (tcUserGeofence) => tcUserGeofence.user)
  tcUserGeofences: TcUserGeofence[];

  @OneToMany(() => TcUserGroup, (tcUserGroup) => tcUserGroup.user)
  tcUserGroups: TcUserGroup[];

  @OneToMany(
    () => TcUserMaintenance,
    (tcUserMaintenance) => tcUserMaintenance.user
  )
  tcUserMaintenances: TcUserMaintenance[];

  @OneToMany(
    () => TcUserNotification,
    (tcUserNotification) => tcUserNotification.user
  )
  tcUserNotifications: TcUserNotification[];

  @OneToMany(() => TcUserUser, (tcUserUser) => tcUserUser.user)
  tcUserUsers: TcUserUser[];
}
