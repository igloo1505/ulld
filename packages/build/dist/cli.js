import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { execute, Config } from '@oclif/core';
// import { platform, arch, release } from 'os';
// import Interfaces from '@oclif/core/interfaces';
// import NodeEnv, { Env } from './util/env.js';
// import { sfStartupLogger, logger } from './logger.js';
export async function run() {
    // configureAutoUpdate(NodeEnv);
    const config = await Config.load({
        root: resolve(fileURLToPath(import.meta.url), '..'),
        enablePerf: true,
    });
    // debugCliInfo(NodeEnv, config);
    return execute({
        loadOptions: config,
    });
}
