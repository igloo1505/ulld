import { autoSetting } from "@ulld/database/internalDatabaseTypes";
export declare const getDbAutoSettings: (type?: autoSetting) => Promise<{
    id: number;
    type: import(".prisma/client").$Enums.autoSetting;
    glob: string;
    value: string;
}[]>;
//# sourceMappingURL=getDbAutosetting.d.ts.map