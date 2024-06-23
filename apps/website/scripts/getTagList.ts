#!/usr/bin/env tsx
import { allDocuments } from "../.contentlayer/generated/index.mjs";
import fs from "fs";
import path from "path";
import data from "#/staticData/mdxData.json";

export const getTagList = () => {
    let items: string[] = [];
    allDocuments.forEach((a) => {
        if ("tags" in a && Array.isArray(a.tags)) {
            a.tags?.forEach((t: string) => {
                if (!items.includes(t)) {
                    items.push(t);
                }
            });
        }
    });
    let newData: typeof data = {
        ...data,
        tags: items.sort(function (a, b) {
            const al = a.toLowerCase()
            const bl = b.toLowerCase()
            if (al < bl) {
                return -1;
            }
            if (al > bl) {
                return 1;
            }
            return 0;
        }) as any,
    };
    fs.writeFileSync(
        path.join(process.cwd(), "src/staticData/mdxData.json"),
        JSON.stringify(newData, null, 4),
        { encoding: "utf-8" },
    );
};

getTagList();
