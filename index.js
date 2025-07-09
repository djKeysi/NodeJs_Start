const yargs = require("yargs");
const pkg = require("./package.json");
const { addNote, printNotes } = require("./notes.controller");

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
    // console.log("Add command", title);
    addNote(title);
  },
});
//  node index add --title=Hello
yargs.command({
  command: "list",
  describe: "Print all notes",
  async handler() {
    //console.log("List command");
    await printNotes();
  },
});

yargs.parse(); // чтоб вызвать команду
