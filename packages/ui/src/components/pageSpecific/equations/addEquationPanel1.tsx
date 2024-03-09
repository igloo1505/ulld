import React from 'react'
import { AddEquationFormType } from './types'
import { SideFormContainer } from '../../layouts/sideMenu/sideFormContainer'
import { FullFormInput } from '../../menus/fullForm/fullFormInput'
import { FullFormMathStringInput } from '../../menus/fullForm/fullFormMathStringInput'


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
            <FullFormInput
                label="Title"
                name="title"
                desc="Can contain latex"
            />
            <FullFormMathStringInput
                label="Content"
                desc="Can contain latex"
                name="content"
            />
            <FullFormInput
                label="Equation Id"
                name="equationId"
                keyboardFilter="noSpaces"
            />
        </SideFormContainer>
    )
}


AddEquationFormOne.displayName = "AddEquationFormOne"


export default AddEquationFormOne;
