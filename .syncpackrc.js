// @ts-check

/** @type {import("syncpack").RcFile} */
const config = {
    sortPackages: true,
    formatRepository: true,
    sortFirst: [
        "name",
        "version",
        "homepage",
        "keywords",
        "funding",
        "author",
        "contributors",
        "type",
        "private",
        "publishConfig",
        "bin",
        "files",
        "scripts",
        "wireit",
        "types",
        "exports",
        "engines",
        "dependencies",
        "devDependencies",
        "peerDependencies",
        "prisma",
        "prettier",
        "xo",
        "ava",
        "packageManager",
        "ulld-pluginConfig",
        "pnpm",
        "license"
    ],
    dependencyTypes: ["prod", "dev", "peer"],
    semverGroups: [
        {
            label: "use exact version numbers in production",
            packages: ["**"],
            dependencyTypes: ["prod", "dev", "peer"],
            dependencies: ["**"],
            range: "",
        },
    ],
    versionGroups: [
        {
            // Rewrite this glob to allow the @ulld/test-utils package to be used in the devDependencies once that package is actually useful.
            dependencies: [
                "@ulld/**",
                // "!@ulld/test-utils"
            ],
            dependencyTypes: ["!peer"],
            isBanned: true,
            packages: ["!@ulld/website"],
            label: "Internal packages should only be under peerDependencies",
        },
        {
            // TODO: Check tailwind and all tailwind related packages like sass, autoprefixer to see if they can be installed only in development.
            dependencies: [
                "eslint**",
                "ts-jest",
                "**jest**",
                "ava",
                "**mocha**",
                "**babel**",
                "**supertest**",
                "**chai**",
                "**cypress**",
                "**playwright**",
                "**testing-library",
                "**prettier**",
                "**test-renderer**",
                "**rollup**",
                "**tsup**",
                "**esbuild**",
                "nyc",
                "xo",
                "knip"
            ],
            dependencyTypes: ["!dev"],
            isBanned: true,
            packages: ["!@ulld/eslint-config", "!@ulld/jest-presets"],
            label: "Linting and test related packages should only be under devDependencies",
        },
        {
            dependencies: [
                "@types/**"
            ],
            dependencyTypes: ["!dev"],
            isBanned: true,
            packages: ["!@ulld/eslint-config"],
            label: "@types/xyz packages should only be under devDependencies",
        },
        {
            dependencies: ["@citation-js/plugin-csl", "@citation-js/plugin-bibtex"],
            packages: ["**"],
            dependencyTypes: ["dev", "peer", "prod"],
            pinVersion: "0.7.14",
            label: "pin citation-js packages"
        },
        {
            dependencies: ["@tailwindcss/typography"],
            packages: ["**"],
            dependencyTypes: ["dev", "peer", "prod"],
            pinVersion: "0.5.13",
            label: "pin tailwind/typography"
            
        },
        {
            dependencies: ["citation-js"],
            packages: ["**"],
            dependencyTypes: ["dev", "peer", "prod"],
            pinVersion: "0.7.15",
            label: "pin citation-js itself"
        },
        {
            dependencyTypes: ["dev"],
            dependencies: ["@types/react-dom"],
            pinVersion: "18.2.25",
            label: "pin @types/react-dom"
        },
        {
            dependencyTypes: ["dev"],
            dependencies: ["@types/react"],
            pinVersion: "^18.0.32",
            packages: [
                "@ulld/developer-cli",
                "@ulld/cli",
            ],
            label: "pin @types/react in the ink based packages"
        },
        {
            dependencyTypes: ["dev"],
            dependencies: ["@types/react"],
            pinVersion: "18.2.79",
            packages: [
                "!@ulld/developer-cli",
                "!@ulld/cli",
            ],
            label: "Pin @types/react in packages not based on ink."
        },
        {
            dependencies: ["react", "react-dom"],
            packages: ["!@ulld/website"],
            pinVersion: "18.2.0",
            label: "Pin react and react-dom in all packages except @ulld/website"
        },
        {
            dependencies: ["next"],
            packages: ["!@ulld/website"],
            pinVersion: "14.2.3",
            label: "Pin Next.js"
        },
        {
            dependencies: ["react-pdf"],
            packages: ["**"],
            pinVersion: "7.7.1",
            label: "Pin react-pdf"
        },
        {
            dependencies: ["@react-pdf/renderer"],
            packages: ["**"],
            pinVersion: "3.3.8",
            label: "Pin @react-pdf/renderer"
        },
        {
            dependencies: ["zod"],
            packages: ["**"],
            pinVersion: "3.23.8",
            label: "Pin zod"
        },
        {
            dependencies: ["shiki"],
            packages: ["**"],
            pinVersion: "1.1.7",
            label: "Pin shiki"
        },
        {
            dependencies: ["@shikijs/transformers"],
            packages: ["**"],
            pinVersion: "1.6.4",
            label: "Pin @shikijs/transformers"
        },
        {
            dependencies: ["@shikijs/twoslash"],
            packages: ["**"],
            pinVersion: "1.5.2",
            label: "Pin @shikijs/twoslash"
        },
        {
            dependencies: ["lucide-react"],
            packages: ["**"],
            pinVersion: "0.428.0",
            label: "Pin lucide-react"
        },
        {
            dependencies: ["tsx"],
            packages: ["**"],
            pinVersion: "latest",
            label: "Pin tsx to @latest"
        },
        {
            dependencies: ["gray-matter"],
            packages: ["**"],
            pinVersion: "latest",
            label: "Pin gray-matter to latest"
        },
        {
            dependencies: ["@mdx-js/react", "@mdx-js/mdx"],
            packages: ["**"],
            pinVersion: "3.0.1",
            label: "Pin @mdx-js/react and @mdx-js/mdx"
        },
        {
            dependencies: ["fumadocs-core"],
            packages: ["**"],
            pinVersion: "13.4.1",
            label: "Pin funadocs/core"
        },
        {
            dependencies: ["fumadocs-docgen"],
            packages: ["**"],
            pinVersion: "1.1.0",
            label: "Pin fumadocs-docgen"
        },
        {
            dependencies: ["fumadocs-twoslash"],
            packages: ["**"],
            pinVersion: "1.1.2",
            label: "Pin fumadocs-twoslash"
        },
        {
            dependencies: ["fumadocs-typescript"],
            packages: ["**"],
            pinVersion: "2.0.1",
            label: "Pin fumadocs-typescript"
        },
        {
            dependencies: ["fumadocs-ui"],
            packages: ["**"],
            pinVersion: "13.4.1",
            label: "Pin fumadocs-ui"
        },
        {
            dependencies: ["plotly.js"],
            packages: ["**"],
            pinVersion: "2.30.0",
            label: "Pin plotly.js"
        },
        {
            dependencies: ["react-plotly.js"],
            packages: ["**"],
            pinVersion: "2.6.0",
            label: "Pin react-plotly"
        },
        {
            dependencies: ["ink"],
            packages: ["**"],
            pinVersion: "4.1.0",
            label: "Pin ink to 4.1.0"
        },
        {
            dependencies: ["pastel"],
            packages: ["**"],
            pinVersion: "2.0.0",
            label: "Pin pastel"
        },
    ],
};

/* @ts-ignore */
module.exports = config;
