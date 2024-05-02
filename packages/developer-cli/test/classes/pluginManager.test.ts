import { assert } from "chai";
import {z} from 'zod'
import { MergeManager } from "../../src/buildClasses/mergeManager";
import {
    testMergeManagerProps,
    testValidPlugins,
    testInvalidPlugins,
} from "../staticTestData";
import fs from "fs";
import { ULLDPluginConfig } from "@ulld/developer/pluginConfig"
import { PluginConfig, pluginConfigSchema, requiredPluginConfigPaths } from "@ulld/developer-schemas/pluginConfig";



describe("PluginManager", function () {
    it("finds config successfully.", function () {
        const manager = new MergeManager(testMergeManagerProps(true));
        manager.gather();
        for (const k of testValidPlugins) {
            const plugin = manager.plugins.find((a) => a.name === k.name);
            assert.exists(plugin?.packageConfig, "packageConfig is defined");
        }
    });
    it("collects required paths", function() {
        const manager = new MergeManager(testMergeManagerProps(true));
        manager.gather();
        for (const k of testValidPlugins) {
            const plugin = manager.plugins.find((a) => a.name === k.name)?.packageConfig
            const hasAllRequiredFields = requiredPluginConfigPaths.every((w) => Boolean(plugin?.paths?.[w]))
            assert.isTrue(hasAllRequiredFields, "packageConfig is defined");
        }
        })
    it("getPluginManager returns ULLDPluginConfig", function() {
        const manager = new MergeManager(testMergeManagerProps(true));
        manager.gather();
        for (const k of testValidPlugins) {
            const plugin = manager.plugins.find((a) => a.name === k.name);
            const isValidPlugin = plugin?.getPluginManager() instanceof ULLDPluginConfig
            assert.isTrue(isValidPlugin, "returns ULLDPluginConfig");
        }
    })
})
