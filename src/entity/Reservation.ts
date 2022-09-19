import { ObjectId } from "mongodb";
import {
  Entity,
  ObjectIdColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
} from "typeorm";
import Guest from "./Guest";

@Entity()
class Reservation {
  @ObjectIdColumn({ name: "_id" })
  id!: ObjectId;

  @Column({ type: "varchar" })
  hotel_name!: string;

  @Column({ type: "int" })
  room_number!: number;

  @Column({ type: "float" })
  reservation_amount!: number;

  @CreateDateColumn({ type: "date" })
  date_booking_made!: Date;

  @Column({ type: "date" })
  start_date_reservation!: Date;

  @Column({ type: "date" })
  end_date_reservation!: Date;

  @Column({ type: "varchar" })
  reservation_status!: string;

  @Column()
  guest_id!: ObjectId;

  @ManyToOne(() => Guest, (guest) => guest.id)
  @JoinColumn({ name: "guest_id" })
  guest!: Guest;
}

export default Reservation;
