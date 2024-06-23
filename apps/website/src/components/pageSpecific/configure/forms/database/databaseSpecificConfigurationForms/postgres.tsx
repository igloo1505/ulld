import { AppConfigSchemaType } from "@ulld/configschema/zod/main";
import { TextInput } from "@ulld/full-form/textInput";
import { motion } from "framer-motion";
import React, { ForwardedRef, forwardRef } from "react";
import { NumberInput } from "@ulld/full-form/numberInput";
import FormSectionHeading from "../../../formUtils/formSectionHeading";
import { LogoAsText } from "#/components/general/logoAsText";
import InlineCode from "#/components/general/inlineCode";

interface PostgresSpecificConfigurationFormProps {}

export const PostgresSpecificConfigurationForm = forwardRef(
  (
    props: PostgresSpecificConfigurationFormProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <motion.div
        className={"space-y-6"}
        ref={ref}
        initial={{
          x: -300,
          opacity: 1,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        exit={{
          x: -300,
          opacity: 0,
        }}
      >
        <FormSectionHeading subtitle={<>For security reasons, <LogoAsText fontSize={13} /> will write your connection string to a pair of environment variables, <InlineCode className={"text-foreground"}>POSTGRES_URL</InlineCode> and <InlineCode className={"text-foreground"}>POSTGRES_URL_POOLING</InlineCode>. You can change your database to any other Postgres instance by changing these variables in the future.</>}>Postgres</FormSectionHeading>
        <TextInput<AppConfigSchemaType>
          label="Connection URI"
          desc={
            <>
              <span className={"italic"}>Either</span> a connection URI or a
              database name <span className={"italic"}>and</span> port number
              are required to use Postgres.
            </>
          }
          name="build.database.postgres.connectionURI"
        />

        <TextInput<AppConfigSchemaType>
          label="Database Name"
          name="build.database.postgres.dbName"
          classes={{
            input: "w-[300px]",
          }}
        />
        <NumberInput<AppConfigSchemaType>
          noButtons
          label="Port"
          modalTitle="Postgres Port"
          name="build.database.postgres.port"
        />
      </motion.div>
    );
  },
);

PostgresSpecificConfigurationForm.displayName =
  "PostgresSpecificConfigurationForm";
