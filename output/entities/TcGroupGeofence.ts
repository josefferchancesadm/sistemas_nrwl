import { Entity, JoinColumn, ManyToOne } from "typeorm";
import { TcGroups } from "./TcGroups";
import { TcGeofences } from "./TcGeofences";

@Entity("tc_group_geofence", { schema: "dbo" })
export class TcGroupGeofence {
  @ManyToOne(() => TcGroups, (tcGroups) => tcGroups.tcGroupGeofences, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "groupid", referencedColumnName: "id" }])
  group: TcGroups;

  @ManyToOne(() => TcGeofences, (tcGeofences) => tcGeofences.tcGroupGeofences, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "geofenceid", referencedColumnName: "id" }])
  geofence: TcGeofences;
}
