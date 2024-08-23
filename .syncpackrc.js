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
    ],
};

/* @ts-ignore */
module.exports = config;
