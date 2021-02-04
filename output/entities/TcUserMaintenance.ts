import { Entity, JoinColumn, ManyToOne } from "typeorm";
import { TcUsers } from "./TcUsers";
import { TcMaintenances } from "./TcMaintenances";

@Entity("tc_user_maintenance", { schema: "dbo" })
export class TcUserMaintenance {
  @ManyToOne(() => TcUsers, (tcUsers) => tcUsers.tcUserMaintenances, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "userid", referencedColumnName: "id" }])
  user: TcUsers;

  @ManyToOne(
    () => TcMaintenances,
    (tcMaintenances) => tcMaintenances.tcUserMaintenances,
    { onDelete: "CASCADE" }
  )
  @JoinColumn([{ name: "maintenanceid", referencedColumnName: "id" }])
  maintenance: TcMaintenances;
}
