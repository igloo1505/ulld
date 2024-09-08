import "../../chunk-7UBRHILH.js";

// src/__test__/data/testData.json
var pages = [
  {
    targetUrl: "@modal/(.)equations/details/[equationId]",
    export: "equationModal",
    exportsPageProps: true
  },
  {
    targetUrl: "equations/add",
    export: "addEquationPage",
    exportsPageProps: true
  },
  {
    targetUrl: "equations/details/[equationId]",
    export: "equationDetailsPage",
    exportsPageProps: true
  },
  {
    targetUrl: "equations",
    export: "equationsPage",
    exportsPageProps: true
  }
];
var components = [
  {
    componentName: "LandingPageBetaRelease",
    slot: "landingPage",
    export: "beta"
  }
];
var testData_default = {
  pages,
  components
};
export {
  components,
  testData_default as default,
  pages
};
//# sourceMappingURL=testData.js.map