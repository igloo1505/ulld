import { convertUlldSyntax } from "./convertUlldSyntax.ts";
import { generateComponentMaps } from "./generateComponentMaps.ts";

(async () => {
    await convertUlldSyntax();
    await generateComponentMaps();
})();
