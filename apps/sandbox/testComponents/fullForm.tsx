"use client"
import React from 'react'
import {z} from 'zod'
import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import {Provider} from "@ulld/full-form/provider"
import {CodeInput} from "@ulld/full-form/codeTextArea"
import {NumberInput} from "@ulld/full-form/numberInput"
import {FullFormSidePanelLayout} from "@ulld/full-form/layout/sidePanel"
import {MdxLivePreviewPanel} from "@ulld/ui/mdx/livePreviewPanel"



interface FullFormVisualTestProps {
    
}

const FormTestSchema = z
    .object({
        code: z.string(),
        number: z.number().min(0).max(10)
    })
    /* .strict(); */


const FullFormVisualTest = (props: FullFormVisualTestProps) => {
    const form = useForm<z.infer<typeof FormTestSchema>>({
        resolver: zodResolver(FormTestSchema),
        defaultValues: {
            code: "",
            number: 5
        },
    })

return (
    <div className={"w-full h-fit flex flex-col justify-center"}>
            <FullFormSidePanelLayout
                title="Side Panel Layout"
                form={form}
                panel={<MdxLivePreviewPanel 
                    content={form.watch("code")}
                />}
            >
            <Provider>
               <CodeInput 
                    label={"Code"}
                    localStorageKey='form-test-code'
                    name="code"
                /> 
                <NumberInput 
                    label="Number"
                    name="number"
                    min={0}
                    max={10}
                />
            </Provider>
            </FullFormSidePanelLayout>
        </div>
)
}


FullFormVisualTest.displayName = "FullFormVisualTest"


export default FullFormVisualTest;
