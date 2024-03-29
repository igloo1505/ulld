import { clientLogger } from "@ulld/logger/client";
import dynamic from "next/dynamic";
import { ComponentType } from "react";
const Admonition = dynamic(() => import("./emeddedComponents/CLIENT_COMPONENTS/admonition/admonition").then((a) => a.Admonition))
const NotebookCell = dynamic(() => import("../jupyter/notebooks/cell").then((a) => a.NotebookCell))
// // const JupyterConsole = dynamic(() => import("../jupyter/console/index"))
// const Pdf = dynamic(() => import("../functionality/pdf/MdxPdfView"))
const TabGroup = dynamic(() => import("./emeddedComponents/tabs/tabGroup").then((a) => a.TabGroup))
const Tab = dynamic(() => import("./emeddedComponents/tabs/tab").then((a) => a.Tab))
// const TagBar = dynamic(() => import("./emeddedComponents/tagbar"))
// const WithSidebar = dynamic(() => import("./emeddedComponents/withSidebar"))
// const Diagram = dynamic(() => import("./emeddedComponents/diagrams/pixi"))
const Grid = dynamic(() => import("./emeddedComponents/grid").then((a) => a.Grid))
const GridItem = dynamic(() => import("./emeddedComponents/grid").then((l) => l.GridItem))
const Video = dynamic(() => import("./emeddedComponents/media/video").then((a) => a.Video))
const ModelView = dynamic(() => import("./emeddedComponents/modelView/ModelView").then((a) => a.ModelView))
const Card = dynamic(() => import("./emeddedComponents/card").then((a) => a.EmbeddableCard))
// const LinePlot = dynamic(() => import("./emeddedComponents/plots/linePlot"))
// const RemoteMarkdown = dynamic(() => import("./emeddedComponents/remote/RemoteMarkdown"))
// const Carousel = dynamic(() => import("./emeddedComponents/media/carousel"))
// const HtmlFile = dynamic(() => import("./emeddedComponents/HtmlFile"))
// const Sidebar = dynamic(() => import("./emeddedComponents/layout/Sidebar"))
// const Latex = dynamic(() => import("./emeddedComponents/latex"))
// const VideoTimestampLink = dynamic(() => import("./emeddedComponents/media/videoTimestampLink"))
const Highlight = dynamic(() => import("./emeddedComponents/Hl").then((a) => a.Highlight))
const Underline = dynamic(() => import("./emeddedComponents/Underline").then((a) => a.Underline))
// const Tooltip = dynamic(() => import("./emeddedComponents/TT"))
// const DivElement = dynamic(() => import("./Div"))
const Small = dynamic(() => import("./emeddedComponents/text/small").then((a) => a.Small))
const Large = dynamic(() => import("./emeddedComponents/text/large").then((a) => a.Large))
const Centered = dynamic(() => import("./emeddedComponents/text/centeredText").then((a) => a.CenteredText))
const Lead = dynamic(() => import("./emeddedComponents/text/lead").then((a) => a.LeadText))
// const Resize = dynamic(() => import("./emeddedComponents/resizable/resize"))
// const ResizePanel = dynamic(() => import("./emeddedComponents/resizable/resizePanel"))
// const MarkdownModal = dynamic(() => import("./emeddedComponents/modals/markdownModal"))
// const Button = dynamic(() => import("./emeddedComponents/button"))
// const CollapsablePanel = dynamic(() => import("./emeddedComponents/layout/interactive/collapsableSidePanel/collapsableSidePanel"))
const VSpace = dynamic(() => import("./emeddedComponents/layout/vspace").then((a) => a.VSpace))
// const InternalMermaid = dynamic(() => import("./emeddedComponents/diagrams/mermaid"))
// const EmbeddedImage = dynamic(() => import("./emeddedComponents/image"))
// const EmbeddedSvg = dynamic(() => import("./emeddedComponents/svg"))
// const Vectorize = dynamic(() => import("./emeddedComponents/vectorize"))
// const Quote = dynamic(() => import("./emeddedComponents/text/quote"))
// const Hide = dynamic(() => import("./emeddedComponents/hide"))
// const FlexRow = dynamic(() => import("./layout/flexRow"))
// const NoMaxHeight = dynamic(() => import("./layout/noTableHeightLimit"))
// const Equation = dynamic(() => import("./utility/equationWrapper"))
const EqRef = dynamic(() => import("./utility/equationRef").then((a) => a.EquationRef))
const EquationTag = dynamic(() => import("./utility/equationTag").then((a) => a.EquationTag))
// const DefinitionTag = dynamic(() => import("./utility/definitionTag"))
// const Boxed = dynamic(() => import("./utility/boxed"))
// const Tikz = dynamic(() => import("./emeddedComponents/tikz"))
const Color = dynamic(() => import("./emeddedComponents/colorText").then((a) => a.ColorText))


