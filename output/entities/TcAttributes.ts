import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { TcDeviceAttribute } from "./TcDeviceAttribute";
import { TcGroupAttribute } from "./TcGroupAttribute";
import { TcUserAttribute } from "./TcUserAttribute";

@Index("PK_TC_ATTRIBUTES", ["id"], { unique: true })
@Entity("tc_attributes", { schema: "dbo" })
export class TcAttributes {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "description", length: 4000 })
  description: string;

  @Column("varchar", { name: "type", length: 128 })
  type: string;

  @Column("varchar", { name: "attribute", length: 128 })
  attribute: string;

  @Column("varchar", { name: "expression", length: 4000 })
  expression: string;

  @OneToMany(
    () => TcDeviceAttribute,
    (tcDeviceAttribute) => tcDeviceAttribute.attribute
  )
  tcDeviceAttributes: TcDeviceAttribute[];

  @OneToMany(
    () => TcGroupAttribute,
    (tcGroupAttribute) => tcGroupAttribute.attribute
  )
  tcGroupAttributes: TcGroupAttribute[];

  @OneToMany(
    () => TcUserAttribute,
    (tcUserAttribute) => tcUserAttribute.attribute
  )
  tcUserAttributes: TcUserAttribute[];
}
