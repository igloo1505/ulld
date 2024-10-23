#!/usr/bin/env node
import Pastel, { Options } from 'pastel';

const appOptions: Options = {
    importMeta: import.meta,
    name: 'ulldDev',
    description:
        'Internal development utilities for the ULLD academic note taking framework.',
};

const app = new Pastel(appOptions);

await app.run();
