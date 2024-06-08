import { HTMLProps, ReactNode } from "react";

/**
 * A simple title component that supports adding a subtitle with reasonable default styles.
 * @example
 * ```tsx
 * <Title subtitle="And this is my subtitle" subtitleMuted>
 *  This is my title
 * </Title>
 * ```
 * ### Output
 *  <Title subtitle="And this is my subtitle" subtitleMuted>
 *  This is my title
 * </Title>
 * @alpha
 * @interface
 */
export interface TitleProps extends HTMLProps<HTMLDivElement> {
    /** The main title content */
    children: ReactNode;
    /** The optional subtitle */
    subtitle?: ReactNode;
    /** Whether or not subtitle should have a muted appearance. Defaults to **true**. */
    subtitleMuted?: boolean;
    /** Properties passed directly to the subtitle component. */
    subtitleProps?: HTMLProps<HTMLSpanElement>;
}
