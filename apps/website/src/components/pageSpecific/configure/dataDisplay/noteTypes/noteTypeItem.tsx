import React from 'react'
import { ConfigurationFormData } from '../../staticData'



interface NoteTypeItemProps {
    item: ConfigurationFormData["noteTypes"][number]
}

const NoteTypeItem = (props: NoteTypeItemProps) => {
return (
    <div></div>
)
}


NoteTypeItem.displayName = "NoteTypeItem"


export default NoteTypeItem;
