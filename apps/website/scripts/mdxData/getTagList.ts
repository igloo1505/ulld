// #!/usr/bin/env tsx
import fs from "fs";
import path from "path";
import { allBlogs, allMyNotes } from "content-collections";

export const getTagList = () => {
    console.log(`Gathering blog tag data`)
    const targetPath = path.join(__dirname, "../src/staticData/mdxData.json");
    const data = JSON.parse(
        fs.readFileSync(targetPath, {
            encoding: "utf-8",
        }),
    );
    let allDocuments: { tags?: string[]; category?: string }[] = [
        ...allBlogs,
        ...allMyNotes,
    ] as { tags?: string[]; category?: string }[];
    let tagItems: string[] = [];
    let tagCount: Record<string, number> = {

    }
    let categories: string[] = [];
    allDocuments.forEach((a) => {
        if ("tags" in a && Array.isArray(a.tags)) {
            a.tags?.forEach((t: string) => {
                if (!tagItems.includes(t)) {
                    tagItems.push(t);
                }
                if(!(t in tagCount)){
                    tagCount[t] = 1
                } else {
                    tagCount[t] = tagCount[t] + 1
                }
            });
        }
        if ("category" in a && a.category) {
            if (!categories.includes(a.category)) {
                categories.push(a.category);
            }
        }
    });
    let newData: typeof data = {
        ...data,
        tags: tagItems.sort(function (a, b) {
            const al = a.toLowerCase();
            const bl = b.toLowerCase();
            if (al < bl) {
                return -1;
            }
            if (al > bl) {
                return 1;
            }
            return 0;
        }) as any,
        categories: categories.sort((a, b) => a < b ? -1 : 1),
        tagCount
    };
    fs.writeFileSync(targetPath, JSON.stringify(newData, null, 4), {
        encoding: "utf-8",
    });
};
