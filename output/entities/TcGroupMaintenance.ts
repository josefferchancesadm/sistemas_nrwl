import { Entity, JoinColumn, ManyToOne } from "typeorm";
import { TcGroups } from "./TcGroups";
import { TcMaintenances } from "./TcMaintenances";

@Entity("tc_group_maintenance", { schema: "dbo" })
export class TcGroupMaintenance {
  @ManyToOne(() => TcGroups, (tcGroups) => tcGroups.tcGroupMaintenances, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "groupid", referencedColumnName: "id" }])
  group: TcGroups;

  @ManyToOne(
    () => TcMaintenances,
    (tcMaintenances) => tcMaintenances.tcGroupMaintenances,
    { onDelete: "CASCADE" }
  )
  @JoinColumn([{ name: "maintenanceid", referencedColumnName: "id" }])
  maintenance: TcMaintenances;
}
