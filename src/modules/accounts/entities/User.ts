import { v4 as uuid } from "uuid";

export class User {
  userId: string;
  userEmail: string;
  userPassword: string;
  createdAt: Date;
  updatedAt: Date;

  constructor() {
    if (!this.userId) {
      this.userId = uuid();
    }

    if (!this.createdAt) {
      this.createdAt = new Date();
    }

    if (!this.updatedAt) {
      this.updatedAt = new Date();
    }
  }
}
