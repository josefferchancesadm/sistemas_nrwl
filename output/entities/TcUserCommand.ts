import { Entity, JoinColumn, ManyToOne } from "typeorm";
import { TcUsers } from "./TcUsers";
import { TcCommands } from "./TcCommands";

@Entity("tc_user_command", { schema: "dbo" })
export class TcUserCommand {
  @ManyToOne(() => TcUsers, (tcUsers) => tcUsers.tcUserCommands, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "userid", referencedColumnName: "id" }])
  user: TcUsers;

  @ManyToOne(() => TcCommands, (tcCommands) => tcCommands.tcUserCommands, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "commandid", referencedColumnName: "id" }])
  command: TcCommands;
}
