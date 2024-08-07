import { MDXComponents } from "mdx/types";
import dynamic from "next/dynamic";
import { EmbeddableClientComponents, conditionalClientComponents } from "../client/componentList";
import { AdditionalComponentType, AdditionalComponents, ConditionalComponentProps, ConditionalComponentQuery } from "../types";
import { conditionallyAddComponent } from "../utils";
import { conditionalServerComponents } from "./componentList";
const Admonition = dynamic(() => import("@ulld/embeddable-components/components/server/admonition").then((a) => a.Admonition))
const ErrorMargin = dynamic(() => import("@ulld/embeddable-components/academic/error").then((a) => a.ErrorMargin))
const Abstract = dynamic(() => import("@ulld/embeddable-components/academic/abstract").then((a) => a.Abstract))
const TableFit = dynamic(() => import("@ulld/embeddable-components/format/tableFit").then((a) => a.TableFit))
// const NotebookCell = dynamic(() => import("../jupyter/notebooks/cell"))
// // const JupyterConsole = dynamic(() => import("../jupyter/console/index"))
// const Pdf = dynamic(() => import("../functionality/pdf/MdxPdfView"))
// const SurfacePlot = dynamic(() => import("./emeddedComponents/plots/surfacePlot"))
// const TabGroup = dynamic(() => import("./emeddedComponents/tabs/tabGroup"))
// const Tab = dynamic(() => import("./emeddedComponents/tabs/tab"))
// const TagBar = dynamic(() => import("./emeddedComponents/tagbar"))
// const WithSidebar = dynamic(() => import("./emeddedComponents/withSidebar"))
// const Diagram = dynamic(() => import("./emeddedComponents/diagrams/pixi"))
// const Grid = dynamic(() => import("./emeddedComponents/grid"))
// const GridItem = dynamic(() => import("./emeddedComponents/grid").then((l) => l.GridItem))
// const Video = dynamic(() => import("./emeddedComponents/media/video"))
// const ModelView = dynamic(() => import("./emeddedComponents/modelView/ModelView"))
// const Card = dynamic(() => import("./emeddedComponents/card"))
// const LinePlot = dynamic(() => import("./emeddedComponents/plots/linePlot"))
// const RemoteMarkdown = dynamic(() => import("./emeddedComponents/remote/RemoteMarkdown"))
// const Carousel = dynamic(() => import("./emeddedComponents/media/carousel"))
// const HtmlFile = dynamic(() => import("./emeddedComponents/HtmlFile"))
// const Sidebar = dynamic(() => import("./emeddedComponents/layout/Sidebar"))
// const Latex = dynamic(() => import("./emeddedComponents/latex"))
// const VideoTimestampLink = dynamic(() => import("./emeddedComponents/media/videoTimestampLink"))
// const Highlight = dynamic(() => import("./emeddedComponents/Hl"))
// const Underline = dynamic(() => import("./emeddedComponents/Underline"))
// const Tooltip = dynamic(() => import("./emeddedComponents/TT"))
// const DivElement = dynamic(() => import("./Div"))
// const Small = dynamic(() => import("./emeddedComponents/text/small"))
// const Large = dynamic(() => import("./emeddedComponents/text/large"))
// const Centered = dynamic(() => import("./emeddedComponents/text/centeredText"))
// const Lead = dynamic(() => import("./emeddedComponents/text/lead"))
// const Resize = dynamic(() => import("./emeddedComponents/resizable/resize"))
// const ResizePanel = dynamic(() => import("./emeddedComponents/resizable/resizePanel"))
// const MarkdownModal = dynamic(() => import("./emeddedComponents/modals/markdownModal"))
// const Button = dynamic(() => import("./emeddedComponents/button"))
// const CollapsablePanel = dynamic(() => import("./emeddedComponents/layout/interactive/collapsableSidePanel/collapsableSidePanel"))
// const VSpace = dynamic(() => import("./emeddedComponents/layout/vspace"))
// const InternalMermaid = dynamic(() => import("./emeddedComponents/diagrams/mermaid"))
// const EmbeddedImage = dynamic(() => import("./emeddedComponents/image"))
// const EmbeddedSvg = dynamic(() => import("./emeddedComponents/svg"))
// const Vectorize = dynamic(() => import("./emeddedComponents/vectorize"))
// const Quote = dynamic(() => import("./emeddedComponents/text/quote"))
// const Hide = dynamic(() => import("./emeddedComponents/hide"))
// const FlexRow = dynamic(() => import("./layout/flexRow"))
// const NoMaxHeight = dynamic(() => import("./layout/noTableHeightLimit"))
// const Equation = dynamic(() => import("./utility/equationWrapper"))
// const EqRef = dynamic(() => import("./utility/equationRef"))
// const EquationTag = dynamic(() => import("./utility/equationTag"))
// const DefinitionTag = dynamic(() => import("./utility/definitionTag"))
// const Boxed = dynamic(() => import("./utility/boxed"))
// const Tikz = dynamic(() => import("./emeddedComponents/tikz"))
// const Color = dynamic(() => import("./emeddedComponents/Color"))


type EmbeddableServerComponents = typeof Admonition | typeof ErrorMargin | typeof Abstract



export const getConditionalServerComponents = <J extends AdditionalComponentType>(content: string, opts: ConditionalComponentProps, extraComponents: AdditionalComponents<J> = []) => {
    let components: { [k: string]: ConditionalComponentQuery<EmbeddableClientComponents & J>['component'] } = {}
    for (const k of conditionalServerComponents) {
        conditionallyAddComponent(k, content, opts, components)
    }
    for (const k of extraComponents) {
        conditionallyAddComponent(k, content, opts, components)
    }
    return components satisfies MDXComponents
}

