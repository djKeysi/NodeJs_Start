const yargs = require("yargs");
const pkg = require("./package.json");

yargs.version(pkg.version);

yargs.command({
  command: "add",
  describe: "Add new note to list",
  builder: {
    //типизация данных
    title: {
      type: "string",
      describe: "Note title",
      demandOption: true,
    },
  },
  handler({ title }) {
    console.log("Add command", title);
  },
});
//  node index add --title=Hello
yargs.command({
  command: "list",
  describe: "Print all notes",
  handler() {
    console.log("List command");
  },
});

yargs.parse(); // чтоб вызвать команду
