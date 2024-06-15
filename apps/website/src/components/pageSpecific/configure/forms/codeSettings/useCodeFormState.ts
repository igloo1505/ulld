"use client";
import { AppConfigSchemaType } from "@ulld/configschema/zod/main";
import { useFormContext } from "@ulld/full-form/form";
import {
  CodeSettingFormContext,
  CodeSettingFormDispatchContext,
} from "./context";
import { useContext } from "react";
import {
  CodeConfigSchema,
  defaultThemes,
} from "@ulld/configschema/zod/codeConfig";

interface EventProps {
  themes: CodeConfigSchema["theme"];
  targetTheme: "dark" | "light";
}

declare global {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface WindowEventMap {
    "set-theme-modal-themes": CustomEvent<EventProps>;
  }
}

export const useCodeFormState = () => {
  const form = useFormContext<AppConfigSchemaType>();
  const formValues = form.watch("code");
  const dispatch = useContext(CodeSettingFormDispatchContext);
  const codeContext = useContext(CodeSettingFormContext);

  return {
    ...codeContext,
    codeState: formValues,
    closeThemeSelectModal: () => {
      dispatch({ type: "setThemeSelectModal", payload: false });
    },
    setGlobalThemeData: (themeData: Partial<CodeConfigSchema["theme"]>) => {
      if (themeData.dark) {
        form.setValue("code.theme.dark", themeData.dark);
      }
      if (themeData.light) {
        form.setValue("code.theme.light", themeData.light);
      }
    },
    showThemeSelectModal: (theme: EventProps["targetTheme"]) => {
      window.dispatchEvent(
        new CustomEvent("set-theme-modal-themes", {
          detail: {
            themes: formValues?.theme || defaultThemes,
            targetTheme: theme,
          },
        }),
      );
      dispatch({ type: "setThemeSelectModal", payload: true });
    },
    dispatch,
  };
};
