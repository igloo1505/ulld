import { ReactNode } from "react"
import type { Tab } from "./tab"


/**
 * The TabGroup component allows the embedding of several children which can be then toggled by a series of buttons on top.
 * @example
 * ```tsx
* <TabGroup>
*     <Tab title="Tab One" description="This is a description" label="One">
*         Tab one content
*     </Tab>
*     <Tab title="Tab Two" label="Two">
*         Tab two content
*     </Tab>
*     <Tab title="Tab Three" label="Three">
*         Tab three content
*     </Tab>
*     <Tab title="Tab Four" label="Four">
*         Tab four content
*     </Tab>
* </TabGroup>
* ```
* ### Output
* <TabGroup>
*     <Tab title="Tab One" description="This is a description" label="One">
*         Tab one content
*     </Tab>
*     <Tab title="Tab Two" label="Two">
*         Tab two content
*     </Tab>
*     <Tab title="Tab Three" label="Three">
*         Tab three content
*     </Tab>
*     <Tab title="Tab Four" label="Four">
*         Tab four content
*     </Tab>
* </TabGroup>
 * @alpha
 * @interface
 */
export interface TabGroupProps {
    /** Unlike the grid which can accept multiple children of any type where the GridItem component acts merely as a set of default styles, the children of the TabGroup component ***must*** be of type Tab.  */
    children: ReactNode
    /** By default the active button takes on a muted color. If primary is true, the active button will take on the current theme's primary color. */
    primary?: boolean
}


/**
 * The Tab component functions only as an intended child of the TabGroup component.
 */
export interface TabProps {
    /** The main content of the tab. */
    children: React.ReactNode
    /** The text of the button for this tab. */
    label: string
    /** An optional title for the tab card. */
    title?: string
    /** An optional small, muted text description of the tab. */
    description?: string
}
