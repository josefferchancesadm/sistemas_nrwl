import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_TC_STATISTICS", ["id"], { unique: true })
@Entity("tc_statistics", { schema: "dbo" })
export class TcStatistics {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("datetime", { name: "capturetime" })
  capturetime: Date;

  @Column("int", { name: "activeusers", default: () => "(0)" })
  activeusers: number;

  @Column("int", { name: "activedevices", default: () => "(0)" })
  activedevices: number;

  @Column("int", { name: "requests", default: () => "(0)" })
  requests: number;

  @Column("int", { name: "messagesreceived", default: () => "(0)" })
  messagesreceived: number;

  @Column("int", { name: "messagesstored", default: () => "(0)" })
  messagesstored: number;

  @Column("varchar", { name: "attributes", length: 4096 })
  attributes: string;

  @Column("int", { name: "mailsent", default: () => "(0)" })
  mailsent: number;

  @Column("int", { name: "smssent", default: () => "(0)" })
  smssent: number;

  @Column("int", { name: "geocoderrequests", default: () => "(0)" })
  geocoderrequests: number;

  @Column("int", { name: "geolocationrequests", default: () => "(0)" })
  geolocationrequests: number;
}
