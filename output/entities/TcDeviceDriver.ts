import { Entity, JoinColumn, ManyToOne } from "typeorm";
import { TcDevices } from "./TcDevices";
import { TcDrivers } from "./TcDrivers";

@Entity("tc_device_driver", { schema: "dbo" })
export class TcDeviceDriver {
  @ManyToOne(() => TcDevices, (tcDevices) => tcDevices.tcDeviceDrivers, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "deviceid", referencedColumnName: "id" }])
  device: TcDevices;

  @ManyToOne(() => TcDrivers, (tcDrivers) => tcDrivers.tcDeviceDrivers, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "driverid", referencedColumnName: "id" }])
  driver: TcDrivers;
}
