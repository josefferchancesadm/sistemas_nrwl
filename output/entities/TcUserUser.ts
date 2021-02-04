import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { TcUsers } from "./TcUsers";

@Entity("tc_user_user", { schema: "dbo" })
export class TcUserUser {
  @Column("int", { name: "manageduserid" })
  manageduserid: number;

  @ManyToOne(() => TcUsers, (tcUsers) => tcUsers.tcUserUsers, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "userid", referencedColumnName: "id" }])
  user: TcUsers;
}
