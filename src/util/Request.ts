import { YouTube } from "..";
import fetch from "node-fetch";

export class Request {
    public readonly baseURL = "https://www.googleapis.com/youtube/v3/";
    public constructor(public readonly youtube: YouTube) {}

    // TODO: Create YouTube response typings
    public make(endpoint: string, qs: Record<string, string> = {}): Promise<Response | undefined> {
        const URI = new URL(endpoint, this.baseURL);
        URI.search = new URLSearchParams(Object.assign({ key: this.youtube.key }, qs)).toString();
        return fetch(URI.toString())
            .then(res => res.json())
            .then(res => {
                if (res.error) return Promise.reject(res.error);
                return res;
            })
            .catch(e => Promise.reject(e));
    }
}
