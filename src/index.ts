export class YouTube {
    public constructor(public readonly key: string) {
        if (typeof key !== "string") throw new Error("The provided YouTube API key is not a string");

        Object.defineProperty(this, "key", { enumerable: false });
    }
}
