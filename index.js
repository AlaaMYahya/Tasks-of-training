"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./src/app");
const data_source_1 = require("./src/config/data-source");
data_source_1.AppDataSource.initialize()
    .then(() => {
    console.log("Data Source has been initialized!");
    app_1.app.listen(3005, () => {
        console.log("Server is running on port 3005");
    });
})
    .catch((err) => {
    console.error("Error during Data Source initialization", err);
});
