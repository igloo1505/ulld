import { getFlattenedComponents } from "./utils";
import { getRepoPaths, readJsonData } from "./getRepoPaths";

interface ProtectedPathData {
    filePath: string;
    route: string;
    pageFor?: {
        slot: string;
        subSlot: string;
    };
}

const paths = getRepoPaths();
const buildData = readJsonData(paths.buildData);

let flattenedComponents = getFlattenedComponents();

let pageComponents = flattenedComponents.filter((f) => f.type === "page");

let protectedPaths = buildData.protectedPaths as ProtectedPathData[]

const unmatchedComponents: typeof pageComponents = [];

pageComponents.forEach((p) => {
    let pathData = protectedPaths.find(
        (f) =>
            f.pageFor && f.pageFor.slot === p.slot && f.pageFor.subSlot === p.subSlot,
    );
    if (!pathData) {
        unmatchedComponents.push(p);
    }
    return {
        ...p,
    };
});

console.log(`Found ${unmatchedComponents.length} components of type:page without a matching pageFor comment.

${unmatchedComponents.map((p, i) => `${i + 1}. ${p.slot}-${p.subSlot}`).join("\n")}

---------

`)


let unmatchedProtectedPaths = protectedPaths.filter((f) => !f.pageFor)


console.log(`Found ${unmatchedProtectedPaths.length} protected paths without a pageFor comment.

${unmatchedProtectedPaths.map((p, i) => `${i + 1}. ${p.filePath}`).join("\n")}`
)

