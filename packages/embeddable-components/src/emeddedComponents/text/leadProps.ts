
/**
 * Lead text is text that is larger than regular text, but of a more muted color.
 * @example
 * ```tsx
 * <Lead center>This is some lead text.</Lead>
 * ```
 * <Lead center>This is some lead text.</Lead>
 * @alpha
 * @interface
 */
export interface LeadTextProps {
    /** The lead text. */
    children: string
    /** Center the text.
     * @default false */
    center?: boolean
}
