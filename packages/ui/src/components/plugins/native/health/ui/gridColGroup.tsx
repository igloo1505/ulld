import clsx from 'clsx'
import React from 'react'



interface HealthDashboardGridColGroupProps {
    children: React.ReactNode
    fit?: boolean
    className?: string
    cols: number
}

const HealthDashboardGridColGroup = ({ children, className, fit, cols }: HealthDashboardGridColGroupProps) => {
    return (
        <div
            className={clsx("w-full grid grid-cols-12 gap-3", fit ? "h-fit" : "h-full", className)}
            style={{
                gridColumn: `span ${cols} / span ${cols}`
            }}
        >
            {children}
        </div>
    )
}


HealthDashboardGridColGroup.displayName = "HealthDashboardGridColGroup"


export default HealthDashboardGridColGroup;
