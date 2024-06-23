import { getTestBuild } from "../__test__/data/getTestData";
import { UlldBuildProcess } from "./build";
import { PluginComponent } from "./component";

export class OutputManager {
    constructor(public build: UlldBuildProcess){

    }

    getComponentMapFileAsString() {
        let s = `import { AdditionalComponents } from "@ulld/component-map/types";
${this.build.plugins.map((p) => p.getComponentMapImports()).join("")}

export const webComponentMap: AdditionalComponents<any> = [
${this.build.plugins.map((p) => p.getComponentMapItemsAsString()).join("")}
];
`;
        return s;
    }

}



(async () => {
    const b = getTestBuild(undefined, 1);
    b.plugins[0].components = [
        new PluginComponent(
            {
                componentName: "LandingPageBetaRelease",
                slot: "landingPage",
                export: "beta",
                embeddable: [
                    {
                        regexToInclude: "<Test",
                        label: "Test"
                    },
                    {
                        regexToInclude: "<Testicle",
                        label: "Testicle"
                    },
                ],
            },
            {
                pluginName: "test",
                parentSlot: "components",
            },
        ),
    ];
    let o = new OutputManager(b)
    console.log(o.getComponentMapFileAsString());
})();
