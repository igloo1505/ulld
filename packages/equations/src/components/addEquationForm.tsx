import React, { MouseEvent, useState } from "react";
import { AddEquationFormType } from "./types";
import { AddEquationFormOne } from "./addEquationPanel1";
import { AddEquationFormTwo } from "./addEquationPanel2";
import { AddEquationFormThree } from "./addEquationPanel3";
import { client } from "@ulld/api/client";
import { useToast } from "@ulld/tailwind/use-toast";

interface AddEquationFormProps {
    form: AddEquationFormType;
}

const AddEquationForm = ({ form }: AddEquationFormProps) => {
    const [panel, setPanel] = useState(1);
    const { toast } = useToast();

    const next = () => {
        setPanel(panel + 1);
    };

    const back = () => {
        setPanel(panel - 1);
    };

    const resetForm = () => {
        form.setValue("title", "");
        form.setValue("id", undefined);
        form.setValue("desc", "");
        form.setValue("content", "");
        form.setValue("equationId", undefined);
        form.setValue("asPython", undefined);
        form.setValue("tags", []);
        form.setValue("tagInput", "");
        form.setValue("relatedValues", []);
        form.setValue("variables", []);
        form.setValue("variableInput", "");
        form.setValue("keywords", []);
        form.setValue("keywordInput", "");
    };

    const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        e.preventDefault();
        let vals = form.getValues();
        let res = await client.equations.addEquation.mutate(vals);
        if (res) {
            toast({
                title: "Success",
                description: "Equation has been saved successfully.",
            });
            setPanel(1);
            resetForm();
        }
    };

    return (
        <>
            {panel === 1 && <AddEquationFormOne form={form} next={next} />}
            {panel === 2 && (
                <AddEquationFormTwo form={form} next={next} back={back} />
            )}
            {panel === 3 && (
                <AddEquationFormThree form={form} next={handleSubmit} back={back} />
            )}
        </>
    );
};

AddEquationForm.displayName = "AddEquationForm";

export default AddEquationForm;
