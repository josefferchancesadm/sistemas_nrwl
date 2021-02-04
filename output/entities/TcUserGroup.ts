import { Entity, JoinColumn, ManyToOne } from "typeorm";
import { TcUsers } from "./TcUsers";
import { TcGroups } from "./TcGroups";

@Entity("tc_user_group", { schema: "dbo" })
export class TcUserGroup {
  @ManyToOne(() => TcUsers, (tcUsers) => tcUsers.tcUserGroups, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "userid", referencedColumnName: "id" }])
  user: TcUsers;

  @ManyToOne(() => TcGroups, (tcGroups) => tcGroups.tcUserGroups, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "groupid", referencedColumnName: "id" }])
  group: TcGroups;
}
