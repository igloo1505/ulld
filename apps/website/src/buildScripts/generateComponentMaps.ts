#!/usr/bin/env -S pnpm tsx
import fs from "fs";
import path from "path";
import { globSync } from "glob";
import { getAllRegexMatches } from "@ulld/utilities/getAllRegexMatches";
import { removeArrayOverlap } from "@ulld/utilities/listUtils";

const getTitle = (content: string) => {
    let split = content.split("---");
    let lines = split[1].split("\n");
    for (const k of lines) {
        if (k.startsWith("title:")) {
            return k.replace("title:", "").trim();
        }
    }
};

const getComponents = (content: string) => {
    const res = getAllRegexMatches(content, /(?<content>\<[A-Z][\w|\d]*)/gm);
    const components = res.map((f) => f.groups?.content as string);
    return removeArrayOverlap(components).join(" ");
};

const contentRoot = path.join(__dirname, "../../content");
const targetPath = path.join(
    __dirname,
    "../fumaDocs/generatedComponentMap.json",
);

export const generateComponentMaps = async () => {
    let data: Record<string, string> = {};
    const files = globSync("**/*.{mdx,md}", {
        cwd: contentRoot,
    });
    for (const k of files) {
        let content = fs.readFileSync(path.join(contentRoot, k), {
            encoding: "utf-8",
        });
        if (content) {
            let title = getTitle(content);
            let map = getComponents(content);
            if (map && title) {
                data[title] = map;
            }
        }
    }
    fs.writeFileSync(targetPath, JSON.stringify(data, null, 4), {
        encoding: "utf-8",
    });
    console.log(`Updated website component map.`)
};

generateComponentMaps();

