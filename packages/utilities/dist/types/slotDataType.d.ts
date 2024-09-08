import propsExtends from "../utils/buildStaticData.json";
export declare const slotTypes: readonly ["page", "component", "modalPage", "embeddable", "generatedPage"];
export interface SlotDataType {
    path: string;
    clientOnly?: boolean;
    inReduxProvider?: boolean;
    type?: (typeof slotTypes)[number];
    propsExtends?: keyof (typeof propsExtends)["propsExtendsMap"];
}
//# sourceMappingURL=slotDataType.d.ts.map