import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Roles } from "./Roles";
import { Users } from "./Users";

@Index("PK__user_rol__2121E7E5DF17C3EF", ["roleId", "userId"], { unique: true })
@Entity("user_roles", { schema: "dbo" })
export class UserRoles {
  @Column("datetimeoffset", { name: "createdAt" })
  createdAt: Date;

  @Column("datetimeoffset", { name: "updatedAt" })
  updatedAt: Date;

  @Column("int", { primary: true, name: "roleId" })
  roleId: number;

  @Column("int", { primary: true, name: "userId" })
  userId: number;

  @ManyToOne(() => Roles, (roles) => roles.userRoles, { onDelete: "CASCADE" })
  @JoinColumn([{ name: "roleId", referencedColumnName: "id" }])
  role: Roles;

  @ManyToOne(() => Users, (users) => users.userRoles, { onDelete: "CASCADE" })
  @JoinColumn([{ name: "userId", referencedColumnName: "id" }])
  user: Users;
}
