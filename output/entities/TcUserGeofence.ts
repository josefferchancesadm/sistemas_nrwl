import { Entity, JoinColumn, ManyToOne } from "typeorm";
import { TcUsers } from "./TcUsers";
import { TcGeofences } from "./TcGeofences";

@Entity("tc_user_geofence", { schema: "dbo" })
export class TcUserGeofence {
  @ManyToOne(() => TcUsers, (tcUsers) => tcUsers.tcUserGeofences, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "userid", referencedColumnName: "id" }])
  user: TcUsers;

  @ManyToOne(() => TcGeofences, (tcGeofences) => tcGeofences.tcUserGeofences, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "geofenceid", referencedColumnName: "id" }])
  geofence: TcGeofences;
}
