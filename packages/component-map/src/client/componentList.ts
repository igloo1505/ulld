import dynamic from "next/dynamic";
import { ConditionalComponentQuery } from "../types";
const Admonition = dynamic(() => import("@ulld/embeddable-components/components/client/admonition").then((a) => a.Admonition))
// // const JupyterConsole = dynamic(() => import("../jupyter/console/index"))
// const Pdf = dynamic(() => import("../functionality/pdf/MdxPdfView"))
const TabGroup = dynamic(() => import("@ulld/embeddable-components/components/client/tabGroup").then((a) => a.TabGroup))
const Tab = dynamic(() => import("@ulld/embeddable-components/components/client/tab").then((a) => a.Tab))
// const TagBar = dynamic(() => import("./emeddedComponents/tagbar"))
// const WithSidebar = dynamic(() => import("./emeddedComponents/withSidebar"))
// const Diagram = dynamic(() => import("./emeddedComponents/diagrams/pixi"))
const Grid = dynamic(() => import("@ulld/embeddable-components/components/client/grid").then((a) => a.Grid))
const GridItem = dynamic(() => import("@ulld/embeddable-components/components/client/grid").then((l) => l.GridItem))
const Video = dynamic(() => import("@ulld/embeddable-components/components/client/video").then((a) => a.Video))
const ModelView = dynamic(() => import("@ulld/embeddable-components/components/client/modelView").then((a) => a.ModelView))
const Card = dynamic(() => import("@ulld/embeddable-components/components/client/card").then((a) => a.EmbeddableCard))
const ErrorMargin = dynamic(() => import("@ulld/embeddable-components/academic/error").then((a) => a.ErrorMargin))
const Abstract = dynamic(() => import("@ulld/embeddable-components/academic/abstract").then((a) => a.Abstract))
const TableFit = dynamic(() => import("@ulld/embeddable-components/format/tableFit").then((a) => a.TableFit))
const Title = dynamic(() => import("@ulld/embeddable-components/components/client/title").then((a) => a.Title))
// const LinePlot = dynamic(() => import("./emeddedComponents/plots/linePlot"))
// const RemoteMarkdown = dynamic(() => import("./emeddedComponents/remote/RemoteMarkdown"))
// const Carousel = dynamic(() => import("./emeddedComponents/media/carousel"))
// const HtmlFile = dynamic(() => import("./emeddedComponents/HtmlFile"))
// const Sidebar = dynamic(() => import("./emeddedComponents/layout/Sidebar"))
// const Latex = dynamic(() => import("./emeddedComponents/latex"))
// const VideoTimestampLink = dynamic(() => import("./emeddedComponents/media/videoTimestampLink"))
const Highlight = dynamic(() => import("@ulld/embeddable-components/components/client/hl").then((a) => a.Highlight))
const Underline = dynamic(() => import("@ulld/embeddable-components/components/client/ul").then((a) => a.Underline))
// const Tooltip = dynamic(() => import("./emeddedComponents/TT"))
// const DivElement = dynamic(() => import("./Div"))
const Small = dynamic(() => import("@ulld/embeddable-components/components/client/text/small").then((a) => a.Small))
const Large = dynamic(() => import("@ulld/embeddable-components/components/client/text/large").then((a) => a.Large))
const Centered = dynamic(() => import("@ulld/embeddable-components/components/client/text/centered").then((a) => a.CenteredText))
const Lead = dynamic(() => import("@ulld/embeddable-components/components/client/text/lead").then((a) => a.LeadText))
// const Resize = dynamic(() => import("./emeddedComponents/resizable/resize"))
// const ResizePanel = dynamic(() => import("./emeddedComponents/resizable/resizePanel"))
// const MarkdownModal = dynamic(() => import("./emeddedComponents/modals/markdownModal"))
// const Button = dynamic(() => import("./emeddedComponents/button"))
// const CollapsablePanel = dynamic(() => import("./emeddedComponents/layout/interactive/collapsableSidePanel/collapsableSidePanel"))
const VSpace = dynamic(() => import("@ulld/embeddable-components/components/client/vspace").then((a) => a.VSpace))
// const InternalMermaid = dynamic(() => import("./emeddedComponents/diagrams/mermaid"))
const EmbeddedImage = dynamic(() => import("@ulld/embeddable-components/components/client/image").then((a) => a.EmbeddedImage))
// const EmbeddedSvg = dynamic(() => import("./emeddedComponents/svg"))
// const Vectorize = dynamic(() => import("./emeddedComponents/vectorize"))
const Quote = dynamic(() => import("@ulld/embeddable-components/components/blockQuote"))
// const Hide = dynamic(() => import("./emeddedComponents/hide"))
// const FlexRow = dynamic(() => import("./layout/flexRow"))
// const NoMaxHeight = dynamic(() => import("./layout/noTableHeightLimit"))
// const Equation = dynamic(() => import("./utility/equationWrapper"))
const EqRef = dynamic(() => import("@ulld/embeddable-components/components/client/equationRef").then((a) => a.EquationRef))
const FigureRef = dynamic(() => import("@ulld/embeddable-components/components/client/figureRef").then((a) => a.FigureRef))
const EquationTag = dynamic(() => import("@ulld/embeddable-components/components/client/equationTag").then((a) => a.EquationTag))
// const DefinitionTag = dynamic(() => import("./utility/definitionTag"))
const Boxed = dynamic(() => import("@ulld/embeddable-components/components/client/boxed").then((a) => a.Boxed))
// const Tikz = dynamic(() => import("./emeddedComponents/tikz"))
const Color = dynamic(() => import("@ulld/embeddable-components/components/client/colorText").then((a) => a.ColorText))
const ColorChip = dynamic(() => import("@ulld/embeddable-components/components/client/colorChip").then((a) => a.ColorChip))
// TODO: Come back and add a better implementation of the client side whiteboard. This will work for now, just to get the website up, but push it all to the client and handle state that way when you have time.
const Whiteboard = dynamic(() => import("@ulld/whiteboard/local").then((a) => a.WhiteboardLocal))

