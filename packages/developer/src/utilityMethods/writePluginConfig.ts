import {
    DeveloperConfigOutput,
    internalBuildDeveloperConfigSchema,
} from "@ulld/configschema/developer";
import fs from "fs";
import path from "path";
import { randomUUID } from "node:crypto";
import { transformExportString } from "@ulld/utilities/transformExportString";
import staticBuildData from "@ulld/utilities/buildStaticData";

const getArrWithoutOverlap = <T extends unknown>(
    arr: T[],
    newVals: T[],
    compare: (val1: T, val2: T) => boolean,
) => {
    let vals = newVals;
    for (const k of arr) {
        if (!newVals.some((s) => compare(s, k))) {
            vals.push(k);
        }
    }
    return vals;
};

const getPackageJsonData = (pkgPath: string) => {
    return JSON.parse(fs.readFileSync(pkgPath, { encoding: "utf-8" }));
};

const writeModifiedPackageJson = (pkgPath: string, data: object) => {
    fs.writeFileSync(pkgPath, JSON.stringify(data, null, 4), {
        encoding: "utf-8",
    });
};

const writeComponentIds = (
    dirName: string,
    components: DeveloperConfigOutput["components"],
) => {
    let targetFile = path.join(dirName, "staticComponentIds.json");
    let fileExists = fs.existsSync(targetFile);
    let existingMap = fileExists
        ? JSON.parse(fs.readFileSync(targetFile, { encoding: "utf-8" }))
        : {};
    for (const c of components) {
        if (
            !(c.componentName in existingMap) ||
            existingMap[c.componentName] !== c.componentId
        ) {
            let newId = c.componentId ? c.componentId : randomUUID();
            existingMap[c.componentName] = newId;
        }
    }
    fs.writeFileSync(targetFile, JSON.stringify(existingMap, null, 4), {
        encoding: "utf-8",
    });
};

const getPluginId = (pkgData: object, pluginConfig?: DeveloperConfigOutput) => {
    let data = pkgData as any;
    let pluginId = data["ulld-plugin-id"];
    let shouldWrite = false;
    if (!pluginId) {
        pluginId = randomUUID();
        data["ulld-plugin-id"] = pluginId;
        shouldWrite = true;
    }
    if (pluginConfig) {
        data["ulld-pluginConfig"] = pluginConfig;
        shouldWrite = true;
    }
    return { pluginId, shouldWrite, data };
};

const getExistingExports = (pkgJsonData: {
    exports: Record<string, string>;
}) => {
    return Object.keys(pkgJsonData.exports).map((k) => transformExportString(k));
};

const validateExports = (
    exportStrings: string[],
    config: DeveloperConfigOutput,
) => {
    for (const configKeyItem of staticBuildData.developerConfigKeysWithExportField) {
        if (configKeyItem.isArray) {
            for (const k of (config[
                configKeyItem.key as keyof typeof config
            ] as any[] || [])) {
                if (!exportStrings.includes(k.export)) {
                    throw new Error(
                        `Could not find matching export for ${k.componentName} in your package.json file.`,
                    );
                }
            }
        } else {
            let item = config[configKeyItem.key as keyof typeof config] as {
                export: string;
            };
            if (!exportStrings.includes(item.export)) {
                throw new Error(
                    `Could not find matching export for ${item} in your package.json file.`,
                );
            }
        }
    }
};

export const writePluginConfig = (
    config: DeveloperConfigOutput,
    directory: string,
    appendToPackageJson: boolean | "both" = "both",
) => {
    if (process.env.INTERNAL_DEVELOPMENT) {
        let testDataPath = path.join(
            __dirname,
            "../../../build/src/__test__/data/testData.json",
        );
        let testString = fs.readFileSync(testDataPath, { encoding: "utf-8" });
        let testData = JSON.parse(testString);
        let pages = getArrWithoutOverlap(testData.pages, config.pages, (a, b) =>
            Boolean(a.targetUrl === b.targetUrl && a.export === b.export),
        );
        let components = getArrWithoutOverlap(
            testData.components,
            config.components,
            (a, b) => Boolean(a.export === b.export && a.slot === b.slot),
        );
        let newData = {
            ...testData,
            components,
            pages,
        };
        fs.writeFileSync(testDataPath, JSON.stringify(newData, null, 4), {
            encoding: "utf-8",
        });
    }
    let packageFilePath = path.join(directory, "package.json");
    let pkgData = getPackageJsonData(packageFilePath);
    let existingExports = getExistingExports(pkgData);
    validateExports(existingExports, config);
    let {
        pluginId,
        shouldWrite,
        data: newData,
    } = getPluginId(pkgData, appendToPackageJson ? config : undefined);
    if (shouldWrite) {
        writeModifiedPackageJson(packageFilePath, newData);
    }
    writeComponentIds(directory, config.components);

    let data = internalBuildDeveloperConfigSchema.parse({
        ...config,
        pluginId,
    });

    if (!appendToPackageJson || appendToPackageJson === "both") {
        fs.writeFileSync(
            path.join(directory, "pluginConfig.ulld.json"),
            JSON.stringify(data, null, 4),
            { encoding: "utf-8" },
        );
    }
};
