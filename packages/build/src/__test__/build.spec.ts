import assert from "assert/strict";
import { getTestBuild } from "./data/getTestData";

describe("UlldBuildProcess", function () {

    it("Properly gathers slot conflicts", function () {
        const b = getTestBuild(undefined, 300)
        b.gatherSlotConflicts()
        assert(b.slotConflicts.length > 0, "Found slot conflicts")
    });
    // it("does execute npm install", function () {
        // let p = new TargetPackageJson(buildTestData.targetDirectory, true);
        // p.installDependencies("npm")
        // assert.
    // });
});
