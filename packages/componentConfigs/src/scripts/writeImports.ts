import fs from "fs";
import path from "path";

const targetPath = "src/scripts/build/documentationManager.ts";

const writeImports = () => {
    const cwd = process.cwd();
    const p = path.join(cwd, "src/components");
    let importString = "";
    let configsString = `configs = [
`;
    fs.readdir(p, (err, _files) => {
        _files.forEach((a) => {
            const name = a.replace(/\.tsx?/, "");
            configsString += `${name}Config,
`;
            importString += `import { componentConfig as ${name}Config } from "../../components/${name}"
`;
        });
        configsString += "]";
        let target = path.join(cwd, targetPath);
        let targetContent = fs
            .readFileSync(target, { encoding: "utf-8" })
            .split("\n")
            .filter((a) => !a.trim().startsWith("import"))
            .join("\n");
        const regex = /configs\s?\=\s?\[[^\]]*\]/gm;
        let newContent = `${importString}
${targetContent.replace(regex, configsString)}`;
        console.log(newContent);
        fs.writeFileSync(target, newContent, { encoding: "utf-8" });
    });
};

writeImports();
