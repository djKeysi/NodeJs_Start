const fs = require("fs/promises");
const fsSync = require("fs");
const path = require("path");

const base = path.join(__dirname, "temp");
const getContent = () => `\n\r${process.argv[2] ?? ""}`;

async function start() {
  try {
    if (fsSync.existsSync(base)) {
      fs.appendFile(path.join(base, "logs.txt"), getContent()); // process.argv[2]; //node fs first_log запись в файл
      const data = await fs.readFile(path.join(base, "logs.txt"), {
        encoding: "utf-8",
      });
      console.log(data);
    } else {
      await fs.mkdir(base);
      console.log("folder create");
      fs.writeFile(path.join(base, "logs.txt"), process.argv[2] ?? "");
    }
  } catch (error) {
    onsole.log("error", error);
  }
}
start();

//   fs.mkdir(base)
//     .then(() => console.log("folder create"))
//     .catch((error) => console.log("error", error)); //создание папки