export type EmbeddableClientComponents = typeof Admonition | typeof TabGroup | typeof Tab | typeof Grid | typeof GridItem | typeof Video | typeof ModelView | typeof Card | typeof Highlight | typeof Underline | typeof Small | typeof Large | typeof Centered | typeof Lead | typeof VSpace | typeof EqRef | typeof EquationTag | typeof Color



export const conditionalClientComponents: ConditionalComponentQuery<EmbeddableClientComponents>[] = [
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
        { regex: new RegExp(`<Boxed`), component: Boxed, label: "Boxed" },
        // Text Styling Components
        { regex: new RegExp(`<Small`), component: Small, label: "Small" },
        { regex: new RegExp(`<Color`), component: Color, label: "Color" },
        { regex: new RegExp(`<Large`), component: Large, label: "Large" },
        { regex: new RegExp(`<Ul`), component: Underline, label: "Ul" },
        { regex: new RegExp(`<Underline`), component: Underline, label: "Underline" },
        { regex: new RegExp(`<Hl`), component: Highlight, label: "Hl" },
        { regex: new RegExp(`<Highlight`), component: Highlight, label: "Highlight" },
        { regex: new RegExp(`<Lead`), component: Lead, label: "Lead" },
        { regex: new RegExp(`<Quote`), component: Quote, label: "Quote" },
        { regex: new RegExp(`<Title`), component: Title, label: "Title" },
        // Notifications and Attention Components
        { regex: new RegExp(`<Admonition`), component: Admonition, label: "Admonition" },
        { regex: new RegExp(`<ColorChip`), component: ColorChip, label: "ColorChip" },
        // Math related
        { regex: new RegExp(`<EqRef`), component: EqRef, label: "EqRef" },
        { regex: new RegExp(`<FigRef`), component: FigureRef, label: "FigRef" },
        { regex: new RegExp(`<EquationTag`), component: EquationTag, label: "EquationTag" },
        // Jupyter
        // 3D
        { regex: new RegExp(`<ModelView`), component: ModelView, label: "ModelView" },
        // Media components
        { regex: new RegExp(`<Video`), component: Video, label: "Video" },
        { regex: new RegExp(`<Whiteboard`), component: Whiteboard, label: "Whiteboard" },
        { regex: new RegExp(`<Image`), component: EmbeddedImage, label: "Image" },
        // Academic components
        {regex: new RegExp("<ErrorMargin"), component: ErrorMargin, label: "ErrorMargin"},
        {regex: new RegExp("<Abstract"), component: Abstract, label: "Abstract"},
        {regex: new RegExp("<TableFit"), component: TableFit, label: "TableFit"},

    ]
