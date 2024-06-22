import assert from "assert/strict";
import { TargetPackageJson } from "../classes/pkgJson";
import { buildTestData } from "./testData";

describe("TargetPackageJson", function () {
    it("properly sets isLocalDev", function () {
        let beTrue = new TargetPackageJson(buildTestData.targetDirectory, true);
        let beFalse = new TargetPackageJson(buildTestData.targetDirectory, false);
        assert(beTrue.isLocalDev === true, "Sets isLocalDev to be true correctly.")
        assert(beFalse.isLocalDev === false, "Sets isLocalDev to be false correctly.")
    });
    // it("does execute npm install", function () {
        // let p = new TargetPackageJson(buildTestData.targetDirectory, true);
        // p.installDependencies("npm")
        // assert.
    // });
});
