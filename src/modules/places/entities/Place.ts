import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";

import { User } from "../../accounts/entities/User";

@Entity("places")
export class Place {
  @PrimaryGeneratedColumn("uuid")
  id?: string;

  @Column()
  placeName: string;

  @Column()
  photoURL: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => User)
  @JoinColumn({ name: "userId" })
  user: User;

  @Column()
  userId: string;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
