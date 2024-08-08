import path from "path";
import fs from "fs";
import rl from "readline";
import { PackageManager } from "../../packageManager";
import { FileData } from "@ulld/utilities/fileClass";

interface FileDetails {
    inputPath: string;
    outputPath: (rootDir: string) => string;
}

const additionalGitIgnore = ["src/app", "src/styles", "assets/"];

const files: FileDetails[] = [
    {
        inputPath: path.join(__dirname, "next.config.txt"),
        outputPath: (rootDir) => path.join(rootDir, "next.config.mjs"),
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
        outputPath: (rootDir) => path.join(rootDir, "src/app/styles/globals.scss"),
    },
];

const getProject = async () => {
    let p = new PackageManager();
    const readLine = rl.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    readLine.question("Which package?", (packageName) => {
        let packageObject = p.packages.find((p) => p.name === packageName.trim());
        if (!packageObject) {
            console.error(`No package was found for ${packageName}`);
            process.exit();
        }
        let rootPath = path.dirname(packageObject.path);
        for (const f of files) {
            let inputFile = new FileData(f.inputPath, false);
            let outputFile = new FileData(f.outputPath(rootPath), false);
            outputFile.mkdirIfNotExists();
            let inputContent = inputFile.getContent();
            outputFile.writeContent(inputContent);
        }
        let gitIgnoreFile = new FileData(path.join(rootPath, ".gitignore"));
        let gitIgnoreLines: string[] = [];
        if (gitIgnoreFile.exists()) {
            gitIgnoreLines = gitIgnoreFile.getContent().split("\n");
        }
        for (const l of additionalGitIgnore) {
            if (!gitIgnoreLines.includes(l)) {
                gitIgnoreLines.push(l);
            }
        }
        gitIgnoreFile.writeContent(gitIgnoreLines.join("\n"));
        let assetsInputPath = path.join(
            p.packages.find((x) => x.name === "@ulld/website")!.path,
            "src/assets/appFont",
        );
        if (assetsInputPath && fs.existsSync(assetsInputPath)) {
            let assetFontPath = path.join(rootPath, "src/assets/appFont");
            fs.mkdirSync(assetFontPath, { recursive: true });
            fs.symlinkSync(assetsInputPath, assetFontPath);
        }
    });
    process.exit(0)
};

getProject();
