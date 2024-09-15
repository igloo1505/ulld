// @ts-check

/** @type {import("syncpack").RcFile} */
const config = {
    sortPackages: true,
    dependencyTypes: [
        "prod",
        "dev",
        "peer"
    ],
    semverGroups: [
        {
            label: "use exact version numbers in production",
            packages: ["**"],
            dependencyTypes: [
                "prod",
                "dev",
                "peer"
            ],
            dependencies: ["**"],
            range: "",
        },
    ],
    versionGroups: [
        {
            dependencies: ["@ulld/**"],
            dependencyTypes: ["!peer"],
            isBanned: true,
            packages: ["!@ulld/website"],
            label: "Internal packages should only be under peerDependencies",
        },
        {
            dependencies: ["@citation-js/plugin-csl", "@citation-js/plugin-bibtex"],
            packages: ["**"],
            dependencyTypes: ["dev", "peer", "prod"],
            pinVersion: "0.7.14",
        },
        {
            dependencies: ["citation-js"],
            packages: ["**"],
            dependencyTypes: ["dev", "peer", "prod"],
            pinVersion: "0.7.15",
        },
        {
            dependencyTypes: ["dev"],
            dependencies: ["@types/react-dom"],
            pinVersion: "18.2.25",
        },
        {
            dependencyTypes: ["dev"],
            dependencies: ["@types/react"],
            pinVersion: "18.2.79",
        },
        {
            dependencies: ["react", "react-dom"],
            packages: ["!@ulld/website"],
            pinVersion: "18.2.0",
        },
        {
            dependencies: ["next"],
            packages: ["!@ulld/website"],
            pinVersion: "14.2.3",
        },
        {
            dependencies: ["gray-matter"],
            packages: ["**"],
            pinVersion: "^4.0.3"
        },
        {
            dependencies: ["react-pdf"],
            packages: ["**"],
            pinVersion: "7.7.1"
        },
        {
            dependencies: ["@react-pdf/renderer"],
            packages: ["**"],
            pinVersion: "3.3.8"
        },
        {
            dependencies: ["zod"],
            packages: ["**"],
            pinVersion: "latest"
        },

        {
            dependencies: ["shiki"],
            packages: ["**"],
            pinVersion: "1.1.7"
        },

        {
            dependencies: ["@shikijs/transformers"],
            packages: ["**"],
            pinVersion: "1.6.4"
        },

        {
            dependencies: ["@shikijs/twoslash"],
            packages: ["**"],
            pinVersion: "1.5.2"
        },

        {
            dependencies: ["lucide-react"],
            packages: ["**"],
            pinVersion: "0.344.0"
        },

        {
            dependencies: ["tsx"],
            packages: ["**"],
            pinVersion: "latest"
        },

        {
            dependencies: ["gray-matter"],
            packages: ["**"],
            pinVersion: "latest"
        },

        {
            dependencies: [
                "@mdx-js/react",
                "@mdx-js/mdx",
            ],
            packages: ["**"],
            pinVersion: "3.0.1"
        },
        {
            dependencies: ["fumadocs-core"],
            packages: ["**"],
            pinVersion: "13.4.1"
        },
        {
            dependencies: ["fumadocs-docgen"],
            packages: ["**"],
            pinVersion: "1.1.0"
        },
        {
            dependencies: ["fumadocs-twoslash"],
            packages: ["**"],
            pinVersion: "1.1.2"
        },
        {
            dependencies: ["fumadocs-typescript"],
            packages: ["**"],
            pinVersion: "2.0.1"
        },
        {
            dependencies: ["fumadocs-ui"],
            packages: ["**"],
            pinVersion: "13.4.1"
        },
        {
            dependencies: ["plotly.js"],
            packages: ["**"],
            pinVersion: "2.30.0"
        },
        {
            dependencies: ["react-plotly.js"],
            packages: ["**"],
            pinVersion: "2.6.0"
        },
    ],
};

/* @ts-ignore */
module.exports = config;
