import { Entity, JoinColumn, ManyToOne } from "typeorm";
import { TcGroups } from "./TcGroups";
import { TcCommands } from "./TcCommands";

@Entity("tc_group_command", { schema: "dbo" })
export class TcGroupCommand {
  @ManyToOne(() => TcGroups, (tcGroups) => tcGroups.tcGroupCommands, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "groupid", referencedColumnName: "id" }])
  group: TcGroups;

  @ManyToOne(() => TcCommands, (tcCommands) => tcCommands.tcGroupCommands, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "commandid", referencedColumnName: "id" }])
  command: TcCommands;
}
