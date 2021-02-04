import { Entity, JoinColumn, ManyToOne } from "typeorm";
import { TcGroups } from "./TcGroups";
import { TcNotifications } from "./TcNotifications";

@Entity("tc_group_notification", { schema: "dbo" })
export class TcGroupNotification {
  @ManyToOne(() => TcGroups, (tcGroups) => tcGroups.tcGroupNotifications, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "groupid", referencedColumnName: "id" }])
  group: TcGroups;

  @ManyToOne(
    () => TcNotifications,
    (tcNotifications) => tcNotifications.tcGroupNotifications,
    { onDelete: "CASCADE" }
  )
  @JoinColumn([{ name: "notificationid", referencedColumnName: "id" }])
  notification: TcNotifications;
}
