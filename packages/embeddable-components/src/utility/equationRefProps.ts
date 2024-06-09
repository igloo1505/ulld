
/**
 * The EqRef component is used in two related but distinct ways. An equation can be wrapped in a EqRef component with the anchor property and an id property to gather the equation number in a separate EqRef component, with the same id but without the anchor property. 
 * @example
 * ```mdx
 * <EqRef anchor id="delta">
 * $$
 * INSERT-gammaEquiv!
 * $$
 * </EqRef>
 * Consider that in equation <EqRef id="delta />...
 * ```
 * ### Output
 * $$
 * INSERT-gammaEquiv!
 * $$
 * Consider that in equation 1...
 * @alpha
 * @interface
 */
export interface EquationRefProps {
    id: string
    children: React.ReactNode
    anchor?: boolean
    defaultContent?: string | number
}
