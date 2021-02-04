import { Entity, JoinColumn, ManyToOne } from "typeorm";
import { TcGroups } from "./TcGroups";
import { TcDrivers } from "./TcDrivers";

@Entity("tc_group_driver", { schema: "dbo" })
export class TcGroupDriver {
  @ManyToOne(() => TcGroups, (tcGroups) => tcGroups.tcGroupDrivers, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "groupid", referencedColumnName: "id" }])
  group: TcGroups;

  @ManyToOne(() => TcDrivers, (tcDrivers) => tcDrivers.tcGroupDrivers, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "driverid", referencedColumnName: "id" }])
  driver: TcDrivers;
}
