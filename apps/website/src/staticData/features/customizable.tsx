import { FeaturedContainerPropsRequired } from "#/components/pageSpecific/landing/feature/types";


export const customizableFeature: FeaturedContainerPropsRequired = {
    label: "Customize Endlessly",
    title: "1 config to rule them all",
    desc: () => {
        return (
            <div>
                Dignissim tristique turpis, at sed id vestibulum a vulputate blandit
                amet metus aliquet pellentesque. Felis justo pellentesque lectus ac elit
                vestibulum vitae feugiat dictumst eu convallis ultricies nam tortor
                pellentesque viverra. Habitasse cursus nunc ultricies sagittis est sem
                est dui elementum massa tempor suscipit ut dolor aliquet eget est
                imperdiet.
            </div>
        );
    },
    component: () => {
        return <div>Component here</div>;
    },
};
