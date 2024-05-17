const { Schema, model } = require("mongoose");

const schema = Schema({
  guildID: String,
  userID: String,
  date: Number,
});

module.exports = model("voiceJoinedAt", schema);
