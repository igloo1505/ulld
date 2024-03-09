import React from 'react'
import HealthDashboardCardContainer from '../dashboardCardContainer'
import { BaseDashboardCardProps } from '.'



interface HealthDashboardToolPanelProps extends BaseDashboardCardProps {
}

const HealthDashboardToolPanel = ({ cols, className, center }: HealthDashboardToolPanelProps) => {
    return (
        <HealthDashboardCardContainer className={className} center={center} cols={cols}>
            HealthDashboardToolPanel
        </HealthDashboardCardContainer>
    )
}


HealthDashboardToolPanel.displayName = "HealthDashboardToolPanel"


export default HealthDashboardToolPanel;
