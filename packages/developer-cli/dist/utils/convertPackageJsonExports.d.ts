type ExportTypeKeys = 'src dir string' | 'dist dir object';
export interface ConvertPackageJsonExportsProps {
    dirname: string;
    to: ExportTypeKeys;
}
type ExportType = string | {
    types: string;
    import: string;
    require: string;
};
interface ExportItem {
    key: string;
    value: ExportType;
    type: ExportTypeKeys;
}
export declare const convertExportItem: (item: ExportItem, to: ExportTypeKeys, props: ConvertPackageJsonExportsProps) => ExportItem;
export {};
