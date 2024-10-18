import { argument, option } from 'pastel';
import React from 'react';
import { z } from 'zod';
import { getPathFromArgument } from '../../utils/getPathFromArgument.js';
import { convertExportItem } from '../../utils/convertPackageJsonExports.js';
import path from 'path';
import fs from 'fs';
import { Box, Text } from 'ink';
import { Alert, Badge } from '@inkjs/ui';
import logSymbols from 'log-symbols';

export const args = z.tuple([
    z
        .string()
        .default('.')
        .describe(
            argument({
                name: 'path',
                description: 'Directory at which tunnel file should be created',
                defaultValueDescription: 'cwd',
            }),
        ),
]);

interface PackageJsonExportsCommandProps {
    /* options: z.infer<typeof options> */
    args: z.infer<typeof args>;
}

interface ExportObject {
    types?: string;
    import: string;
    require: string;
}

type PackageJsonObject = {
    exports?: Record<string, string | ExportObject>;
};

const PackageJsonExportsCommand = ({ args }: PackageJsonExportsCommandProps) => {
    const _path = getPathFromArgument(args[0]);
    const packageJsonPath = _path.endsWith('package.json')
        ? _path
        : path.join(_path, 'package.json');
    if (!fs.existsSync(packageJsonPath)) {
        return <Alert variant="error">No package.json path found.</Alert>;
    }

    let fileContent = JSON.parse(
        fs.readFileSync(packageJsonPath, { encoding: 'utf-8' }),
    ) as PackageJsonObject;

    let isModified = false;

    if (fileContent.exports) {
        for (const x in fileContent.exports) {
            let val = fileContent.exports[x]!;
            if (typeof val === 'string') {
                let exportItem = convertExportItem(
                    {
                        key: x,
                        value: val,
                        type:
                            typeof val === 'string' ? 'src dir string' : 'dist dir object',
                    },
                    'dist dir object',
                    {
                        dirname: path.dirname(packageJsonPath),
                        to: 'dist dir object',
                    },
                );
                if (exportItem.value) {
                    fileContent.exports[x] = exportItem.value;
                    isModified = true;
                }
            }
        }
    }

    if (isModified) {
        fs.writeFileSync(packageJsonPath, JSON.stringify(fileContent, null, 2), {
            encoding: 'utf-8',
        });
    }

    return (
        <Box
            flexDirection="row"
            justifyContent="flex-start"
            alignItems="center"
            gap={2}
        >
            <Text>{logSymbols.success}</Text>
            <Text>{`Successfully set export fields for package.json at ${packageJsonPath}`}</Text>
        </Box>
    );
};

PackageJsonExportsCommand.displayName = 'PackageJsonExportsCommand';

export default PackageJsonExportsCommand;
