const fs = require("fs");
const client = global.client;

fs.readdir("./src/events", (err, files) => {
  if (err) return console.error(err);
  console.log(`[EVENT] ${files.length} Event Activated!`);
  files.filter((file) => file.endsWith(".js")).forEach((file) => {
    const prop = require(`../events/${file}`);
    if (!prop.conf) return;
    client.on(prop.conf.name, prop);
  });
});
