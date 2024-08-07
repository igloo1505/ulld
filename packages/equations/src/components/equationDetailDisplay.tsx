import React from "react";
import { EditEquationItem } from "./addEquationFormWrapper";
import { formatEquationSearchParams } from "./utils";
import { HashIcon } from "lucide-react";
import { EquationDisplayBadge } from "./equationDisplayBadge";
import { EquationDetailLinkButton } from "./equationDisplayButton";
import { H3 } from "@ulld/embeddable-components/heading";
import { MdxContentSERVER } from "@ulld/render/mdx/server";
import { CopyTextButton } from "@ulld/ui/copyTextButton";
import { CodeHighlightContainer } from "@ulld/ui/codeHighlightContainer";

interface EquationDetailDisplayProps {
  equation: EditEquationItem;
  isModal?: boolean;
}

export const EquationDetailDisplay = ({
  equation: item,
  isModal = false,
}: EquationDetailDisplayProps) => {
  if (!item) return null;
  const params = new URLSearchParams();
  params.set("equationId", item.equationId || `${item.id}`);
  return (
    <div
      className={
        "relative w-fit h-fit max-w-[calc(100vw-2rem)] grid grid-cols-1 lg:grid-cols-[1fr_minmax(150px,250px)] px-4 py-3 rounded-lg gap-x-8 m-8 bg-card border text-card-foreground"
      }
    >
      <div className={"w-full h-full flex flex-col justify-start items-start min-w-[250px] sm:min-w-[300px]"}>
        <H3>
          <MdxContentSERVER
            content={item.title}
            /* stylesId={`${id}-title`} */
          />
        </H3>
        {item.desc && item.desc !== "" && (
          <MdxContentSERVER
            content={item.desc}
            className={"text-sm text-muted-foreground"}
          />
        )}
        <MdxContentSERVER
          isMathOnly
          autoWrap
          large
          content={item.content}
          className={
            "text-xl my-4 w-full flex-grow flex flex-col justify-center items-center flex-wrap"
          }
        />
        {item.asPython && (
          <CodeHighlightContainer
            language="python"
            className={"w-fit min-w-fit"}
          >
            {item.asPython}
          </CodeHighlightContainer>
        )}
      </div>
      <div
        className={"w-full flex flex-col justify-center items-start gap-2 mt-2"}
      >
        {Boolean(item.tags.length) && (
          <>
            <div className={"text-sm"}>Tags</div>
            <div
              className={
                "flex flex-row justify-start items-center gap-2 flex-wrap"
              }
            >
              {item.tags.map((t) => {
                return (
                  <EquationDisplayBadge
                    key={`eq-${t.value}`}
                    isModal={isModal}
                    href={`/equations?${formatEquationSearchParams({ tags: [t.value] })}`}
                  >
                    {t.value}
                  </EquationDisplayBadge>
                );
              })}
            </div>
          </>
        )}
        {Boolean(item.variables.length) && (
          <>
            <div className={"text-sm mt-3"}>Variables</div>
            <div
              className={
                "flex flex-row justify-start items-center gap-2 flex-wrap"
              }
            >
              {item.variables.map((t) => {
                return (
                  <EquationDisplayBadge
                    key={`eq-${t}`}
                    isModal={isModal}
                    variant="outline"
                    href={`/equations?${formatEquationSearchParams({ variables: [t] })}`}
                  >
                    {t}
                  </EquationDisplayBadge>
                );
              })}
            </div>
          </>
        )}
        {item.equationId && (
          <div
            className={"mt-4 grid grid-cols-1 grid-rows-2 gap-4 w-full h-fit"}
          >
            <div className={"w-full"}>
              <CopyTextButton
                copyText={item.equationId}
                className={"w-full"}
                toast={{
                  title: "Success",
                  description:
                    "The equation Id has been copied to your clipboard.",
                }}
                withIcon
              >
                <span
                  className={"flex flex-row justify-center items-center gap-0"}
                >
                  <HashIcon className={"w-4 h-4"} />
                  {item.equationId}
                </span>
              </CopyTextButton>
            </div>
            <div className={"w-full grid grid-cols-2 grid-rows-1 gap-3"}>
              <EquationDetailLinkButton
                variant="secondary"
                href={`/searchAll?${params.toString()}`}
                isModal={isModal}
              >
                Notes
              </EquationDetailLinkButton>
              <EquationDetailLinkButton
                variant="secondary"
                href={`/equations/add?edit=${item.id}`}
                isModal={isModal}
              >
                Edit
              </EquationDetailLinkButton>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

EquationDetailDisplay.displayName = "EquationDetailDisplay";

export default EquationDetailDisplay;
