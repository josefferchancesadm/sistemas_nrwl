import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_TC_SERVERS", ["id"], { unique: true })
@Entity("tc_servers", { schema: "dbo" })
export class TcServers {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("bit", { name: "registration", default: () => "(1)" })
  registration: boolean;

  @Column("float", { name: "latitude", precision: 53, default: () => "(0)" })
  latitude: number;

  @Column("float", { name: "longitude", precision: 53, default: () => "(0)" })
  longitude: number;

  @Column("int", { name: "zoom", default: () => "(0)" })
  zoom: number;

  @Column("varchar", { name: "map", nullable: true, length: 128 })
  map: string | null;

  @Column("varchar", { name: "bingkey", nullable: true, length: 128 })
  bingkey: string | null;

  @Column("varchar", { name: "mapurl", nullable: true, length: 512 })
  mapurl: string | null;

  @Column("bit", { name: "readonly", default: () => "(0)" })
  readonly: boolean;

  @Column("bit", { name: "twelvehourformat", default: () => "(0)" })
  twelvehourformat: boolean;

  @Column("varchar", { name: "attributes", nullable: true, length: 4000 })
  attributes: string | null;

  @Column("bit", { name: "forcesettings", default: () => "(0)" })
  forcesettings: boolean;

  @Column("varchar", { name: "coordinateformat", nullable: true, length: 128 })
  coordinateformat: string | null;

  @Column("bit", {
    name: "devicereadonly",
    nullable: true,
    default: () => "(0)",
  })
  devicereadonly: boolean | null;

  @Column("bit", {
    name: "limitcommands",
    nullable: true,
    default: () => "(0)",
  })
  limitcommands: boolean | null;

  @Column("varchar", { name: "poilayer", nullable: true, length: 512 })
  poilayer: string | null;
}
