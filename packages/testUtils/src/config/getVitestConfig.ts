import { UserConfig } from "vitest/config";
import { getUlldDevRoot } from "./utils.js";
import path from "path";
import reactPlugin from "@vitejs/plugin-react";

interface GetVitestConfigOpts
    extends Omit<
        NonNullable<NonNullable<UserConfig>["test"]>,
        "name" | "environment" | "reporters" | "outFile" | "env" | "coverage"
    > {
    env?: NonNullable<UserConfig["test"]>["environment"];
    packageId: string;
    root?: string;
    /** Include react vitest plugin. */
    react?: boolean;
    coverage?: Omit<
        NonNullable<NonNullable<NonNullable<UserConfig>["test"]>>["coverage"],
        "provider" | "reportsDirectory"
    >;
}

export const getVitestConfig = ({
    include = [],
    react,
    packageId,
    env,
    root,
    coverage = {},
    ...props
}: GetVitestConfigOpts): UserConfig => {
    const testUtilsOutput = path.join(
        getUlldDevRoot("vitestConfig"),
        "packages",
        "testUtils",
        "output",
    );

    const htmlOutputPath = path.join(
        testUtilsOutput,
        "data",
        packageId,
        "index.html",
    );

    const coverageDir = path.join(testUtilsOutput, "coverage");

    return {
        plugins: react ? [reactPlugin()] : [],
        define: {
            "import.meta.vitest": "undefined"
        },
        root,
        test: {
            ...props,
            name: packageId,
            environment: env || "jsdom",
            include: ["__test__/test/**.{ts,tsx}", ...include],
            reporters: [
                "html",
                "default",
                [
                    "html",
                    {
                        outputFile: htmlOutputPath,
                    },
                ],
            ],
            coverage: {
                provider: "v8",
                reportsDirectory: coverageDir,
                ...coverage,
                enabled: true,
                reporter: [
                    "text",
                    [
                        "html",
                        {
                            subdir: packageId,
                        },
                    ],
                    "clover",
                    "json",
                ],
            },
            outputFile: {
                html: htmlOutputPath,
            },
        },
    };
};
