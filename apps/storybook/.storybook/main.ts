import type { StorybookConfig } from "@storybook/nextjs";
import { join, dirname } from "path";

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
    return dirname(require.resolve(join(value, "package.json")));
}


const config: StorybookConfig = {
    stories: [
        "../stories/**/*.mdx",
        "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    ],
    core: {
        disableTelemetry: true,
        builder: {
            name: "@storybook/builder-webpack5",
            options: {}
        }
    },
    addons: [
        getAbsolutePath("@storybook/addon-onboarding"),
        getAbsolutePath("@storybook/addon-links"),
        getAbsolutePath("@storybook/addon-essentials"),
        // getAbsolutePath("@chromatic-com/storybook"),
        getAbsolutePath("@storybook/addon-interactions"),
    ],
    framework: {
        name: getAbsolutePath("@storybook/nextjs"),
        options: {},
    },
    docs: {
        autodocs: "tag",
        // autodocs: false,
    },
    features: { experimentalRSC: true },
    build: {
        test: {
            disableDocgen: true,
            disableSourcemaps: true,
            disableAutoDocs: true
        },
    },
    typescript: {
        reactDocgen: "react-docgen-typescript",
        reactDocgenTypescriptOptions: {
            exclude: [
                "./node_modules/**",
                "/*/slice/**.ts"
            ]
        }
    }
};


export default config;
