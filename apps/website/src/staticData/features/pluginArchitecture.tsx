import { FeaturedContainerPropsRequired } from "#/components/pageSpecific/landing/feature/types";

export const pluginArchitectureFeature: FeaturedContainerPropsRequired = {
  title: "Built for a community",
  label: "Built for a community",
  desc: () => {
        return ("Ac suspendisse aliquam dolor. Congue sit ut in, donec morbi in tellus erat blandit et aenean praesent tincidunt sed nullam proin auctor in lorem, in dapibus vel vestibulum lacus nullam sit dolor,. At id purus eleifend eu neque nulla laoreet suscipit vulputate penatibus sed amet convallis ornare vulputate dui arcu.")
    },
  component: () => {
    return <div>Community image here</div>;
  },
};
