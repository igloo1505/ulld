import React, { MouseEvent } from 'react'
import { AddEquationFormType } from './types'
import SideFormContainer from '#/components/layout/uniqueLayouts/sideMenu/sideFormContainer';
import FormFieldWithBadgeList from '#/components/inputs/formFieldWithBadgeList';


interface AddEquationFormThreeProps {
    form: AddEquationFormType
    next: (e: MouseEvent<HTMLButtonElement>) => (void | Promise<void>)
    back: (e: MouseEvent<HTMLButtonElement>) => (void | Promise<void>)
}

const AddEquationFormThree = ({ form, next, back }: AddEquationFormThreeProps) => {
    return (
        <SideFormContainer
            form={form}
            onSubmit={next}
            submitBtnText="Submit"
            onBackClick={back}
        >
            <FormFieldWithBadgeList
                form={form}
                badgeFormKey="tags"
                inputFormKey="tagInput"
                inputLabel="Tags"
            />
            <FormFieldWithBadgeList
                form={form}
                badgeFormKey="variables"
                inputFormKey="variableInput"
                inputLabel="Variables"
            />
            <FormFieldWithBadgeList
                form={form}
                badgeFormKey="keywords"
                inputFormKey="keywordInput"
                inputLabel="Keywords"
            />
        </SideFormContainer>
    )
}


AddEquationFormThree.displayName = "AddEquationFormThree"


export default AddEquationFormThree;
