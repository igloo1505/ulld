import path from "path";
import fs from "fs";
import buildStaticData from "../../../packages/utilities/src/utils/buildStaticData.json";

const packageJsonPath = path.resolve(__dirname, "../package.json");

const toType = process.argv[2];

const fileContent = JSON.parse(
  fs.readFileSync(packageJsonPath, { encoding: "utf-8" }),
) as {
  dependencies?: Record<string, string>;
  devDependencies?: Record<string, string>;
  peerDependencies?: Record<string, string>;
};

const getVersion = (
  item: (typeof buildStaticData.internalPackageData)[number],
): string => {
  return toType === "workspace" ? "workspace:*" : item.currentVersion;
};

const depTypes = [
  "dependencies",
  "devDependencies",
  "peerDependencies",
] as const;

for (const k of buildStaticData.internalPackageData) {
  for (const dt of depTypes) {
    if (fileContent[dt]) {
      if (k.name in fileContent[dt]) {
        fileContent[dt][k.name] = getVersion(k);
      }
    }
  }
}


fs.writeFileSync(packageJsonPath, JSON.stringify(fileContent, null, 2), { encoding: "utf-8" });
