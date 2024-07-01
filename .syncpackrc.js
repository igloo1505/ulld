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
      range: ""
    }
  ]
}


/* @ts-ignore */
module.exports = config
