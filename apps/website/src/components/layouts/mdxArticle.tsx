import { getRandomId } from "@ulld/utilities/identity";
import React, { ForwardedRef, HTMLProps, ReactNode, forwardRef } from "react";
import ApplyMathjaxBandaid from "../utility/applyMathjaxBandaid";
import clsx from "clsx";

interface MDXArticleProps extends HTMLProps<HTMLElement> {
  children: ReactNode;
}

const MDXArticle = forwardRef(
  ({ children, ...props }: MDXArticleProps, ref: ForwardedRef<HTMLElement>) => {
    const id = props.id ? props.id : getRandomId();
    return (
      <article
        {...props}
        ref={ref}
        id={id}
        className={clsx(
          "prose prose-gray dark:prose-invert prose-a:text-link !max-w-[min(83%,1080px)] py-8 mx-8",
          props.className,
        )}
      >
        <ApplyMathjaxBandaid container={id} />
        {children}
      </article>
    );
  },
);

MDXArticle.displayName = "MDXArticle";

export default MDXArticle;
