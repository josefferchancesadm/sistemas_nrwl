import { Entity, JoinColumn, ManyToOne } from "typeorm";
import { TcUsers } from "./TcUsers";
import { TcNotifications } from "./TcNotifications";

@Entity("tc_user_notification", { schema: "dbo" })
export class TcUserNotification {
  @ManyToOne(() => TcUsers, (tcUsers) => tcUsers.tcUserNotifications, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "userid", referencedColumnName: "id" }])
  user: TcUsers;

  @ManyToOne(
    () => TcNotifications,
    (tcNotifications) => tcNotifications.tcUserNotifications,
    { onDelete: "CASCADE" }
  )
  @JoinColumn([{ name: "notificationid", referencedColumnName: "id" }])
  notification: TcNotifications;
}
