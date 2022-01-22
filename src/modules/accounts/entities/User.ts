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
  @PrimaryColumn({ name: "id" })
  userId: string;

  @Column({ name: "user_email" })
  userEmail: string;

  @Column({ name: "user_password" })
  userPassword: string;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;

  constructor() {
    if (!this.userId) {
      this.userId = uuid();
    }
  }
}
