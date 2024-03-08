import { logger } from "#/lib/logger";
import dynamic from "next/dynamic";
import { ComponentType } from "react";
const NotebookCell = dynamic(() => import("../jupyter/notebooks/cell"))
const JupyterConsole = dynamic(() => import("../jupyter/console/index"))
const Pdf = dynamic(() => import("../functionality/pdf/MdxPdfView"))
const SurfacePlot = dynamic(() => import("./emeddedComponents/plots/surfacePlot"))
const TabGroup = dynamic(() => import("./emeddedComponents/tabs/tabGroup"))
const Tab = dynamic(() => import("./emeddedComponents/tabs/tab"))
const TagBar = dynamic(() => import("./emeddedComponents/tagbar"))
const Admonition = dynamic(() => import("./emeddedComponents/admonition"))
const WithSidebar = dynamic(() => import("./emeddedComponents/withSidebar"))
const Diagram = dynamic(() => import("./emeddedComponents/diagrams/pixi"))
const Grid = dynamic(() => import("./emeddedComponents/grid"))
const GridItem = dynamic(() => import("./emeddedComponents/grid").then((l) => l.GridItem))
const Video = dynamic(() => import("./emeddedComponents/media/video"))
const ModelView = dynamic(() => import("./emeddedComponents/modelView/ModelView"))
const Card = dynamic(() => import("./emeddedComponents/card"))
const LinePlot = dynamic(() => import("./emeddedComponents/plots/linePlot"))
const RemoteMarkdown = dynamic(() => import("./emeddedComponents/remote/RemoteMarkdown"))
const Carousel = dynamic(() => import("./emeddedComponents/media/carousel"))
const HtmlFile = dynamic(() => import("./emeddedComponents/HtmlFile"))
const Sidebar = dynamic(() => import("./emeddedComponents/layout/Sidebar"))
const Latex = dynamic(() => import("./emeddedComponents/latex"))
const VideoTimestampLink = dynamic(() => import("./emeddedComponents/media/videoTimestampLink"))
const Highlight = dynamic(() => import("./emeddedComponents/Hl"))
const Underline = dynamic(() => import("./emeddedComponents/Underline"))
const Tooltip = dynamic(() => import("./emeddedComponents/TT"))
const DivElement = dynamic(() => import("./Div"))
const Small = dynamic(() => import("./emeddedComponents/text/small"))
const Large = dynamic(() => import("./emeddedComponents/text/large"))
const Centered = dynamic(() => import("./emeddedComponents/text/centeredText"))
const Lead = dynamic(() => import("./emeddedComponents/text/lead"))
const Resize = dynamic(() => import("./emeddedComponents/resizable/resize"))
const ResizePanel = dynamic(() => import("./emeddedComponents/resizable/resizePanel"))
const MarkdownModal = dynamic(() => import("./emeddedComponents/modals/markdownModal"))
const Button = dynamic(() => import("./emeddedComponents/button"))
const CollapsablePanel = dynamic(() => import("./emeddedComponents/layout/interactive/collapsableSidePanel/collapsableSidePanel"))
const VSpace = dynamic(() => import("./emeddedComponents/layout/vspace"))
const InternalMermaid = dynamic(() => import("./emeddedComponents/diagrams/mermaid"))
const EmbeddedImage = dynamic(() => import("./emeddedComponents/image"))
const Quote = dynamic(() => import("./emeddedComponents/text/quote"))
const Hide = dynamic(() => import("./emeddedComponents/hide"))
const FlexRow = dynamic(() => import("./layout/flexRow"))
const NoMaxHeight = dynamic(() => import("./layout/noTableHeightLimit"))
const Equation = dynamic(() => import("./utility/equationWrapper"))
const EqRef = dynamic(() => import("./utility/equationRef"))
const EquationTag = dynamic(() => import("./utility/equationTag"))
const DefinitionTag = dynamic(() => import("./utility/definitionTag"))
const Boxed = dynamic(() => import("./utility/boxed"))
const Tikz = dynamic(() => import("./emeddedComponents/tikz"))
const Color = dynamic(() => import("./emeddedComponents/Color"))

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

