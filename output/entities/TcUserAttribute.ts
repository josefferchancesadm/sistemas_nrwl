import { Entity, JoinColumn, ManyToOne } from "typeorm";
import { TcUsers } from "./TcUsers";
import { TcAttributes } from "./TcAttributes";

@Entity("tc_user_attribute", { schema: "dbo" })
export class TcUserAttribute {
  @ManyToOne(() => TcUsers, (tcUsers) => tcUsers.tcUserAttributes, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "userid", referencedColumnName: "id" }])
  user: TcUsers;

  @ManyToOne(
    () => TcAttributes,
    (tcAttributes) => tcAttributes.tcUserAttributes,
    { onDelete: "CASCADE" }
  )
  @JoinColumn([{ name: "attributeid", referencedColumnName: "id" }])
  attribute: TcAttributes;
}
