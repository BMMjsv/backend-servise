import "reflect-metadata";
import { DataSource } from "typeorm";
import { Product } from "./entities/Product";

export const AppDataSourse = new DataSource({
    type: "sqlite",
    database: "database,sqlite",
    synchronize: true,
    logging: false,
    entities: [Product],
    migrations: [],
    subscribers: []
});