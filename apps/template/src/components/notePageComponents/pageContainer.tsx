// Slot: UI/MdxNoteContainer type:generatedPage propsExtends:NotePageWrapperProps
import React from 'react'
import REPLACEME from '../REPLACEMEcomponent';
import { NotePageWrapperProps } from '@ulld/ui/types';
import NoteDetailsSheetTemplate from '../slots/navigation/noteDetailSheet';

export interface PageProps extends Omit<NotePageWrapperProps, "toc"> {}

const NotePageWrapperTemplate = ({children, ...props}: PageProps) => {
return (
    <REPLACEME<NotePageWrapperProps>
            {...props}
            toc={NoteDetailsSheetTemplate}
        >
            {children}
    </REPLACEME>
)
}


NotePageWrapperTemplate.displayName = "NotePageWrapperTemplate"


export default NotePageWrapperTemplate;
