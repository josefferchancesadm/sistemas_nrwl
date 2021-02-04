import { Entity, JoinColumn, ManyToOne } from "typeorm";
import { TcUsers } from "./TcUsers";
import { TcDrivers } from "./TcDrivers";

@Entity("tc_user_driver", { schema: "dbo" })
export class TcUserDriver {
  @ManyToOne(() => TcUsers, (tcUsers) => tcUsers.tcUserDrivers, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "userid", referencedColumnName: "id" }])
  user: TcUsers;

  @ManyToOne(() => TcDrivers, (tcDrivers) => tcDrivers.tcUserDrivers, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "driverid", referencedColumnName: "id" }])
  driver: TcDrivers;
}
