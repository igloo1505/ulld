import {
    conditionalClientComponents,
    EmbeddableClientComponents,
} from "../client/componentList";
import { ConditionalComponentQuery } from "../types";
import dynamic from "next/dynamic";
const Admonition = dynamic(() =>
    import("@ulld/embeddable-components/components/server/admonition").then(
        (a) => a.Admonition,
    ),
);
// const NotebookCell = dynamic(() => import("../jupyter/notebooks/cell"))
// // const JupyterConsole = dynamic(() => import("../jupyter/console/index"))
// const SurfacePlot = dynamic(() => import("./emeddedComponents/plots/surfacePlot"))
// const WithSidebar = dynamic(() => import("./emeddedComponents/withSidebar"))
// const Diagram = dynamic(() => import("./emeddedComponents/diagrams/pixi"))
// const LinePlot = dynamic(() => import("./emeddedComponents/plots/linePlot"))
// const RemoteMarkdown = dynamic(() => import("./emeddedComponents/remote/RemoteMarkdown"))
// const Carousel = dynamic(() => import("./emeddedComponents/media/carousel"))
// const HtmlFile = dynamic(() => import("./emeddedComponents/HtmlFile"))
// const Sidebar = dynamic(() => import("./emeddedComponents/layout/Sidebar"))
// const Latex = dynamic(() => import("./emeddedComponents/latex"))
// const VideoTimestampLink = dynamic(() => import("./emeddedComponents/media/videoTimestampLink"))
// const Tooltip = dynamic(() => import("./emeddedComponents/TT"))
// const Resize = dynamic(() => import("./emeddedComponents/resizable/resize"))
// const ResizePanel = dynamic(() => import("./emeddedComponents/resizable/resizePanel"))
// const MarkdownModal = dynamic(() => import("./emeddedComponents/modals/markdownModal"))
// const Button = dynamic(() => import("./emeddedComponents/button"))
// const CollapsablePanel = dynamic(() => import("./emeddedComponents/layout/interactive/collapsableSidePanel/collapsableSidePanel"))
// const EmbeddedSvg = dynamic(() => import("./emeddedComponents/svg"))
// const Vectorize = dynamic(() => import("./emeddedComponents/vectorize"))
// const Hide = dynamic(() => import("./emeddedComponents/hide"))
// const FlexRow = dynamic(() => import("./layout/flexRow"))
// const NoMaxHeight = dynamic(() => import("./layout/noTableHeightLimit"))
// const DefinitionTag = dynamic(() => import("./utility/definitionTag"))
// const Tikz = dynamic(() => import("./emeddedComponents/tikz"))

const clientComponents = conditionalClientComponents;
const clientOverrides: typeof conditionalClientComponents = [
    {
        regex: new RegExp(`<Admonition`),
        component: Admonition,
        label: "Admonition",
    },
];

let clientOverrideNames = clientOverrides.map((x) => x.label);

let filtered = clientComponents.filter((x) =>
    clientOverrideNames.includes(x.label),
);

for (const k of filtered) {
    if (process.env.ULLD_DEV_RUNTIME) {
        console.log(
            `Remove the ${k.label} component from the client component list being provided to the server components to avoid uneccessary load weight.`,
        );
    }
}

let serverComponents = clientComponents.map((x) =>
    clientOverrideNames.includes(x.label)
        ? clientOverrides.find((j) => j.label === x.label)
        : x,
);

export const conditionalServerComponents: ConditionalComponentQuery<EmbeddableClientComponents>[] =
    serverComponents as any;
