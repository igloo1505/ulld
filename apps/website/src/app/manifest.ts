import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Uh Little Less Dum",
        short_name: "ULLD",
        description: "Forever free, perpetually open source academic note taking.",
        start_url: "/",
        display: "standalone",
        theme_color: "#333333",
        background_color: "#333333",
        icons: [
            {
                src: "/icons/android-chrome-192x192.png",
                sizes: "192x192",
                type: "image/png",
            },
            {
                src: "/icons/android-chrome-512x512.png",
                sizes: "512x512",
                type: "image/png",
            },
        ],
    };
}
