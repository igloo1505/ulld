import { Card } from '#/components/shad/ui/card'
import { BaseDashboardCardProps } from '#/types/plugins/native/health/dashboard'
import clsx from 'clsx'
import React from 'react'



interface HealthDashboardCardContainerProps extends BaseDashboardCardProps {
    children: React.ReactNode
    center?: boolean
}

const HealthDashboardCardContainer = ({ children, className, cols, center }: HealthDashboardCardContainerProps) => {
    return (
        <Card
            className={clsx("p-4", className, center && "flex flex-col justify-center items-center")}
            style={cols ? {
                gridColumn: `span ${cols} / span ${cols}`
            } : {}}
        >{children}</Card>
    )
}


HealthDashboardCardContainer.displayName = "HealthDashboardCardContainer"


export default HealthDashboardCardContainer;
