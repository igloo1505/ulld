import fs from 'fs';
import path from 'path';

type ExportTypeKeys = 'src dir string' | 'dist dir object';

export interface ConvertPackageJsonExportsProps {
    dirname: string;
    to: ExportTypeKeys;
}

type ExportType =
    | string
    | {
        types: string;
        import: string;
        require: string;
    };

interface ExportItem {
    key: string;
    value: ExportType;
    type: ExportTypeKeys;
}

const replaceExtension = (l: string, extension: `.${string}`) => {
    let newL = l;
    if (l.endsWith('.d.ts')) {
        newL = newL.slice(0, newL.length - 5);
    } else {
        newL = newL.slice(0, newL.lastIndexOf('.'));
    }
    return `${newL}${extension}`;
};

const getPath = (l: string, dir: 'src' | 'dist', extension: `.${string}`) => {
    let newL = l;
    if (dir === 'src' && newL.startsWith('./dist')) {
        newL = newL.replace('./dist', './src');
    } else if (dir === 'dist' && newL.startsWith('./src')) {
        newL = newL.replace('./src', './dist');
    }
    return replaceExtension(newL, extension);
};

const getFileType = (
    filePath: string,
    props: ConvertPackageJsonExportsProps,
) => {
    let _tsPath = replaceExtension(filePath, '.ts');
    let tsPath = path.join(props.dirname, _tsPath);
    let _tsxPath = replaceExtension(filePath, '.tsx');
    let tsxPath = path.join(props.dirname, _tsxPath);
    if (fs.existsSync(tsPath)) {
        return _tsPath;
    }
    if (fs.existsSync(tsxPath)) {
        return _tsxPath;
    }

    let _jsonPath = replaceExtension(filePath, '.json');

    if (fs.existsSync(path.join(props.dirname, _jsonPath))) {
        return _jsonPath;
    }

    throw new Error(`Could not find a path that exists for file ${filePath}`);
};

export const convertExportItem = (
    item: ExportItem,
    to: ExportTypeKeys,
    props: ConvertPackageJsonExportsProps,
): ExportItem => {
    if (to === 'dist dir object') {
        return typeof item.value === 'object'
            ? item
            : {
                ...item,
                value: {
                    types: getPath(item.value, 'dist', '.d.ts'),
                    import: getPath(item.value, 'dist', '.mjs'),
                    require: getPath(item.value, 'dist', '.cjs'),
                },
            };
    }
    if (to === 'src dir string') {
        let value =
            typeof item.value === 'string'
                ? item.value
                : getFileType(getPath(item.value.import, 'src', '.ts'), props);
        if (!value) {
            throw new Error(`Could not find file for ${item.value}`);
        }
        return typeof item.value === 'string'
            ? item
            : {
                ...item,
                value,
            };
    }
    return item;
};
