import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUser1642810131120 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "users",
        columns: [
          {
            name: "userId",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "userEmail",
            type: "varchar",
            isUnique: true,
          },
          {
            name: "userPassword",
            type: "varchar",
          },
          {
            name: "createdAt",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updatedAt",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("users");
  }
}
