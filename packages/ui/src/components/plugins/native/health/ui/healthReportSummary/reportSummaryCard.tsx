import React from 'react'
import { HealthReportSummaryBarPlot } from './healthReportSummaryBarPlot'
import dayjs from 'dayjs'
import advancedFormat from 'dayjs/plugin/advancedFormat';
import { ReturnedHealthReportSummary } from '@ulld/api';
import { H4 } from '../../../../..';
import { DeleteModalTriggerButton } from '../../../../../inputs/deleteModalTriggerButton';
dayjs.extend(advancedFormat)



interface HealthReportSummaryCardProps {
    report: ReturnedHealthReportSummary
}


const HealthReportSummaryCard = ({ report }: HealthReportSummaryCardProps) => {
    const domId = `health-report-summary-${report.id}`
    return (
        <div className={"bg-card text-card-foreground border grid grid-cols-1 md:grid-cols-[300px_1fr] rounded-md relative"} id={domId}>
            <DeleteModalTriggerButton
                className={"absolute top-3 right-3 z-10"}
                config={{
                    primaryId: report.id,
                    title: "Delete Health Report",
                    body: "This cannot be undone.",
                    domId: domId,
                    buttonVariant: "destructive",
                    onConfirm: "deleteHealthReport",
                    buttonText: "Delete",
                    toast: {
                        title: "Success",
                        description: "This health report has been deleted successfully."
                    }
                }}
            />
            <div className={"w-full h-full p-4 flex flex-col justify-center items-center gap-0"}>
                <H4 className={"text-center w-full"}>
                    {report.title}
                </H4>
                <p className={"text-sm text-muted-foreground"}>{dayjs(report.created).format("MMM Do, YYYY")}</p>
            </div>
            <HealthReportSummaryBarPlot report={report} />
        </div >
    )
}


HealthReportSummaryCard.displayName = "HealthReportSummaryCard"


export default HealthReportSummaryCard;
