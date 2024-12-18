import mongoose from "mongoose";
import app from "./app";
import config from "./app/config";
// const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  try {
    app.listen(config.port, () => {
      console.log(`Server is running on port ${config.port}`);
    });
    await mongoose.connect(config.databaseURL as string).then(() => {
      console.log("DB connected");
    });
  } catch (error) {
    console.log(error);
  }
}
 