const fs = require("fs").promises;
const { read } = require("fs");
const path = require("path");

async function readdir(rootDir) {
  rootDir = rootDir || path.resolve(__dirname);

  const files = await fs.readdir(path.resolve(rootDir));
  walk(files, rootDir);
}

async function walk(files, rootDir) {
  for (let file of files) {
    const fileFullPath = path.resolve(rootDir, file);
    const stats = await fs.stat(fileFullPath);

    if (/\.git/g.test(fileFullPath)) continue;
    if (/node_modules/g.test(fileFullPath)) continue;

    if (stats.isDirectory()) readdir(fileFullPath);

    // if (!/\.css$/g.test(fileFullPath)) continue; //Retorna somente os arquivos .css
    
    console.log(file, stats.isDirectory());
  }
}

readdir("c:/Udemy/CursoJs/Seção Node");
