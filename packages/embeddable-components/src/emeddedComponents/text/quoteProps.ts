/**
 * Add a quote with an optional author field to your note.
 * @example
 * ```tsx
 * <Quote author={"Aristophanes, 4th century BCE"}>
 * Love is born into every human being; it calls back the halves of our original nature together; it tries to make one out of two and heal the wound of human nature. Each of us, then, is a ‘matching half’ of a human whole…and each of us is always seeking the half that matches him.
 * </Quote>
 * ```
 * <Quote author={"Aristophanes, 4th century BCE"}>
 * Love is born into every human being; it calls back the halves of our original nature together; it tries to make one out of two and heal the wound of human nature. Each of us, then, is a ‘matching half’ of a human whole…and each of us is always seeking the half that matches him.
 * </Quote>
 * @alpha
 * @interface
 */
export interface QuoteProps {
    /** The quote. */
    children: string
    /** An optional author */
    author?: React.ReactNode
    /** An alias for `author` */
    by?: React.ReactNode
    /** An alias for `author` */
    from?: React.ReactNode
}
