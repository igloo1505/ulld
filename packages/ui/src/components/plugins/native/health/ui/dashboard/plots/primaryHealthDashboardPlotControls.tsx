import React from 'react'
import HealthDashboardCardContainer from '../dashboardCardContainer';
import { BaseDashboardCardProps } from '.';


interface HealthDashboardPlotControlsProps extends BaseDashboardCardProps {
}

const HealthDashboardPlotControls = ({ cols, className, center }: HealthDashboardPlotControlsProps) => {
    return (
        <HealthDashboardCardContainer center={center} className={className} cols={cols}>
            PrimaryHealthDashboardPlotControls
        </HealthDashboardCardContainer>
    )
}


HealthDashboardPlotControls.displayName = "HealthDashboardPlotControls"


export default HealthDashboardPlotControls;
