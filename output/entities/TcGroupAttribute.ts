import { Entity, JoinColumn, ManyToOne } from "typeorm";
import { TcGroups } from "./TcGroups";
import { TcAttributes } from "./TcAttributes";

@Entity("tc_group_attribute", { schema: "dbo" })
export class TcGroupAttribute {
  @ManyToOne(() => TcGroups, (tcGroups) => tcGroups.tcGroupAttributes, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "groupid", referencedColumnName: "id" }])
  group: TcGroups;

  @ManyToOne(
    () => TcAttributes,
    (tcAttributes) => tcAttributes.tcGroupAttributes,
    { onDelete: "CASCADE" }
  )
  @JoinColumn([{ name: "attributeid", referencedColumnName: "id" }])
  attribute: TcAttributes;
}
