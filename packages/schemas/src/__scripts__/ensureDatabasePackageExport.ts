import { globSync } from "glob";
import path from "path";
import fs from "fs";
import { mapLinesAndReplace } from "@ulld/file-system-utils/methods-mapLinesAndReplace";

const files = globSync("**/*.ts", {
  cwd: path.resolve(import.meta.dirname, "../database/"),
  nodir: true,
  ignore: ["index.ts"],
  absolute: true,
});

const enc = { encoding: "utf-8" as "utf-8" };

const replaceLineWithPrismaImport = (l: string): string => {
  if (!l.startsWith("import")) {
    return l;
  }
  let newLine = l;
  if (l.endsWith("'@prisma/client';")) {
    newLine = l.replaceAll("@prisma/client", "@ulld/database/db");
  } else {
    const importRegex = /from\s\'\.(?<importPath>[\w|\d|\.|\/|!\']+)'/;
    let importPath = importRegex.exec(newLine);
    if (importPath && importPath.groups.importPath) {
      newLine = newLine.replace(
        importPath.groups.importPath,
        `${importPath.groups.importPath}.js`,
      );
    }
  }
  return newLine;
};


const replaceThreeDots = (l: string) => {    
    let newLine = l
    const importRegex = /from\s\'\.\.\.(?<importPath>[\w|\d|\.|\/|!\']+)'/;
    let importPath = importRegex.exec(newLine);
    if (importPath && importPath.groups.importPath) {
        console.log("importPath.groups.importPath: ", importPath.groups.importPath)
        newLine = `../${importPath.groups.importPath}`
      // newLine = newLine.replace(
      //   importPath.groups.importPath,
      //   `${importPath.groups.importPath}.js`,
      // );
    }
    return newLine
}

files.forEach((f) => {
    mapLinesAndReplace({
        path: f,
        cb: replaceThreeDots,
        // cb: replaceLineWithPrismaImport
    })
});
