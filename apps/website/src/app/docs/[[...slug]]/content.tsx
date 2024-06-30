"use client";
import type { TypeTable } from "#/components/docs/typeTable";
import { webComponentMap } from "#/mdx/componentMap";
import { getComponentMap } from "@ulld/component-map/client";
import defaultComponents from "fumadocs-ui/mdx";
import { useMDXComponent } from "next-contentlayer/hooks";

export function Content({ code, TypeTableComponent }: { code: string, TypeTableComponent: typeof TypeTable }) {
  const components = getComponentMap(
    code,
    { avoidKeys: ["mark"] },
    webComponentMap,
  );

  const MDX = useMDXComponent(code);

  return <MDX components={{ ...defaultComponents, ...components, TypeDoc:  TypeTableComponent }} />;
}
