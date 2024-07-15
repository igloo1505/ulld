import path from "path";
import { UlldPlugin } from "../plugin";
import { getComponentMapContent } from "./fileContent/componentMap";
import fs from "fs";
import { ShellManager } from "../baseClasses/shell";
import { UlldBuildProcess } from "../build";

interface PathsGroup {
    packageJson: string;
    node_modules: string;
    src: string;
    appDir: string;
    public: string;
    nextConfig: string;
    tailwind: string;
    ulldBuildData: string;
    appConfig: string;
    componentMap: string;
}

const getPathsGroup = (rootPath: string): PathsGroup => {
    return {
        packageJson: path.join(rootPath, "package.json"),
        node_modules: path.join(rootPath, "node_modules"),
        src: path.join(rootPath, "src"),
        appDir: path.join(rootPath, "src/app"),
        public: path.join(rootPath, "public"),
        nextConfig: path.join(rootPath, "next.config.mjs"),
        tailwind: path.join(rootPath, "tailwind.config.ts"),
        ulldBuildData: path.join(rootPath, "ulldBuildData.json"),
        appConfig: path.join(rootPath, "appConfig.ulld.json"),
        componentMap: path.join(rootPath, "src/internal/componentMap.ts"),
    };
};

export class BaseApp extends ShellManager {
    paths: PathsGroup;
    constructor(
        public build: UlldBuildProcess,
    ) {
        super();
        this.paths = getPathsGroup(build.applicationDir);
    }
    writeFile(location: keyof PathsGroup, content: string) {
        return fs.writeFileSync(this.paths[location], content, {
            encoding: "utf-8",
        });
    }
    generate(){
        this.createComponentMap(this.build.plugins)
    }
    createComponentMap(plugins: UlldPlugin[]) {
        this.log(`Generating component map...`);
        let content = getComponentMapContent(plugins);
        this.log(`Writing component map...`);
        this.writeFile("componentMap", content)
        this.log("wrote embeddable component map successfully!")
    }
}
