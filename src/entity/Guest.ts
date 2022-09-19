import { ObjectId } from "mongodb";
import { Entity, ObjectIdColumn, Column } from "typeorm";

@Entity()
class Guest {
  @ObjectIdColumn({ name: "_id" })
  id!: ObjectId;

  @Column({ type: "varchar" })
  name!: string;

  @Column({ type: "varchar" })
  email!: string;

  @Column({ type: "date" })
  birthday!: Date;

  @Column({ type: "bigint" })
  telephone!: string;

  @Column({ type: "varchar" })
  city!: string;

  @Column({ type: "varchar2" })
  state!: string;

  @Column({ type: "varchar" })
  country!: string;
}

export default Guest;
