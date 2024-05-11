import { LogoAsText } from "#/components/general/logoAsText";
import { MiniFeature } from "./types";
import staticData from "#/staticData/staticContent.json"


/* TODO: Come back here and find better icons when back on wifi. */
export const allMiniFeatures: MiniFeature[] = [
    {
        title: "A Second Brain",
        desc: <div>One of the primary inspirations for <LogoAsText fontSize={13} /> was the lack of all-in-one academic note taking. <LogoAsText fontSize={13} /> puts organization first, with several methods for ogranizing your notes so you can always find what you're looking for.</div>,
        icon: "search",
        seeMoreHref: staticData.documentationLinks.internal.organization
    },
    {
        title: "Interactive Plotting",
        desc: <div>With support for multiple plotting libraries on day 1, you can visualize your data with only <span className={"font-bold"}>MDX</span>. Familiar with <a href={staticData.documentationLinks.external.python} className={"font-bold text-link"}>Python</a>? Embed <a href={staticData.documentationLinks.external.jupyter} className={"font-bold text-link"}>Jupyter</a> cells directly in your notes and create your own visualizations.</div>,
        icon: "line-chart",
        featureKey: "plotting"
    },
    {
        title: "Bibliography",
        desc: "Embed PDF's in your notes, link notes to entries in your bibliography, automatically format citations directly in your notes, and filter your notes by the work that they cite.",
        icon: "bibliography",
        featureKey: "bibliography"
    },
    {
        title: "Task Management",
        desc: "Use the built-in task manager to keep track of your work by project, by assignment, by class, or however you see fit. Embed task lists directly in your notes to take organization to the next level.",
        icon: "todo",
        featureKey: "taskManager"
    },
    {
        title: "Not Just Text",
        desc: <div><LogoAsText fontSize={13}/> was built for someone's personal physics research, and as such, there's out of the box support for multiple methods of adding your own mathematical and scientific content.</div>,
        icon: "drafting-compass",
        featureKey: "inputs"
    },
]
