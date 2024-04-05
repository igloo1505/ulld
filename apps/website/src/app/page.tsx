import Mars from "#/components/pageSpecific/landing/planets/main";
import React from "react";

interface HomePageProps { }

const HomePage = (props: HomePageProps) => {
    return (
        <div className={"flex flex-col justfiy-center items-center gap-6 m-6"}>
            <div className={"w-full h-full min-h-[calc(100vh-64px)] grid grid-cols-2 place-items-center"}>
                <h1 className={"text-4xl"}>ULLD</h1>
                <Mars />
            </div>
        </div>
    );
};

HomePage.displayName = "HomePage";

export default HomePage;
