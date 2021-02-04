import { Entity, JoinColumn, ManyToOne } from "typeorm";
import { TcDevices } from "./TcDevices";
import { TcMaintenances } from "./TcMaintenances";

@Entity("tc_device_maintenance", { schema: "dbo" })
export class TcDeviceMaintenance {
  @ManyToOne(() => TcDevices, (tcDevices) => tcDevices.tcDeviceMaintenances, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "deviceid", referencedColumnName: "id" }])
  device: TcDevices;

  @ManyToOne(
    () => TcMaintenances,
    (tcMaintenances) => tcMaintenances.tcDeviceMaintenances,
    { onDelete: "CASCADE" }
  )
  @JoinColumn([{ name: "maintenanceid", referencedColumnName: "id" }])
  maintenance: TcMaintenances;
}
