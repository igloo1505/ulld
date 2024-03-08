import React, { forwardRef } from 'react'


const TocContainer = forwardRef((props, ref: React.ForwardedRef<HTMLDivElement>) => {
    return (
        <div className={"h-0 w-0 box-border py-3 overflow-y-hidden flex flex-col justify-start items-center group-[.pdf-show-toc]/pdfContainer:w-fit group-[.pdf-show-toc]/pdfContainer:max-w-[180px] group-[.pdf-show-toc]/pdfContainer:overflow-y-scroll overflow-x-hidden transition-all duration-200 bg-muted dark:bg-muted/90 rounded-sm no-scrollbar"} ref={ref} />
    )
})


TocContainer.displayName = "TocContainer"


export default TocContainer;
