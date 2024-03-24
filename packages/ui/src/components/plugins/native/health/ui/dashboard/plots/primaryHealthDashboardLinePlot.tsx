import React from 'react'
import HealthDashboardCardContainer from '../dashboardCardContainer';
import { BaseDashboardCardProps } from './types';



interface PrimaryHealthDashboardLinePlotProps extends BaseDashboardCardProps {
}


const PrimaryHealthDashboardLinePlot = (props: PrimaryHealthDashboardLinePlotProps) => {
    return (
        <HealthDashboardCardContainer
            {...props}
        >
            {"Handle this plot tomorrow. Now finally have something with data to work with even if the data collection will take a while before it's really useful."}
        </HealthDashboardCardContainer>
    )
}


PrimaryHealthDashboardLinePlot.displayName = "PrimaryHealthDashboardLinePlot"


export default PrimaryHealthDashboardLinePlot;
