import React from 'react'
import { Input, InputProps } from '../shad/ui/input'
import MdxCheckbox, { MdxInputProps } from './Checkbox'


/* export type MdxInputProps = React.HTMLAttributes<HTMLInputElement> & { type: string }) => { */

const MdxInput = (
    props
        : MdxInputProps
) => {
    /* TODO: Come back to these type errors... extending types isn't cooperating. */
    if (props.type === "checkbox") {
        return <MdxCheckbox {...props} />
    }
    return (
        <Input {...props as InputProps} />
    )
}


MdxInput.displayName = "MdxInput"


export default MdxInput;
