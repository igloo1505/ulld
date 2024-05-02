import { assert } from "chai";
import { MergeManager } from "../../src/buildClasses/mergeManager";
import {
    testMergeManagerProps,
    testValidPlugins,
    testInvalidPlugins,
} from "../staticTestData";
import fs from "fs";



// TODO: Make sure to install them in the target test directory. If valid plugins are not installed this will fail.
describe("MergeManager", function () {
    it("finds valid plugins", function () {
        const manager = new MergeManager(testMergeManagerProps(true));
        assert(
            manager.getPluginStatus(testValidPlugins[0].name).status === "installed",
            `valid plugin found successfully ${testValidPlugins[0]}`,
        );
        assert(
            manager.getPluginStatus(testValidPlugins[1].name).status === "installed",
            `valid plugin found successfully ${testValidPlugins[1]}`,
        );
    }),
        it("gathers data without error", function () {
            const manager = new MergeManager(testMergeManagerProps(true));
            manager.gather();
            for (const k of testValidPlugins) {
            const plugin = manager.plugins.find((j) => j.name === k.name)
                assert.isTrue(
                    plugin?.status === "installed",
                    `${k} has correct install status`,
                );
                assert.isTrue(
                    plugin?.packageJsonStatus === "present",
                    `${k} has correct package.json status`,
                );
                assert.isString(
                    plugin?.path,
                    `${k} has a path`,
                );
            }
        }),
        it("gathers with valid paths", function () {
            const manager = new MergeManager(testMergeManagerProps(true));
            manager.gather();
            for (const k of testValidPlugins) {
                const plugin = manager.plugins.find((a) => a.name === k.name)
                const _path = plugin?.path as string;
                assert.isTrue(fs.existsSync(_path), `${k} has a path that exists`);
            }
        });
});