export const getConditionalComponents = (content: string, opts: ConditionalComponentProps, isServer: boolean = false) => {
    const conditionalComponents: ConditionalComponentQuery[] = [
        { regex: new RegExp(`<Admonition`), component: Admonition, label: "Admonition" },
        { regex: new RegExp(`<SurfacePlot`), component: SurfacePlot, label: "SurfacePlot" },
        { regex: new RegExp(`<LinePlot`), component: LinePlot, label: "LinePlot" },
        { regex: new RegExp(`<Grid`), component: Grid, label: "Grid" },
        { regex: new RegExp(`<GridItem`), component: GridItem, label: "GridItem" },
        { regex: new RegExp(`<Resize`), component: Resize, label: "Resize" },
        { regex: new RegExp(`<Modal`), component: MarkdownModal, label: "Modal" },
        { regex: new RegExp(`<Button`), component: Button, label: "Button" },
        { regex: new RegExp(`<ResizePanel`), component: ResizePanel, label: "ResizePanel" },
        { regex: new RegExp(`<CollapsablePanel`), component: CollapsablePanel, label: "CollapsablePanel" },
        { regex: new RegExp(`<WithSidebar`), component: WithSidebar, label: "WithSidebar" },
        { regex: new RegExp(`<Pdf`), component: Pdf, label: "Pdf" },
        { regex: new RegExp(`<Tab`), component: Tab, label: "Tab" },
        { regex: new RegExp(`<TabGroup`), component: TabGroup, label: "TabGroup" },
        { regex: new RegExp(`<Tabs`), component: TabGroup, label: "Tabs" },
        { regex: new RegExp(`<Diagram`), component: Diagram, label: "Diagram" },
        { regex: new RegExp(`<Video`), component: Video, label: "Video" },
        { regex: new RegExp(`<ModelView`), component: ModelView, label: "ModelView" },
        { regex: new RegExp(`<RemoteMarkdown`), component: RemoteMarkdown, label: "RemoteMarkdown" },
        { regex: new RegExp(`<Carousel`), component: Carousel, label: "Carousel" },
        { regex: new RegExp(`<TagBar`), component: TagBar, label: "TagBar" },
        { regex: new RegExp(`<Tagbar`), component: TagBar, label: "Tagbar" },
        { regex: new RegExp(`<HtmlFile`), component: HtmlFile, label: "HtmlFile" },
        { regex: new RegExp(`<Html`), component: HtmlFile, label: "Html" },
        { regex: new RegExp(`<Ul`), component: Underline, label: "Ul" },
        { regex: new RegExp(`<Underline`), component: Underline, label: "Underline" },
        { regex: new RegExp(`<Hl`), component: Highlight, label: "Hl" },
        { regex: new RegExp(`<Highlight`), component: Highlight, label: "Highlight" },
        { regex: new RegExp(`<Tooltip`), component: Tooltip, label: "Tooltip" },
        { regex: new RegExp(`<TT`), component: Tooltip, label: "TT" },
        { regex: new RegExp(`<Small`), component: Small, label: "Small" },
        { regex: new RegExp(`<Sidebar`), component: Sidebar, label: "Sidebar" },
        { regex: new RegExp(`<Small`), component: Small, label: "Small" },
        { regex: new RegExp(`<Large`), component: Large, label: "Large" },
        { regex: new RegExp(`<Centered`), component: Centered, label: "Centered" },
        { regex: new RegExp(`<Center`), component: Centered, label: "Center" },
        { regex: new RegExp(`<Lead`), component: Lead, label: "Lead" },
        { regex: new RegExp(`<Mermaid`), component: InternalMermaid, label: "Mermaid" },
        { regex: new RegExp('```mermaid'), component: InternalMermaid, label: "Mermaid" },
        { regex: new RegExp(`<Div`), component: DivElement, label: "Div" },
        { regex: new RegExp(`<VSpace`), component: VSpace, label: "VSpace" },
        { regex: new RegExp(`<Vspace`), component: VSpace, label: "Vspace" },
        { regex: new RegExp(`<Cell`), component: NotebookCell, label: "Cell" },
        { regex: new RegExp(`<Console`), component: JupyterConsole, label: "Console" },
        { regex: new RegExp(`<Latex`), component: Latex, label: "Latex" },
        { regex: new RegExp(`<VideoTimestampLink`), component: VideoTimestampLink, label: "VideoTimestampLink" },
        { regex: new RegExp(`<Image`), component: EmbeddedImage, label: "Image" },
        { regex: new RegExp(`<Card`), component: Card, label: "Card" },
        { regex: new RegExp(`<Quote`), component: Quote, label: "Quote" },
        { regex: new RegExp(`<Hide`), component: Hide, label: "Hide" },
        { regex: new RegExp(`<Hidden`), component: Hide, label: "Hidden" },
        { regex: new RegExp(`<Row`), component: FlexRow, label: "Row" },
        { regex: new RegExp(`<NoMaxHeight`), component: NoMaxHeight, label: "NoMaxHeight" },
        { regex: new RegExp(`<UnsetHeight`), component: NoMaxHeight, label: "UnsetHeight" },
        { regex: new RegExp(`<Expand`), component: NoMaxHeight, label: "Expand" },
        { regex: /\[eq:(?<equationId>[\w|\d]+)\]/gm, component: EquationTag, label: "EquationTag" },
        { regex: new RegExp(`<Equation`), component: Equation, label: "Equation" },
        { regex: new RegExp(`<EqRef`), component: EqRef, label: "EqRef" },
        { regex: new RegExp(`<EquationTag`), component: EquationTag, label: "EquationTag" },
        { regex: new RegExp(`<DefinitionTag`), component: DefinitionTag, label: "DefinitionTag" },
        { regex: new RegExp(`<Boxed`), component: Boxed, label: "Boxed" },
        { regex: new RegExp(`<Box`), component: Boxed, label: "Box" },
        { regex: new RegExp(`<Tikz`), component: Tikz, label: "Tikz" },
        { regex: new RegExp(`<Color`), component: Color, label: "Color" },
    ]
    let components: { [k: string]: ConditionalComponentQuery['component'] } = {}
    for (const k of conditionalComponents) {
        const hasComponent = k.regex.test(content)
        if (isServer) {
            logger.debug(`
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
