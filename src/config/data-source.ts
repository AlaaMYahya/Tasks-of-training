import { DataSource } from "typeorm";
import { User } from '../entities/user.entity';
import { AddPasswordToUser1696848807636 } from "../migration/1696848807636-AddPasswordToUser";


export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "",
  database: "demo",
  entities: [User],
  migrations:[AddPasswordToUser1696848807636],
});

