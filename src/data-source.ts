import { join } from "path";
import "reflect-metadata";
import { DataSource } from "typeorm";
// import { User } from "./entity/User";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5437,
    username: "postgres",
    password: "example",
    database: "init-project-typeorm",
    synchronize: false,
    logging: false,
    entities: [join(__dirname, "./entity/*.{js,ts}")],
    migrations: [join(__dirname, "./migration/*.{js,ts}")],
    subscribers: [],
});
