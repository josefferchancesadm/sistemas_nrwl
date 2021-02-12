import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { UserRoles } from "./UserRoles.entity";

@Index("PK__users__3213E83FE459DA36", ["id"], { unique: true })
@Entity("users", { schema: "dbo" })
export class Users {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("nvarchar", { name: "username", nullable: true, length: 255 })
  username: string | null;

  @Column("nvarchar", { name: "email", nullable: true, length: 255 })
  email: string | null;

  @Column("nvarchar", { name: "password", nullable: true, length: 255 })
  password: string | null;

  @Column("datetimeoffset", { name: "createdAt" })
  createdAt: Date;

  @Column("datetimeoffset", { name: "updatedAt" })
  updatedAt: Date;

  @OneToMany(() => UserRoles, (userRoles) => userRoles.user)
  userRoles: UserRoles[];
}
