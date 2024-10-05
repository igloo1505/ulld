import path from "path";
import fs from "fs";
import rl from "readline";
import { PackageManager } from "../../packageManager";
import { FileData } from "@ulld/utilities/fileClass";

interface FileDetails {
  inputPath: string;
  outputPath: (rootDir: string) => string;
}

const files: FileDetails[] = [
  {
    inputPath: path.join(__dirname, "next.config.txt"),
    outputPath: (rootDir) => path.join(rootDir, "next.config.mjs"),
  },
  {
    inputPath: path.join(__dirname, "tailwindBase.txt"),
    outputPath: (rootDir) => path.join(rootDir, "tailwind.config.ts"),
  },
  {
    inputPath: path.join(__dirname, "postCssConfig.txt"),
    outputPath: (rootDir) => path.join(rootDir, "postcss.config.js"),
  },
  {
    inputPath: path.join(__dirname, "next-env.d.txt"),
    outputPath: (rootDir) => path.join(rootDir, "next-env.d.ts"),
  },
  {
    inputPath: path.join(__dirname, "trpcRouter.txt"),
    outputPath: (rootDir) =>
      path.join(rootDir, "src/app/api/trpc/[query]/route.ts"),
  },
  {
    inputPath: path.join(__dirname, "layout.txt"),
    outputPath: (rootDir) => path.join(rootDir, "src/app/layout.tsx"),
  },
  {
    inputPath: path.join(__dirname, "page.txt"),
    outputPath: (rootDir) => path.join(rootDir, "src/app/page.tsx"),
  },
  {
    inputPath: path.join(__dirname, "globalStyles.txt"),
    outputPath: (rootDir) => path.join(rootDir, "src/styles/globals.scss"),
  },
];

let p = new PackageManager();

const readLine = rl.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const concatLinesAndWrite = (file: FileData, additionalLines: string[]) => {
  file.createIfNotExists();
  let lines = file.getContent().split("\n");
  for (const l of additionalLines) {
    if (!lines.includes(l)) {
      lines.push(l);
    }
  }
  file.writeContent(lines.join("\n"));
};

readLine.question("Which package? ", (packageName) => {
  let packageObject = p.packages.find((p) => p.name === packageName.trim());
  if (!packageObject) {
    console.error(`No package was found for ${packageName}`);
    process.exit();
  }
  let rootPath = path.dirname(packageObject.path);
  for (const f of files) {
    let inputFile = new FileData(f.inputPath, false);
    let outputFile = new FileData(f.outputPath(rootPath), false);
    if (!outputFile.exists()) {
      outputFile.mkdirIfNotExists();
      let inputContent = inputFile.getContent();
      outputFile.writeContent(inputContent);
    }
  }

  concatLinesAndWrite(new FileData(path.join(rootPath, ".gitignore")), [
    "assets/",
    "appConfig.ulld.json",
  ]);
  concatLinesAndWrite(new FileData(path.join(rootPath, ".npmIgnore")), [
    "src/app",
    "src/styles",
    "assets/",
  ]);

  let assetsInputPath = path.join(
    path.dirname(p.packages.find((x) => x.name === "@ulld/website")!.path),
    "src/assets/appFont",
  );
  if (assetsInputPath && fs.existsSync(assetsInputPath)) {
    let assetFontPath = path.join(rootPath, "src/assets/appFont");
    fs.mkdirSync(path.join(rootPath, "src/assets"), { recursive: true });
    fs.symlinkSync(assetsInputPath, assetFontPath, "dir");
  }
  process.exit(0);
});
