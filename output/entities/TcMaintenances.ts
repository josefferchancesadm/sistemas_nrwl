import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { TcDeviceMaintenance } from "./TcDeviceMaintenance";
import { TcGroupMaintenance } from "./TcGroupMaintenance";
import { TcUserMaintenance } from "./TcUserMaintenance";

@Index("PK_TC_MAINTENANCES", ["id"], { unique: true })
@Entity("tc_maintenances", { schema: "dbo" })
export class TcMaintenances {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", length: 4000 })
  name: string;

  @Column("varchar", { name: "type", length: 128 })
  type: string;

  @Column("float", { name: "start", precision: 53, default: () => "(0)" })
  start: number;

  @Column("float", { name: "period", precision: 53, default: () => "(0)" })
  period: number;

  @Column("varchar", { name: "attributes", length: 4000 })
  attributes: string;

  @OneToMany(
    () => TcDeviceMaintenance,
    (tcDeviceMaintenance) => tcDeviceMaintenance.maintenance
  )
  tcDeviceMaintenances: TcDeviceMaintenance[];

  @OneToMany(
    () => TcGroupMaintenance,
    (tcGroupMaintenance) => tcGroupMaintenance.maintenance
  )
  tcGroupMaintenances: TcGroupMaintenance[];

  @OneToMany(
    () => TcUserMaintenance,
    (tcUserMaintenance) => tcUserMaintenance.maintenance
  )
  tcUserMaintenances: TcUserMaintenance[];
}
