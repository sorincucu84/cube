const { readdirSync } = require("fs");

const ascii = require("ascii-table");

const table = new ascii().setHeading("Command", "Load Status");

//let table = new ascii("Lilly");
//table.setHeading("Command", "Load Status");

module.exports = client => {
  readdirSync("./cmd/").forEach(dir => {
    const cmd = readdirSync(`./cmd/${dir}/`).filter(file =>
      file.endsWith(".js")
    );

    for (let file of cmd) {
      let pull = require(`../cmd/${dir}/${file}`);

      if (pull.name) {
        client.commands.set(pull.name, pull);
        table.addRow(file, '✔ Sucess');
      } else {
        table.addRow(file, '✘ Error');
        continue;
      }

      if (pull.aliases && Array.isArray(pull.aliases))
        pull.aliases.forEach(alias => client.aliases.set(alias, pull.name));
    }
  });

  console.log(table.toString());
};