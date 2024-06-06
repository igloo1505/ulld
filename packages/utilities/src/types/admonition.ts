import { ReactNode } from "react"

export type AdmonitionType = "info" | "bug" | "note" | "tip" | "faq" | "abstract" | "todo" | "success" | "warn" | "fail" | "example" | "practice" | "quote" | "cite" | "equation" | "important" | "definition" | "plain"


/**
 * An admonition is usually used to draw attention to a specific subset of your content. The primary content is passed in as [a child](/docs/user/introToJsx), but quite a few additional properties are available to configure the layout and appearance of the admonition as well. Both the title and footer can contain markdown, but be sure to escape your backslashes by adding another backslash. As mentioned in the [intro to jsx](/docs/user/introToJsx) documentation, this is a limitation of javascript as a whole, and applies to most programming languages where a backslash is required inside of a string.
 * @alpha
 * @includeExample /Users/bigsexy/Desktop/current/ulld/packages/embeddable-components/docs/examples/admonition.mdx
 * @interface
 */
export interface AdmonitionProps {
    /** The type of the admonition for now is limited to the supplied default admonition types. The appearance of these types however is easily changed inside of your [configuration file](/configure). In the version 2 of ULLD, the configuration file will support adding additional admonition types. */
    type?: AdmonitionType
    /** Optional. This is the content that is displayed inside the colored portion of the admonition. This can include markdown. */
    title?: ReactNode
    /** Optional. Can include markdown */
    footer?: ReactNode
    /** The primary content of the admonition. Can include markdown. */
    children: ReactNode
    /** Whether or not the admonition is foldable. */
    dropdown?: boolean
    /** Whether or not the admonition should be pushed to the side on large screens. On smaller screens, this will automatically occupy the full width of the note regardless of this property. */
    sidebar?: boolean
    /** Whether or not the admonition is initially open if the dropdown property is true. If the dropdown property is false or undefined, this property has no effect. */
    open?: boolean
    /** Whether or not to make the title of the admonition bold */
    titleBold?: boolean
    /** The id of the element. This has no visible effect on the admonition, but can be used for referencing elsewhere in the app. Some plugins may rely on this property for their functionality if their functionality is intended to reference a specific part of your note. */
    id?: string
    /** Whether or not to parse the title and footer. This is primarily for debugging during development, but is available to end users in case of any unknown issues that might arise. */
    noParse?: boolean
}
