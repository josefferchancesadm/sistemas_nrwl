import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";

import { Roles } from "./Roles.entity";
import { Users } from "./Users.entity";

import type { IRoles, IUserRoles, IUsers } from "@sistemas/acessos-interfaces";

@Index("PK__user_rol__2121E7E5DF17C3EF", ["roleId", "userId"], { unique: true })
@Entity("user_roles", { schema: "dbo" })
export class UserRoles implements IUserRoles {
  @Column("datetimeoffset", { name: "createdAt" })
  createdAt: Date;

  @Column("datetimeoffset", { name: "updatedAt" })
  updatedAt: Date;

  @Column("int", { primary: true, name: "roleId" })
  roleId: number;

  @Column("int", { primary: true, name: "userId" })
  userId: number;

  @ManyToOne(() => Roles)
  @JoinColumn([{ name: "roleId", referencedColumnName: "id" }])
  role: IRoles;

  @ManyToOne(() => Users)
  @JoinColumn([{ name: "userId", referencedColumnName: "id" }])
  user: IUsers;

}
