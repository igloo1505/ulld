#!/usr/bin/env node
import Pastel from 'pastel';
const app = new Pastel({
    importMeta: import.meta,
    "name": "ulld",
    "description": "The native ULLD cli tool for working with the ULLD academic note taking framework."
});
await app.run();
//# sourceMappingURL=cli.js.map