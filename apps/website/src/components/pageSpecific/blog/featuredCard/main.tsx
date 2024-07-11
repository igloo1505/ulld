import React from "react";
import FeaturedBlogPostEquation from "./featuredEquation";
import FeaturedImage from "./image";
import MathjaxProvider from "#/components/utility/providers/mathjax";
import FeaturedBlogPostContent from "./content";
import BlogPostCardIcon from "./icon";
import { ValidIconName } from "@ulld/icons";
import { PageType } from "#/types/general";

interface Props {
    post: PageType;
    isFeatured?: boolean;
    imagePriority?: boolean;
}

const FeaturedBlogPost = ({
    post,
    isFeatured,
    imagePriority,
}: Props) => {
    const images = post.data.images
    const featuredEquation = post.data.featuredEquation
    const icon = post.data.icon
    if (
        isFeatured
            ? (!images || images.length === 0) && !featuredEquation
            : (!images || images.length === 0) && !featuredEquation && !icon
    ) {
        throw new Error(
            `${isFeatured ? "Featured blog" : "Blog"} post does not contain an image or a featured equation. Fix this dumbass.`,
        );
    }
    if(!post.data.description){
        throw new Error(`Blog post ${post.data.title} was provided to the blog page, but does not have a description. This item either needs a description or it needs to be removed from the getAllBlogPages function return value.`)
    }

    if(!post.data.id){
        console.log("post: ", post)
        throw new Error(`Blog post ${post.data.title} does not have an id. It is not possible to generate a link for this item.`)
    }

    /* TODO: Look up framer-motion property that allows the initial animation to be hidden if the object is initially in view. I forget, but I know it exists. */
    return (
        <MathjaxProvider>
            <div
                className={
                    "w-full flex flex-col justify-center items-center lg:flex-row lg:max-h-[300px] lg:gap-6 border border-b-border border-r-transparent border-l-transparent border-t-transparent hover:border-foreground/20 hover:rounded-lg lg:border-border lg:rounded-lg transition-colors duration-300 "
                }
            >
                <div
                    className={
                        "w-full h-full max-h-[300px] lg:h-[300px] lg:max-w-[25%] relative flex flex-col justify-center items-center pb-[1.2px]"
                    }
                >
                    {featuredEquation ? (
                        <FeaturedBlogPostEquation equation={featuredEquation} />
                    ) : images && images.length ? (
                        <FeaturedImage
                            priority={imagePriority}
                            src={`/assets/blog/${images[0]}`}
                        />
                    ) : icon ? (
                        <BlogPostCardIcon icon={icon as ValidIconName} />
                    ) : null}
                </div>
                <FeaturedBlogPostContent
                    title={post.data.title}
                    summary={post.data.description}
                    id={post.data.id as string}
                />
            </div>
        </MathjaxProvider>
    );
};

FeaturedBlogPost.displayName = "FeaturedBlogPost";

export default FeaturedBlogPost;
