import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreatePlaces1642953750937 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "places",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "placeName",
            type: "varchar",
          },
          {
            name: "photoURL",
            type: "varchar",
            isUnique: true,
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
          {
            name: "userId",
            type: "uuid",
          },
        ],
        foreignKeys: [
          {
            name: "places",
            columnNames: ["userId"],
            referencedTableName: "users",
            referencedColumnNames: ["id"],
            onUpdate: "CASCADE",
            onDelete: "CASCADE",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("places");
  }
}
