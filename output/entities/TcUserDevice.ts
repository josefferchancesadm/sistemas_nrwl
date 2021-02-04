import { Entity, JoinColumn, ManyToOne } from "typeorm";
import { TcUsers } from "./TcUsers";
import { TcDevices } from "./TcDevices";

@Entity("tc_user_device", { schema: "dbo" })
export class TcUserDevice {
  @ManyToOne(() => TcUsers, (tcUsers) => tcUsers.tcUserDevices, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "userid", referencedColumnName: "id" }])
  user: TcUsers;

  @ManyToOne(() => TcDevices, (tcDevices) => tcDevices.tcUserDevices, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "deviceid", referencedColumnName: "id" }])
  device: TcDevices;
}
