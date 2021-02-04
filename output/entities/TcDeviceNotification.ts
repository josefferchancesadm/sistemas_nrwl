import { Entity, JoinColumn, ManyToOne } from "typeorm";
import { TcDevices } from "./TcDevices";
import { TcNotifications } from "./TcNotifications";

@Entity("tc_device_notification", { schema: "dbo" })
export class TcDeviceNotification {
  @ManyToOne(() => TcDevices, (tcDevices) => tcDevices.tcDeviceNotifications, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "deviceid", referencedColumnName: "id" }])
  device: TcDevices;

  @ManyToOne(
    () => TcNotifications,
    (tcNotifications) => tcNotifications.tcDeviceNotifications,
    { onDelete: "CASCADE" }
  )
  @JoinColumn([{ name: "notificationid", referencedColumnName: "id" }])
  notification: TcNotifications;
}
