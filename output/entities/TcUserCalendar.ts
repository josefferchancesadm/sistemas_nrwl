import { Entity, JoinColumn, ManyToOne } from "typeorm";
import { TcUsers } from "./TcUsers";
import { TcCalendars } from "./TcCalendars";

@Entity("tc_user_calendar", { schema: "dbo" })
export class TcUserCalendar {
  @ManyToOne(() => TcUsers, (tcUsers) => tcUsers.tcUserCalendars, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "userid", referencedColumnName: "id" }])
  user: TcUsers;

  @ManyToOne(() => TcCalendars, (tcCalendars) => tcCalendars.tcUserCalendars, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "calendarid", referencedColumnName: "id" }])
  calendar: TcCalendars;
}
