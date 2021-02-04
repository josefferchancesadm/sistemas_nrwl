import { Entity, JoinColumn, ManyToOne } from "typeorm";
import { TcDevices } from "./TcDevices";
import { TcAttributes } from "./TcAttributes";

@Entity("tc_device_attribute", { schema: "dbo" })
export class TcDeviceAttribute {
  @ManyToOne(() => TcDevices, (tcDevices) => tcDevices.tcDeviceAttributes, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "deviceid", referencedColumnName: "id" }])
  device: TcDevices;

  @ManyToOne(
    () => TcAttributes,
    (tcAttributes) => tcAttributes.tcDeviceAttributes,
    { onDelete: "CASCADE" }
  )
  @JoinColumn([{ name: "attributeid", referencedColumnName: "id" }])
  attribute: TcAttributes;
}
