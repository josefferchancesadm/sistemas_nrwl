import { Entity, JoinColumn, ManyToOne } from "typeorm";
import { TcDevices } from "./TcDevices";
import { TcGeofences } from "./TcGeofences";

@Entity("tc_device_geofence", { schema: "dbo" })
export class TcDeviceGeofence {
  @ManyToOne(() => TcDevices, (tcDevices) => tcDevices.tcDeviceGeofences, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "deviceid", referencedColumnName: "id" }])
  device: TcDevices;

  @ManyToOne(
    () => TcGeofences,
    (tcGeofences) => tcGeofences.tcDeviceGeofences,
    { onDelete: "CASCADE" }
  )
  @JoinColumn([{ name: "geofenceid", referencedColumnName: "id" }])
  geofence: TcGeofences;
}
