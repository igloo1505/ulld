// @ts-check

/** @type {import("syncpack").RcFile} */
const config = {
    sortPackages: true,
    dependencyTypes: ["prod"],
    semverGroups: [
        {
            label: "use exact version numbers in production",
            packages: ["**"],
            dependencyTypes: ["prod", "dev"],
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
            dependencies: [
                "citation-js",
                "@citation-js/plugin-csl",
                "@citation-js/plugin-bibtex",
            ],
            packages: ["**"],
            pinVersion: "0.7.14",
        },
    ],
};


/* @ts-ignore */
module.exports = config;
