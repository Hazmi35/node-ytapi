import { Request } from "./util/Request";

export class YouTube {
    public request!: Request;
    public constructor(public readonly key: string) {
        if (typeof key !== "string") throw new Error("The provided YouTube API key is not a string");

        Object.defineProperty(this, "key", { enumerable: false });

        this.request = new Request(this);
    }
}
