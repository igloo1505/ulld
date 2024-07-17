#!/usr/bin/env tsx
import { getAllMdx } from "../src/fumaDocs/utils/getConcatenatedPages"
import fs from "fs";
import path from "path";
import data from "#/staticData/mdxData.json";

export const getTagList = () => {
    let allDocuments = getAllMdx()
    let items: string[] = [];
    allDocuments.forEach((a) => {
        if ("tags" in a.data && Array.isArray(a.data.tags)) {
            a.data.tags?.forEach((t: string) => {
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
