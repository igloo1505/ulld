export type ContainerSize = "base" | "sm" | "md" | "lg"

export type GridColumnMap = {
    [K in ContainerSize]?: number
}

/**
 * A grid can be used to align content into a symmetrical grid of user defined sizes and dimensions.
 * <Hint>Try combining the Grid component with multiple Card components for lists of content that is too complex to fit in an actual list.</Hint>
 * @alpha
 * @interface
 */
export interface GridProps {
    /** Number of columns in the grid */
    columns?: number | Record<ContainerSize, number>;
    /** Alias for columns */
    cols?: number | GridColumnMap;
    /** The minimum width in pixels for each column. This will create an auto-scaling grid, with the most columns capable of fitting horizontally for this given piexel width. This is ideal for grid styling, as it will scale appropriately for all window sizes. */
    minMax?: number;
    /** The grid content takes several child components, ideal of type GridItem */
    children: React.ReactNode;
    /** If applying styles using the `minMax` property, this sets the property to `repeat(auto-fit, ...)`. The default is false, which sets this property to `repeat(auto-fill, ...)`. */
    autoFit?: boolean;
}



/**
 * The GridItem component can be used to add default styles to content within the Grid component. This is not required to display content within the grid component, but adds reasonable default styling and size properties.
 * @alpha
 * @example
 * ```tsx
 * <Grid minMax={200}>
 * <GridItem>Plain</GridItem>
 * <GridItem background>With background</GridItem>
 * <GridItem center background>Centered</GridItem>
 * </Grid>
 * ```
 * ### Output
 * <Grid minMax={200}>
 * <GridItem>Plain</GridItem>
 * <GridItem background>With background</GridItem>
 * <GridItem center>Centered</GridItem>
 * </Grid>
 * @interface
 */
export interface GridItemProps {
    /** The content within this grid column and row. */
    children: React.ReactNode;
    /** Whether to add a minimal, muted background to the grid item. */
    background?: boolean;
    /** Centers the children within the grid container, as opposed to displaying them from top to bottom. */
    center?: boolean;
}
