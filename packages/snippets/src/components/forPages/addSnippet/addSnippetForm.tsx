"use client";
import { useToast } from "@ulld/tailwind/use-toast";
import { FieldValues, UseFormReturn } from "@ulld/full-form/form";
import { CodeInput } from "@ulld/full-form/codeTextArea";
import { client } from "@ulld/api/client";
import { ShikiLanguageSelect } from "@ulld/full-form/selectShikiLanguage";
import { Form } from "@ulld/tailwind/form";
import { TextAreaInput } from "@ulld/full-form/textArea";
import { TextInputWithBadgeList } from "@ulld/full-form/textInputWithBadgeList";
import { Button } from "@ulld/tailwind/button";

interface AddSnippetFormProps<T extends FieldValues> {
    form: UseFormReturn<T>
}

const AddSnippetForm = <T extends FieldValues>({ form }: AddSnippetFormProps<T>) => {
    const { toast } = useToast();
    const handleSubmit = async () => {
        let data = form.getValues();
        delete data.keywordInput;
        let success = await client.snippets.saveSnippet.mutate(data as any);
        if (success) {
            if (data.id) {
                /* router. */
            } else {
                form.reset();
                toast({
                    title: "Success",
                    description: "Snippet was added successfully",
                });
            }
        }
    };

    return (
        <Form {...form}>
            <form className="space-y-8">
                <ShikiLanguageSelect
                    label="Language"
                    name="language"
                    desc={"Primary technology snippet belongs to."}
                />
                <CodeInput
                    /* TODO: Come back and make sure this doesn't cause issues with cacheing content that should be cleared along with the form. */
                    localStorageKey="add-snippet-content-value"
                    name="content"
                    label="Content"
                    placeholder="Snippet content goes here"
                />
                <TextAreaInput
                    label="Description"
                    desc="Description of what this snippet does."
                    name="description"
                    placeholder="A short description."
                    className="resize-none"
                />
                <TextInputWithBadgeList name="keywords" label="Keywords" />
                <Button onClick={handleSubmit}>Submit</Button>
            </form>
        </Form>
    );
};

AddSnippetForm.displayName = "AddSnippetForm";

export default AddSnippetForm;
