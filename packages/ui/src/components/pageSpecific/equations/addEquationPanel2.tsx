import React from 'react'
import { AddEquationFormType } from './types'
import { SideFormContainer } from '../../layouts/sideMenu/sideFormContainer'
import { FullFormTextAreaCodeEditor } from '../../menus/fullForm/fullFormTextAreaCodeEditor'
import { FullFormTextArea } from '../..'


interface AddEquationFormTwoProps {
    form: AddEquationFormType
    next: () => void
    back: () => void
}

const AddEquationFormTwo = ({ form, next, back }: AddEquationFormTwoProps) => {
    return (
        <SideFormContainer
            form={form}
            onSubmit={next}
            submitBtnText="Next"
            onBackClick={back}
        >
            <FullFormTextArea
                label="Description (optional)"
                desc="Can contain latex"
                name="desc"
            />
            <FullFormTextAreaCodeEditor
                name="asPython"
                label="Python Implementation"
                language="python"
            />
        </SideFormContainer>
    )
}


AddEquationFormTwo.displayName = "AddEquationFormTwo"


export default AddEquationFormTwo;