interface ConditionalComponentQuery {
    regex: RegExp,
    component: ComponentType<any>,
    label: string
}

export interface ConditionalComponentProps {
    all?: boolean
    noMermaid?: boolean
    requiredOnly?: boolean
}

export const getConditionalClientComponents = (content: string, opts: ConditionalComponentProps, isServer: boolean = false) => {
    const conditionalComponents: ConditionalComponentQuery[] = [
        // Layout stuff
        { regex: new RegExp(`<Grid`), component: Grid, label: "Grid" },
        { regex: new RegExp(`<GridItem`), component: GridItem, label: "GridItem" },
        { regex: new RegExp(`<Tab`), component: Tab, label: "Tab" },
        { regex: new RegExp(`<TabGroup`), component: TabGroup, label: "TabGroup" },
        { regex: new RegExp(`<Card`), component: Card, label: "Card" },
        // Layout Helpers
        { regex: new RegExp(`<VSpace`), component: VSpace, label: "VSpace" },
        { regex: new RegExp(`<Vspace`), component: VSpace, label: "Vspace" },
        { regex: new RegExp(`<Centered`), component: Centered, label: "Centered" },
        { regex: new RegExp(`<Center`), component: Centered, label: "Center" },
        // Text Styling Components
        { regex: new RegExp(`<Small`), component: Small, label: "Small" },
        { regex: new RegExp(`<Color`), component: Color, label: "Color" },
        { regex: new RegExp(`<Large`), component: Large, label: "Large" },
        { regex: new RegExp(`<Ul`), component: Underline, label: "Ul" },
        { regex: new RegExp(`<Underline`), component: Underline, label: "Underline" },
        { regex: new RegExp(`<Hl`), component: Highlight, label: "Hl" },
        { regex: new RegExp(`<Highlight`), component: Highlight, label: "Highlight" },
        { regex: new RegExp(`<Lead`), component: Lead, label: "Lead" },
        // Notifications and Attention Components
        { regex: new RegExp(`<Admonition`), component: Admonition, label: "Admonition" },
        // Math related
        { regex: new RegExp(`<EqRef`), component: EqRef, label: "EqRef" },
        { regex: new RegExp(`<EquationTag`), component: EquationTag, label: "EquationTag" },
        // Jupyter
        { regex: new RegExp(`<Cell`), component: NotebookCell, label: "Cell" },
        // 3D
        { regex: new RegExp(`<ModelView`), component: ModelView, label: "ModelView" },
        // Media components
        { regex: new RegExp(`<Video`), component: Video, label: "Video" },
    ]
    let components: { [k: string]: ConditionalComponentQuery['component'] } = {}
    for (const k of conditionalComponents) {
        const hasComponent = k.regex.test(content)
        if (isServer) {
            clientLogger.debug(`
hasComponent: ${hasComponent}
componentLabel: ${k.label}
`)
        }
        if (opts.all || hasComponent) {
            if (!(opts.noMermaid && k.label === "Mermaid")) {
                components[k.label] = k.component
            }
        }
    }
    return components
}
