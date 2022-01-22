import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("users")
export class User {
  @PrimaryColumn()
  userId?: string;

  @Column()
  userEmail: string;

  @Column()
  userPassword: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  constructor() {
    if (!this.userId) {
      this.userId = uuid();
    }
  }
}
