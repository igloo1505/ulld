import React from 'react'
import { AddEquationFormType } from './types'
import SideFormContainer from '#/components/layout/uniqueLayouts/sideMenu/sideFormContainer';
import FullFormTextAreaCodeEditor from '#/components/layout/uniqueLayouts/fullForm/fullFormTextAreaCodeEditor';
import FullFormTextAreaInput from '../../layout/uniqueLayouts/fullForm/fullFormTextAreaInput';


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
            <FullFormTextAreaInput
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
