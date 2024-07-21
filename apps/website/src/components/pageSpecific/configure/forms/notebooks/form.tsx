"use client";
import Hint from "#/components/general/hint";
import InlineCode from "#/components/general/inlineCode";
import { AppConfigSchemaType } from "@ulld/configschema/zod/main";
import { TextAreaInput } from "@ulld/full-form/textArea";
import { TextInput } from "@ulld/full-form/textInput";
import React from "react";
import Link from "next/link";
import { LogoAsText } from "#/components/general/logoAsText";

interface NotebookConfigurationFormProps {}

export const NotebookConfigurationForm = (
  props: NotebookConfigurationFormProps,
) => {
  return (
    <div className={"w-full space-y-6"}>
      <TextInput<AppConfigSchemaType>
        label="Environment Path"
        name="jupyter.environment"
        desc="The path to the Jupyter environment on your own system. For now, only Python is supported as a programming interface, although all of the Markdown and non-programming features of Jupyter are still supported. When an internal package is developed, this will be extended to support a wide range of Jupyter kernels and languages."
      />
      <TextAreaInput<AppConfigSchemaType>
        label="Token"
        name="jupyter.jupyterToken"
        desc={
          <>
            A secure token with which to connect to the jupyter server instance.
            This token must also be present in the{" "}
            <InlineCode>jupyter_server_config.py</InlineCode> file related to
            the environment provided above. Any 64 character random string of
            alpha-numeric characters will work.
          </>
        }
      />
      <Hint className={"mb-4"}>
        If you are concerned about providing a secure token here, you can append
        it to your configuration file yourself at the{" "}
        <InlineCode>jupyter.jupyterToken</InlineCode> path.
      </Hint>
      <Hint note className={"!mt-0"}>
        Read more about configuring the Jupyter integration{" "}
        <Link className={"text-link"} href="/docs/user/jupyterIntegration">here</Link>
      </Hint>
      <TextInput<AppConfigSchemaType>
        label="Kernel"
        name="jupyter.kernel"
        desc={<>The name of the kernel. Until <LogoAsText fontSize={13} /> grows to support other languages and kernels, this default is most likely accurate.</>}
        classes={{
          input: "w-[300px]",
        }}
      />
    </div>
  );
};

NotebookConfigurationForm.displayName = "NotebookConfigurationForm";
