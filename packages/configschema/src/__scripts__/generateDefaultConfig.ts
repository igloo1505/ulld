import {
    AppConfigSchemaInput,
    AppConfigSchemaOutput,
    appConfigSchema,
} from "../zod/main";
import fs from "fs";
import path from "path";

const targetPath = path.join(
    __dirname,
    "../defaults/generatedDefaultConfigs/base.json",
);
const physicsMathPath = path.join(
    __dirname,
    "../defaults/generatedDefaultConfigs/physicsMath.json",
);
const baseTargetPath = "/Users/bigsexy/Desktop/current/ulldApp/appConfig.ulld.json"

const dummyConfig: AppConfigSchemaInput = {
    fsRoot: "/Users/bigsexy/Desktop/notes/content",
};

const physicsMathConfig: AppConfigSchemaInput = {
    fsRoot: "/Users/bigsexy/Desktop/notes/content",
    noteTypes: [
        {
            fs: "physics",
            id: "physics",
            label: "Physics",
            icon: "physics",
        },
        {
            fs: "math",
            id: "math",
            label: "Math",
            icon: "math",
        },
    ],
};


const configs: { path: string; config: AppConfigSchemaOutput }[] = [
    {
        path: targetPath,
        config: appConfigSchema.parse(dummyConfig),
    },
    {
        path: baseTargetPath,
        config: appConfigSchema.parse(physicsMathConfig),
    },
    {
        path: physicsMathPath,
        config: appConfigSchema.parse(physicsMathConfig),
    },
];


for (const k of configs) {
    if (k.config) {
        let exists = fs.existsSync(k.path);
        if (!exists) {
            throw new Error(
                `parsedBaseConfig targetPath does not exist at ${k.path}`,
            );
        }
        fs.writeFileSync(k.path, JSON.stringify(k.config, null, 4), {
            encoding: "utf-8",
        });
        console.log(`Wrote default config to ${k.path}`);
    }
}
