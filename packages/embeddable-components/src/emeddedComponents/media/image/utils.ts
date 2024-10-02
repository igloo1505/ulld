export const isRemote = (p: string, imageRemoteTest?: RegExp[]) => {
    let remoteTest: RegExp[] = [
        /^(http(s?)\:\/\/|www\.)/gm,
        /\.(com|gov|edu|app|io|dev|net|org|us|ai|gg|education|info|xyz|ly|site|me)/gm,
    ];
    if (imageRemoteTest) {
        remoteTest = remoteTest.concat(imageRemoteTest);
    }
    return remoteTest.some((t) => t.test(p));
};

