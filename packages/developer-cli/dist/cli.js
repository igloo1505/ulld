#!/usr/bin/env node
import Pastel from 'pastel';
const appOptions = {
    importMeta: import.meta,
    name: 'ulldDev',
    description: 'Internal development utilities for the ULLD academic note taking framework.',
};
const app = new Pastel(appOptions);
await app.run();
//# sourceMappingURL=cli.js.map