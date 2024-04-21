import { assert } from "chai"
import { PropertyManager } from "../../src/buildClasses/propertyManager"

const manager = new PropertyManager()



describe("PathManager", function() {
    it("distinguishes native plugins properly", function() {
        const beTrue = manager.pluginIsNative("@ulld/navigation")
        const beFalse = manager.pluginIsNative("@ulld/navigation2")
        assert(beTrue, "parsed native plugin successfully")
        assert(beFalse === false, "parsed non-native plugin successfully")
    })
})
