import SideBySideWithSource from "#/components/layouts/withSource/main";
import React from "react";
import { z } from "zod";
import { allDocuments } from "contentlayer/generated";
import { notFound } from "next/navigation";

const searchParamSchema = z.object({
  id: z.string(),
});

type WithSourceSearchParams = z.input<typeof searchParamSchema>;

interface WithSourcePageProps {
  searchParams: WithSourceSearchParams;
}

const WithSourcePage = ({ searchParams }: WithSourcePageProps) => {
  let params = searchParamSchema.safeParse(searchParams);
  if (!params.success) return notFound();
  let article = allDocuments.find((a) => "id" in a && a.id === params.data.id);
  if (!article) return notFound();

  return (
    <div className={"pt-[76px] min-h-screen-noNav"}>
      <SideBySideWithSource mdx={article} />
    </div>
  );
};

WithSourcePage.displayName = "WithSourcePage";

export default WithSourcePage;
