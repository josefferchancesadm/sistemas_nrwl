import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { TcDeviceCommand } from "./TcDeviceCommand";
import { TcGroupCommand } from "./TcGroupCommand";
import { TcUserCommand } from "./TcUserCommand";

@Index("PK_TC_COMMANDS", ["id"], { unique: true })
@Entity("tc_commands", { schema: "dbo" })
export class TcCommands {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "description", length: 4000 })
  description: string;

  @Column("varchar", { name: "type", length: 128 })
  type: string;

  @Column("bit", { name: "textchannel", default: () => "(0)" })
  textchannel: boolean;

  @Column("varchar", { name: "attributes", length: 4000 })
  attributes: string;

  @OneToMany(
    () => TcDeviceCommand,
    (tcDeviceCommand) => tcDeviceCommand.command
  )
  tcDeviceCommands: TcDeviceCommand[];

  @OneToMany(() => TcGroupCommand, (tcGroupCommand) => tcGroupCommand.command)
  tcGroupCommands: TcGroupCommand[];

  @OneToMany(() => TcUserCommand, (tcUserCommand) => tcUserCommand.command)
  tcUserCommands: TcUserCommand[];
}
