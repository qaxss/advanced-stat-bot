const { Schema, model } = require("mongoose");

const schema = Schema({
  guildId: { type: String, default: "" },
  pointSystem: { type: Boolean, default: false },
  ranks: { type: Array, default: [] },
});

module.exports = model("ranks", schema);
