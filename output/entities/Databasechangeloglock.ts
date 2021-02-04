import { Column, Entity, Index } from "typeorm";

@Index("PK_DATABASECHANGELOGLOCK", ["id"], { unique: true })
@Entity("DATABASECHANGELOGLOCK", { schema: "dbo" })
export class Databasechangeloglock {
  @Column("int", { primary: true, name: "ID" })
  id: number;

  @Column("bit", { name: "LOCKED" })
  locked: boolean;

  @Column("datetime2", { name: "LOCKGRANTED", nullable: true })
  lockgranted: Date | null;

  @Column("nvarchar", { name: "LOCKEDBY", nullable: true, length: 255 })
  lockedby: string | null;
}
