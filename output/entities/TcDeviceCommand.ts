import { Entity, JoinColumn, ManyToOne } from "typeorm";
import { TcDevices } from "./TcDevices";
import { TcCommands } from "./TcCommands";

@Entity("tc_device_command", { schema: "dbo" })
export class TcDeviceCommand {
  @ManyToOne(() => TcDevices, (tcDevices) => tcDevices.tcDeviceCommands, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "deviceid", referencedColumnName: "id" }])
  device: TcDevices;

  @ManyToOne(() => TcCommands, (tcCommands) => tcCommands.tcDeviceCommands, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "commandid", referencedColumnName: "id" }])
  command: TcCommands;
}
