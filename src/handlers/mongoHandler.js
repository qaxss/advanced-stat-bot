const mongoose = require("mongoose");
const settings = require("../configs/settings.json");

mongoose.connect(settings.mongoURL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

mongoose.connection.on("connected", () => {
  console.log(`[MONGOOSE] The Mongo connection has been established!`);
});

mongoose.connection.on("disconnected", () => {
  console.log(`[MONGOOSE] Mongo is disconnected!`);
});

mongoose.connection.on("error", () => {
  console.error(`[MONGOOSE] An error occurred while connecting to Mongo!`);
});
