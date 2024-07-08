import fs from "fs";
import path from "path";

const targetPath = path.join(
    __dirname,
    "../../../utilities/src/utils/buildStaticData.json",
);

type ProtectedPath = {
    filePath: string;
    route: string;
};

const testRoot = process.env.ULLD_TEST_ROOT;

const getSplitValue = (w: string): string => {
    if (w.startsWith("[") && w.endsWith("]")) {
        return w.includes("...") ? "**" : "*";
    }
    return w;
};

const getCalculatedRoute = (p: string): string => {
    let split = p.split("/").filter((w) => !["", "page.tsx", "src"].includes(w));
    if (split[0] !== "app") {
        throw new Error(
            `protected route does not appear to be within the app directory. Check ${p}`,
        );
    }
    split = split.slice(1).map((w) => getSplitValue(w));
    return split.join("/")
};

export const gatherProtectedPaths = (files: string[]) => {
    const protectedPaths: ProtectedPath[] = [];
    for (const k of files) {
        const data = fs.readFileSync(k, { encoding: "utf-8" });
        let re = /ULLD\:\s*protected-path/gm;
        if (re.test(data)) {
            const shortenedPath = k.replace(testRoot, "");
            protectedPaths.push({
                filePath: shortenedPath,
                route: getCalculatedRoute(shortenedPath),
            });
        }
    }
    let targetData = JSON.parse(
        fs.readFileSync(targetPath, { encoding: "utf-8" }),
    );
    targetData.protectedPaths = protectedPaths;
    fs.writeFileSync(targetPath, JSON.stringify(targetData, null, 4), {
        encoding: "utf-8",
    });
};
