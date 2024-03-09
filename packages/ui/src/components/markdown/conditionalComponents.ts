import { serverLogger } from "@ulld/logger/server";
import { Carousel } from "@ulld/tailwind";
import dynamic from "next/dynamic";
import { ComponentType } from "react";
const NotebookCell = dynamic(() => import("../../components/jupyter/notebooks/cell").then((a) => a.NotebookCell))
const JupyterConsole = dynamic(() => import("../../components/jupyter/console/console").then((a) => a.JupyterConsole))
const Pdf = dynamic(() => import("../../components/specificContentType/pdf/MdxPdfView").then((a) => a.MdxPdfViewer))
const TabGroup = dynamic(() => import("../../components/markdown/emeddedComponents/tabs/tabGroup").then((a) => a.TabGroup))
const Tab = dynamic(() => import("../../components/markdown/emeddedComponents/tabs/tab").then((a) => a.Tab))
const TagBar = dynamic(() => import("../../components/markdown/emeddedComponents/tagbar").then((a) => a.TagBar))
const Admonition = dynamic(() => import("./emeddedComponents/admonition").then((a) => a.Admonition))
const WithSidebar = dynamic(() => import("./emeddedComponents/withSidebar").then((a) => a.WithSidebar))
const Grid = dynamic(() => import("./emeddedComponents/grid").then((a) => a.Grid))
const GridItem = dynamic(() => import("./emeddedComponents/grid").then((l) => l.GridItem))
const Video = dynamic(() => import("./emeddedComponents/media/video").then((a) => a.Video))
const ModelView = dynamic(() => import("./emeddedComponents/modelView/ModelView").then((a) => a.ModelView))
const Card = dynamic(() => import("./emeddedComponents/card").then((a) => a.EmbeddableCard))
const RemoteMarkdown = dynamic(() => import("./emeddedComponents/remote/RemoteMarkdown").then((a) => a.RemoteMarkdown))
const HtmlFile = dynamic(() => import("./emeddedComponents/HtmlFile").then((a) => a.HtmlFile))
const Sidebar = dynamic(() => import("./emeddedComponents/layout/Sidebar").then((a) => a.Sidebar))
const Latex = dynamic(() => import("./emeddedComponents/latex").then((a) => a.Latex))
const VideoTimestampLink = dynamic(() => import("./emeddedComponents/media/videoTimestampLink").then((a) => a.VideoTimestampLink))
const Highlight = dynamic(() => import("./emeddedComponents/Hl").then((a) => a.Highlight))
const Underline = dynamic(() => import("./emeddedComponents/Underline").then((a) => a.Underline))
const Tooltip = dynamic(() => import("./emeddedComponents/TT").then((a) => a.TT))
const DivElement = dynamic(() => import("./Div").then((a) => a.DivElement))
const Small = dynamic(() => import("./emeddedComponents/text/small"))
const Large = dynamic(() => import("./emeddedComponents/text/large").then((a) => a.Large))
const Centered = dynamic(() => import("./emeddedComponents/text/centeredText").then((a) => a.CenteredText))
const Lead = dynamic(() => import("./emeddedComponents/text/lead").then((a) => a.LeadText))
const Resize = dynamic(() => import("./emeddedComponents/resizable/resize").then((a) => a.ResizeContainer))
const ResizePanel = dynamic(() => import("./emeddedComponents/resizable/resizePanel").then((a) => a.ResizePanel))
const MarkdownModal = dynamic(() => import("./emeddedComponents/modals/markdownModal").then((a) => a.MarkdownModal))
const Button = dynamic(() => import("./emeddedComponents/button").then((a) => a.Button))
const CollapsablePanel = dynamic(() => import("./emeddedComponents/layout/interactive/collapsableSidePanel/collapsableSidePanel").then((a) => a.CollapsableSidePanel))
const VSpace = dynamic(() => import("./emeddedComponents/layout/vspace").then((a) => a.VSpace))
const InternalMermaid = dynamic(() => import("./emeddedComponents/diagrams/mermaid").then((a) => a.InternalMermaid))
const EmbeddedImage = dynamic(() => import("./emeddedComponents/image").then((a) => a.EmbeddedImage))
const Quote = dynamic(() => import("./emeddedComponents/text/quote").then((a) => a.Quote))
const Hide = dynamic(() => import("./emeddedComponents/hide").then((a) => a.Hide))
const FlexRow = dynamic(() => import("./layout/flexRow").then((a) => a.FlexRow))
const NoMaxHeight = dynamic(() => import("./layout/noTableHeightLimit").then((a) => a.NoTableHeightLimit))
const Equation = dynamic(() => import("./utility/equationWrapper").then((a) => a.EquationWrapper))
const EqRef = dynamic(() => import("./utility/equationRef").then((a) => a.EquationRef))
const EquationTag = dynamic(() => import("./utility/equationTag").then((a) => a.EquationTag))
const DefinitionTag = dynamic(() => import("./utility/definitionTag").then((a) => a.DefinitionTag))
const Boxed = dynamic(() => import("./utility/boxed").then((a) => a.Boxed))
const Tikz = dynamic(() => import("./emeddedComponents/tikz").then((a) => a.TikzDiagram))

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
    ]
    let components: { [k: string]: ConditionalComponentQuery['component'] } = {}
    for (const k of conditionalComponents) {
        const hasComponent = k.regex.test(content)
        if (isServer) {
            serverLogger.debug(`
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
