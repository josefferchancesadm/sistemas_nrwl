import { Column, Entity, Index, OneToMany } from "typeorm";
import { UserRoles } from "./UserRoles";

@Index("PK__roles__3213E83F168D1C3E", ["id"], { unique: true })
@Entity("roles", { schema: "dbo" })
export class Roles {
  @Column("int", { primary: true, name: "id" })
  id: number;

  @Column("nvarchar", { name: "name", nullable: true, length: 255 })
  name: string | null;

  @Column("datetimeoffset", { name: "createdAt" })
  createdAt: Date;

  @Column("datetimeoffset", { name: "updatedAt" })
  updatedAt: Date;

  @OneToMany(() => UserRoles, (userRoles) => userRoles.role)
  userRoles: UserRoles[];
}
