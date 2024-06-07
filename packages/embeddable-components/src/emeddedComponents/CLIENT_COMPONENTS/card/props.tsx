import { ReactNode } from "react";
import { BaseEmbeddableComponentProps } from "../../baseEmbeddableComponentTypes";


/**
 * A card is a component commonly used to assign an optional title and description to a subset of a note's content. It is in some ways similar to an admonition, but in most themes is more muted in it's appearance. As with other comonents, all content properties can include markdown.
 * @example
 * ```tsx
 * <Card
 * title="This is a card"
 * desc="Cards are a great way to group parts of your note."
 * >
 * The _axis of evil_ is a term used to describe the alignment of a set of anisotropies of our cosmic microwave background, as they mysteriously appear to align with the orientation of our solar system.
 * </Card>
 * ```
 * #### Output
 * <Card
 * title="This is a card"
 * desc="Cards are a great way to group parts of your note."
 * >
 * The _axis of evil_ is a term used to describe the alignment of a set of anisotropies of our cosmic microwave background, as they mysteriously appear to align with the orientation of our solar system.
 * </Card>
 * @alpha
 * @interface
 */
export interface EmbeddableCardProps extends Omit<BaseEmbeddableComponentProps<HTMLDivElement>, "title"> {
    title?: ReactNode;
    /** Body here is an alias for children. You can pass in the main content through either property. */
    body?: ReactNode;
    children?: React.ReactNode;
    /** The muted text below the title */
    description?: string;
    /** An alias for the description property. */
    desc?: string;
}
