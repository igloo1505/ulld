import React from 'react'
import { AddEquationFormType } from './types'
import { SideFormContainer } from '../../layouts/sideMenu/sideFormContainer'
import { TextInput } from '@ulld/full-form/textInput'
import { MathInput } from '@ulld/full-form/mathInput'


interface AddEquationFormOneProps {
    form: AddEquationFormType
    next: () => void
}

const AddEquationFormOne = ({ form, next }: AddEquationFormOneProps) => {
    return (
        <SideFormContainer
            form={form}
            onSubmit={next}
            submitBtnText="Next"
        >
            <TextInput
                label="Title"
                name="title"
                desc="Can contain latex"
            />
            <MathInput
                label="Content"
                desc="Can contain latex"
                name="content"
            />
            <TextInput
                label="Equation Id"
                name="equationId"
                keyboardFilter="noSpaces"
            />
        </SideFormContainer>
    )
}


AddEquationFormOne.displayName = "AddEquationFormOne"


export default AddEquationFormOne;
