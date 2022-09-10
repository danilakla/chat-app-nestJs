import { MigrationInterface, QueryRunner } from "typeorm";

export class uniqueRoleColumn1661520844852 implements MigrationInterface {
    name = 'uniqueRoleColumn1661520844852'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "roles" ADD CONSTRAINT "UQ_ccc7c1489f3a6b3c9b47d4537c5" UNIQUE ("role")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "roles" DROP CONSTRAINT "UQ_ccc7c1489f3a6b3c9b47d4537c5"`);
    }

}
