// import type { StorybookConfig } from "@storybook/react-dom-shim";
import { FrameworkOptions, StorybookConfig } from '@storybook/nextjs';
import { join, dirname } from "path";

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
    return dirname(require.resolve(join(value, "package.json")));
}

const options: FrameworkOptions = {
    builder: {
        lazyCompilation: true
    }
}

const config: StorybookConfig = {
    stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    addons: [
        // getAbsolutePath("@storybook/addon-links"),
        // getAbsolutePath("@storybook/addon-essentials"),
        getAbsolutePath("@storybook/addon-onboarding"),
        getAbsolutePath("@storybook/addon-docs"),
        // getAbsolutePath("storybook-dark-mode"),
        // getAbsolutePath("@storybook/addon-interactions"),
        // getAbsolutePath("storybook-dark-mode"),
    ],
    framework: {
        // name: '@storybook/react-webpack5', // Remove this
        name: getAbsolutePath('@storybook/nextjs'), // Add this
        options,
    },
    docs: {
        autodocs: "tag",
    },
};
export default config;
