import { HealthDashboardReportData } from '#/types/plugins/native/health/reportTypes'
import React from 'react'
import PrimaryHealthDashboardLinePlot from './plots/primaryHealthDashboardLinePlot'
import HealthDashboardGridColGroup from '../gridColGroup'
import HealthDashboardPlotControls from './plots/primaryHealthDashboardPlotControls'
import HealthDashboardToolPanel from './plots/healthDashboardToolPanel'


interface HealthDashboardWrapperProps {
    reports: HealthDashboardReportData
}


const HealthDashboardWrapper = ({ reports }: HealthDashboardWrapperProps) => {
    return (
        <div className={"w-full h-fit grid grid-cols-12"}>
            <HealthDashboardGridColGroup cols={12}>
                <HealthDashboardToolPanel
                    center
                    className={"col-span-12 md:col-span-5"}
                />
                <HealthDashboardPlotControls
                    center
                    className={"col-span-12 md:col-span-7"}
                />
                <PrimaryHealthDashboardLinePlot
                    center
                    cols={12}
                    className={"min-h-[500px] text-center"}
                />
            </HealthDashboardGridColGroup>
        </div>
    )
}


HealthDashboardWrapper.displayName = "HealthDashboardWrapper"


export default HealthDashboardWrapper;
