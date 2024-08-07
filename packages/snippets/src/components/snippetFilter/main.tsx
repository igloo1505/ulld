"use client";
import React from 'react'
import SnippetFilterInput from "./snippetFilterInput";
import SnippetLanguageSelect from "./snippetLanguageSelect"
import { SnippetFilterParams } from "../../types";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@ulld/tailwind/button";

interface SnippetFilterProps {}


const SnippetFilter = (props: SnippetFilterProps) => {
  const params = useSearchParams();
  const paramData: SnippetFilterParams = {
    language: params.get("language") as SnippetFilterParams["language"],
    query: params.get("query") as SnippetFilterParams["query"],
  };
  return (
    <div className={"w-full h-fit flex flex-row justify-between items-center px-8 md:px-16 pt-8 mb-4"}>
      <div
        className={
          "w-fit h-full flex flex-row justify-start items-center gap-4"
        }
      >
        <SnippetFilterInput params={paramData} />
        <SnippetLanguageSelect params={paramData} />
      </div>
      <div>
        <Link href={"/snippets/add"}>
          <Button>Add Snippet</Button>
        </Link>
      </div>
    </div>
  );
};

SnippetFilter.displayName = "SnippetFilter";

export default SnippetFilter;
