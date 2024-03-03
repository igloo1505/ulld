import lightOrDarkImage from '@check-light-or-dark/image';



export const useImageDarkness = async (image: string): Promise<"neutral" | "dark" | "light"> => {
    let isDark = await lightOrDarkImage({
        image: image,
    })
    return isDark
}
