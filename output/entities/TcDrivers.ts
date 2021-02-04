import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { TcDeviceDriver } from "./TcDeviceDriver";
import { TcGroupDriver } from "./TcGroupDriver";
import { TcUserDriver } from "./TcUserDriver";

@Index("PK_TC_DRIVERS", ["id"], { unique: true })
@Index("UQ__tc_drive__AA522ACBA017444E", ["uniqueid"], { unique: true })
@Entity("tc_drivers", { schema: "dbo" })
export class TcDrivers {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", length: 128 })
  name: string;

  @Column("varchar", { name: "uniqueid", unique: true, length: 128 })
  uniqueid: string;

  @Column("varchar", { name: "attributes", length: 4000 })
  attributes: string;

  @OneToMany(() => TcDeviceDriver, (tcDeviceDriver) => tcDeviceDriver.driver)
  tcDeviceDrivers: TcDeviceDriver[];

  @OneToMany(() => TcGroupDriver, (tcGroupDriver) => tcGroupDriver.driver)
  tcGroupDrivers: TcGroupDriver[];

  @OneToMany(() => TcUserDriver, (tcUserDriver) => tcUserDriver.driver)
  tcUserDrivers: TcUserDriver[];
}
