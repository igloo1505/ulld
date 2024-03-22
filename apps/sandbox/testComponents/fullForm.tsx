"use client";
import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Provider } from "@ulld/full-form/provider";
import { CodeInput } from "@ulld/full-form/codeTextArea";
import { TextInput } from "@ulld/full-form/textInput";
import { NumberInput } from "@ulld/full-form/numberInput";
import { MathInput } from "@ulld/full-form/mathInput";
import { TextAreaInput } from "@ulld/full-form/textArea";
import { FullFormSidePanelLayout } from "@ulld/full-form/layout/sidePanel";
import { MdxLivePreviewPanel } from "@ulld/ui/mdx/livePreviewPanel";



const FormTestSchema = z.object({
  code: z.string(),
  number: z.coerce.number().min(0).max(10),
  textStuff: z.string(),
  multiLineText: z.string(),
  mathLatex: z.string(),
});


const FullFormVisualTest = () => {
  const form = useForm<z.infer<typeof FormTestSchema>>({
    resolver: zodResolver(FormTestSchema),
    defaultValues: {
      code: "",
      number: 5,
    },
    mode: "onChange"
  });

  console.log("form.watch(): ", form.watch());

  return (
      <FullFormSidePanelLayout
        title="Side Panel Layout"
        form={form}
        panel={<MdxLivePreviewPanel
                    content={JSON.stringify(form.watch(), null, 4)}
                />}
        formContainerClasses={"bg-popover"}
      >
        <Provider>
          <CodeInput
            label={"Code"}
            localStorageKey="form-test-code"
            name="code"
          />
          <NumberInput
            label="Number"
            name="number"
            step={0.5}
            decimals={2}
            min={0}
            max={10}
          />
          <TextInput
            name="textStuff"
            label="Text Input"
            />
          <TextAreaInput
            name="multiLineText"
            label="Text Area Input"
            />
          <MathInput
            name="mathLatex"
            label="Math Input"
            />
        </Provider>
      </FullFormSidePanelLayout>
  );
};

FullFormVisualTest.displayName = "FullFormVisualTest";

export default FullFormVisualTest;
