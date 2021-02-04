import { Column, Entity } from "typeorm";

@Entity("DATABASECHANGELOG", { schema: "dbo" })
export class Databasechangelog {
  @Column("nvarchar", { name: "ID", length: 255 })
  id: string;

  @Column("nvarchar", { name: "AUTHOR", length: 255 })
  author: string;

  @Column("nvarchar", { name: "FILENAME", length: 255 })
  filename: string;

  @Column("datetime2", { name: "DATEEXECUTED" })
  dateexecuted: Date;

  @Column("int", { name: "ORDEREXECUTED" })
  orderexecuted: number;

  @Column("nvarchar", { name: "EXECTYPE", length: 10 })
  exectype: string;

  @Column("nvarchar", { name: "MD5SUM", nullable: true, length: 35 })
  md5Sum: string | null;

  @Column("nvarchar", { name: "DESCRIPTION", nullable: true, length: 255 })
  description: string | null;

  @Column("nvarchar", { name: "COMMENTS", nullable: true, length: 255 })
  comments: string | null;

  @Column("nvarchar", { name: "TAG", nullable: true, length: 255 })
  tag: string | null;

  @Column("nvarchar", { name: "LIQUIBASE", nullable: true, length: 20 })
  liquibase: string | null;

  @Column("nvarchar", { name: "CONTEXTS", nullable: true, length: 255 })
  contexts: string | null;

  @Column("nvarchar", { name: "LABELS", nullable: true, length: 255 })
  labels: string | null;

  @Column("nvarchar", { name: "DEPLOYMENT_ID", nullable: true, length: 10 })
  deploymentId: string | null;
}
