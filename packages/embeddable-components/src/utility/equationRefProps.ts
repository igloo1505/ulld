export interface EquationRefProps {
    id: string
    children: React.ReactNode
    /** This should be applied to the EqRef component that wraps the equation, and left undefined in all places where that equation is referenced. */
    anchor?: boolean
    /** An optional default number to display initially. */
    defaultContent?: string | number
}
