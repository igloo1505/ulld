import { BlogPost } from "contentlayer/generated";
import React from "react";
import FeaturedBlogPostEquation from "./featuredEquation";
import FeaturedImage from "./image";

const FeaturedBlogPost = ({images, featuredEquation}: BlogPost) => {
    if ((!images || images.length === 0) && !featuredEquation) {
        throw new Error(
            "Featured blog post does not contain an image or a featured equation. Fix this dumbass.",
        );
    }
    return (
        <div
            className={
                "w-full flex flex-col justify-center items-center md:grid md:grid-cols-[1fr_2fr] md:place-items-center"
            }
        >
            <div>
           {featuredEquation ? <FeaturedBlogPostEquation equation={featuredEquation} /> : (images && images.length) ? <FeaturedImage src={images[0] as string} /> : null}
            </div>
        </div>
    );
};

FeaturedBlogPost.displayName = "FeaturedBlogPost";

export default FeaturedBlogPost;
