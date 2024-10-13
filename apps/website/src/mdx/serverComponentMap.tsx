import { webComponentMap } from "./componentMap";
import { TypeTableEm } from "#/components/docs/typeTable";
import { AdditionalComponents } from "@ulld/component-map/types";

export const serverComponentMap: AdditionalComponents = [
    ...webComponentMap,
    {
        regex: new RegExp("<TypeDoc"),
        component: TypeTableEm,
        label: "TypeDoc",
    },
];



