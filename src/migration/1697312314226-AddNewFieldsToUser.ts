import { MigrationInterface, QueryRunner } from "typeorm"

export class AddNewFieldsToUser1697312314226 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE user ADD COLUMN accessToken varchar(255)`); 
        await queryRunner.query(`ALTER TABLE user ADD COLUMN refreshToken varchar(255)`); 
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('user', 'accessToken');
        await queryRunner.dropColumn('user', 'rrefreshToken');
    }

}
