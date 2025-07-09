const fs = require("fs/promises");
const path = require("path");

const notesPath = path.join(__dirname, "db.json");
const chalk = require("chalk");

//const notes = [];
async function addNote(title) {
  // const notes = require("./db.json");
  // const notes = await fs.readFile(notesPath, { encoding: "utf-8" });
  //const notes = Buffer.from(buffer).toString("utf-8"); // получили распарсенный массив
  //   console.log(notes);
  //   console.log(Array.isArray(notes));
  //   console.log(typeof notes);
  //console.log(typeof JSON.parse(notes));

  const notes = await getNotes();
  const note = {
    title,
    id: Date.now().toString(),
  };
  notes.push(note);
  fs.writeFile(notesPath, JSON.stringify(notes));
  console.log(chalk.bgGreen("Note was added!"));
}

async function getNotes() {
  const notes = await fs.readFile(notesPath, { encoding: "utf-8" });
  return Array.isArray(JSON.parse(notes)) ? JSON.parse(notes) : [];
}

async function printNotes() {
  const notes = await getNotes();
  console.log(chalk.bgBlue("Here is the list of notes:"));
  notes.forEach((note) => {
    console.log(chalk.blue(note.title));
  });
}
module.exports = {
  addNote,
  printNotes,
};
