// Slot: editor/MdxEditorPage type:page propsExtends:EditorPageContentProps
import React from 'react'
import { EditorPageContentProps } from '@ulld/utilities/corePageProps'
import REPLACEME from '#/components/REPLACEMEcomponent'

export interface PageProps extends EditorPageContentProps {
}

const MdxEditorPageTemplate = (props: PageProps) => {
return (
    <REPLACEME {...props} />
)
}


MdxEditorPageTemplate.displayName = "REPLACEME"


export default MdxEditorPageTemplate;
