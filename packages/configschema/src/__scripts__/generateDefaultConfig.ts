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
const baseTargetPath =
    "/Users/bigsexy/Desktop/current/ulldApp/appConfig.ulld.json";

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

const personalConfig: AppConfigSchemaInput = {
    fsRoot: "/Users/bigsexy/Desktop/notes/content",
    code: {
        editor: {
            useVimMode: true,
        },
    },
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

        {
            fs: "cheatsheets",
            id: "cheatsheet",
            label: "Cheatsheets",
            icon: "newspaper",
        },
        {
            fs: "docs",
            id: "docs",
            label: "Docs",
            icon: "paperclip",
        },
        {
            fs: "guides",
            id: "guide",
            label: "Guides",
            icon: "gem",
        },
        {
            fs: "health",
            id: "health",
            label: "Health",
            icon: "heart",
        },
        {
            fs: "journal",
            id: "journal",
            label: "Journal",
            icon: "pen",
        },

        {
            fs: "quickNotes",
            id: "quickNotes",
            label: "Quick Notes",
            icon: "calendar-plus-2",
        },
        {
            fs: "quickThoughts",
            id: "quickThoughts",
            label: "Quick Thought",
            icon: "clock",
        },
        {
            fs: "recipes",
            id: "recipes",
            label: "Recipes",
            icon: "egg",
        },
        {
            fs: "references",
            id: "references",
            label: "References",
            icon: "glasses",
        },
        {
            fs: "tech",
            id: "tech",
            label: "Tech",
            icon: "cpu",
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
    {
        path: path.join(
            __dirname,
            "../defaults/generatedDefaultConfigs/personal/appConfig.ulld.json",
        ),
        config: appConfigSchema.parse(personalConfig),
    },
    {
        path: "/Users/bigsexy/dev-utils/ulld/appConfig.ulld.json",
        config: appConfigSchema.parse(personalConfig),
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
