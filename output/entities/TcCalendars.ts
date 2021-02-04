import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { TcGeofences } from "./TcGeofences";
import { TcNotifications } from "./TcNotifications";
import { TcUserCalendar } from "./TcUserCalendar";

@Index("PK_TC_CALENDARS", ["id"], { unique: true })
@Entity("tc_calendars", { schema: "dbo" })
export class TcCalendars {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", length: 128 })
  name: string;

  @Column("varbinary", { name: "data" })
  data: Buffer;

  @Column("varchar", { name: "attributes", length: 4000 })
  attributes: string;

  @OneToMany(() => TcGeofences, (tcGeofences) => tcGeofences.calendar)
  tcGeofences: TcGeofences[];

  @OneToMany(
    () => TcNotifications,
    (tcNotifications) => tcNotifications.calendar
  )
  tcNotifications: TcNotifications[];

  @OneToMany(() => TcUserCalendar, (tcUserCalendar) => tcUserCalendar.calendar)
  tcUserCalendars: TcUserCalendar[];
}
