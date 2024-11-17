import { PackageManager } from "./packageManager";
import path from "path";
import fs from "fs";

const p = new PackageManager();

if (!process.env.ULLD_TEST_ROOT) {
    throw new Error(
        "Cannot update base app dependencies. The ULLD_TEST_ROOT environment variable is not present at run time.",
    );
}

const target = path.join(process.env.ULLD_DEV_ROOT!, "apps", "template", "package.json");

if (!fs.existsSync(target)) {
    throw new Error(
        `Cannot update base app's dependencies. There's no package.json file available at ${target}.`,
    );
}

const toWorkSpace = Boolean(
    process.argv.length === 3 && process.argv[2] === "toWorkspace",
);

let data = JSON.parse(fs.readFileSync(target, { encoding: "utf-8" }));

const depPaths = [
    "dependencies",
    "devDependencies",
    "peerDependencies",
] as const;

const toRemoteDep = (
    k: (typeof p.packages)[number],
    d: (typeof depPaths)[number],
): any => {
    const oldVersion = data[d][k.name];
    data[d][k.name] = k.content.version;
    console.log(
        `Adjusted ${k.name} from version ${oldVersion} to ${data[d][k.name]}`,
    );
};

const toWorkspaceDep = (
    k: (typeof p.packages)[number],
    d: (typeof depPaths)[number],
): any => {
    const oldVersion = data[d][k.name];
    data[d][k.name] = "workspace:*";
    console.log(
        `Adjusted ${k.name} from version ${oldVersion} to ${data[d][k.name]}`,
    );
};

for (const k of p.packages) {
    for (const d of depPaths) {
        if (data[d] && k.name in data[d]) {
            let currentVersion = data[d][k.name];
            if (!k.content.version) {
                throw new Error(`No version found for ${k.name}`);
            }
            if ((k.content.version !== currentVersion) || toWorkSpace) {
                if (toWorkSpace) {
                    toWorkspaceDep(k, d)
                } else {
                    toRemoteDep(k, d);
                }
            }
        }
    }
}

fs.writeFileSync(target, JSON.stringify(data, null, 4), { encoding: "utf-8" });

process.exit();
