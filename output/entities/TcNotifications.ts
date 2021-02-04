import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { TcDeviceNotification } from "./TcDeviceNotification";
import { TcGroupNotification } from "./TcGroupNotification";
import { TcCalendars } from "./TcCalendars";
import { TcUserNotification } from "./TcUserNotification";

@Index("PK_TC_NOTIFICATIONS", ["id"], { unique: true })
@Entity("tc_notifications", { schema: "dbo" })
export class TcNotifications {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "type", length: 128 })
  type: string;

  @Column("varchar", { name: "attributes", nullable: true, length: 4000 })
  attributes: string | null;

  @Column("bit", { name: "always", default: () => "(0)" })
  always: boolean;

  @Column("varchar", { name: "notificators", nullable: true, length: 128 })
  notificators: string | null;

  @OneToMany(
    () => TcDeviceNotification,
    (tcDeviceNotification) => tcDeviceNotification.notification
  )
  tcDeviceNotifications: TcDeviceNotification[];

  @OneToMany(
    () => TcGroupNotification,
    (tcGroupNotification) => tcGroupNotification.notification
  )
  tcGroupNotifications: TcGroupNotification[];

  @ManyToOne(() => TcCalendars, (tcCalendars) => tcCalendars.tcNotifications, {
    onDelete: "SET NULL",
  })
  @JoinColumn([{ name: "calendarid", referencedColumnName: "id" }])
  calendar: TcCalendars;

  @OneToMany(
    () => TcUserNotification,
    (tcUserNotification) => tcUserNotification.notification
  )
  tcUserNotifications: TcUserNotification[];
}
