import { webComponentMap } from "./componentMap";
import { TypeTableEm } from "#/components/docs/typeTable";
import PlotlyHtml from "../components/academic/plotlyHtml";

export const serverComponentMap = [
    ...webComponentMap,
    {
        regex: new RegExp("<TypeDoc"),
        component: TypeTableEm,
        label: "TypeDoc",
    },
    {
        regex: new RegExp("<PlotlyHtml"),
        component: PlotlyHtml,
        label: "PlotlyHtml",
    },
];
