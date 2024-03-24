import React, { useContext } from 'react'
import { PageHeading } from '../../ui/pageHeading'
import { FullFormContext } from '../../fullFormContext'
import clsx from 'clsx'



interface FullPageFormContainerProps {
    asideParent?: string | null
    title?: string
    subtitle?: string
    children?: React.ReactNode
    noMaxWidth?: boolean
    noSpace?: boolean
    className?: string
}

export const FullPageFormContainer = ({ asideParent = null, noMaxWidth, title, subtitle, children, className, noSpace }: FullPageFormContainerProps) => {
    const ctx = useContext(FullFormContext)
    const show = !asideParent || asideParent === ctx.activeAside
    return (
        <div className={clsx("flex-1 group/healthFormPage space-y-6", !show && "hidden", !noMaxWidth && "lg:max-w-2xl")}>
            {title && <PageHeading title={title} subtitle={subtitle} />}
            <div className={clsx(!noSpace && "space-y-6", className)}>
                {children}
            </div>
        </div>
    )
}


FullPageFormContainer.displayName = "FullPageFormContainer"


export default FullPageFormContainer;
