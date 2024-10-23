import { Box, Text } from 'ink';
import { argument, option } from 'pastel';
import React from 'react';
import { z } from 'zod';
import { globSync } from 'glob';
import path from 'path';
import logSymbols from 'log-symbols';
import fs from 'fs';
import { ulldBlue } from '../../staticData/main.js';
export const args = z.tuple([
    z
        .string()
        .default('.')
        .describe(argument({
        name: 'path',
        description: 'Directory at which tunnel file should be created',
        defaultValueDescription: 'cwd',
    })),
    z.string().default(".js").describe(argument({
        name: "file extension",
        description: "File extension to append to imported file paths."
    }))
]);
export const options = z.object({
    exclude: z
        .string()
        .array()
        .optional()
        .describe(option({
        description: 'File globs to exclude from generated tunnel file.',
        alias: 'x',
    })),
    glob: z
        .string()
        .default('**/*.{ts,tsx}')
        .describe('Glob with which to find files to include'),
    asType: z.boolean().describe(option({
        description: 'Export everything as type',
    })),
});
const ExportedPath = ({ exportedPath }) => {
    return (React.createElement(Box, { flexDirection: "row", justifyContent: "center", alignItems: "flex-start", gap: 2, marginBottom: 0.1, paddingBottom: 0.1 },
        React.createElement(Text, { color: ulldBlue }, logSymbols.success),
        React.createElement(Text, null, exportedPath)));
};
const getExportString = (filePath, sourceFile, fileExt, exportType) => {
    if (!exportType) {
        let fpData = path.parse(filePath);
        filePath = path.join(fpData.dir, `${fpData.name}${fileExt}`);
    }
    let fp = path.relative(path.dirname(sourceFile), filePath);
    if (!fp.startsWith('.')) {
        fp = fp.startsWith('/') ? `.${fp}` : `./${fp}`;
    }
    if (exportType) {
        return `export type * from "${fp}";`;
    }
    return `export * from "${fp}";`;
};
const GenerateTunnelFile = ({ args, options }) => {
    const _cwd = path.isAbsolute(args[0])
        ? args[0]
        : path.resolve(process.cwd(), args[0]);
    const filePaths = globSync(options.glob, {
        cwd: _cwd,
        nodir: true,
        absolute: true,
        ignore: [...(options.exclude || []), 'index.ts'],
    });
    let tunnelPath = path.join(_cwd, 'index.ts');
    let fileContent = filePaths
        .map(fp => getExportString(fp, tunnelPath, args[1], options.asType))
        .join('\n');
    fs.writeFileSync(tunnelPath, fileContent, { encoding: 'utf-8' });
    return (React.createElement(Box, { flexDirection: "column", justifyContent: "center", alignItems: "flex-start" }, filePaths.map(f => {
        return React.createElement(ExportedPath, { exportedPath: f, key: f });
    })));
};
GenerateTunnelFile.displayName = 'GenerateTunnelFile';
export default GenerateTunnelFile;
//# sourceMappingURL=index.js.map