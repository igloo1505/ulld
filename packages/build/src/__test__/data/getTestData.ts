import { ulldSlots } from "@ulld/configschema/slotsSchema";
import { PluginComponent } from "../../classes/component";
import { UlldBuildProcess } from "../../classes/build";
import { randomFromArr, forN } from "@ulld/utilities/listUtils";
import { UlldPlugin } from "../../classes/plugin";
import { PluginSlot } from "../../classes/slot";
import { PluginSlotKey } from "@ulld/configschema/developerTypes";
import { PluginPage } from "../../classes/page";
import testData from "./testData.json" with {type: "json"};
import { TargetPaths } from "../../classes/paths";

let letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

const withOverlap = (n: number) => Math.ceil(n / 3);

const getRandomId = (n: number = 10) =>
    forN(n, () => randomFromArr(letters)).join("");

const getRandomSubSlots = (n: number) => forN(withOverlap(n), () => getRandomId());

const getRandomSlot = (): PluginSlotKey => randomFromArr(ulldSlots) as PluginSlotKey

export const getRandomComponents = (n: number = 15, slot: PluginSlotKey, _subSlots?: string[]) => {
    const overlap = withOverlap(n)
    const pluginNames = forN(overlap, () => getRandomId(5));
    const parentSlot = slot || getRandomId();
    const slots = ulldSlots.slice(overlap);
    const subSlots = _subSlots || getRandomSubSlots(n)


    const testComponents = forN(
        n,
        () =>
            new PluginComponent(
                {
                    slot: slot,
                    export: getRandomId(),
                },
                {
                    pluginName: randomFromArr(slots),
                    parentSlot: slot
                },
            ),
    );
    return testComponents;
};

const getRandomPages = (n: number = 5, pageOptions?: string[], paths: TargetPaths) => {
    let pageOpts = pageOptions || getRandomSubSlots(10)
    const targetUrl = randomFromArr(pageOpts)
    return forN(n, (i) => new PluginPage({
        targetUrl,
        export: getRandomId()
    }, "test", i, paths))
}

const getRandomPackages = (
    n: number = 20,
    testDir: string = "/Users/bigsexy/Desktop/current/ulldApp",
    nComponents: number = 10,
    nPages: number = 5,
): UlldPlugin[] => { 
    const _randomSubSlots = getRandomSubSlots(nComponents)
    const _randomPages = getRandomSubSlots(n)
    const paths = new TargetPaths(testDir)
     return forN(n, () => {
        let p = new UlldPlugin(paths, getRandomId())
        p.slot = new PluginSlot(p.name, getRandomSlot())
        p.pages = getRandomPages(nPages, _randomPages, paths)
        p.components = getRandomComponents(nComponents, p.slot.slot, _randomSubSlots)
        return p
    })
};

export const getTestBuild = (
    testDir: string = "/Users/bigsexy/Desktop/current/ulldApp",
    packages: number = 15,
) => {
    const build = new UlldBuildProcess(testDir);
    build.plugins = getRandomPackages();
    return build;
};
