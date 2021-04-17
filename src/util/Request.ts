import { YouTube } from "..";
import fetch from "node-fetch";
import { Resource, Response } from "../typings/raw";
import { ResourceKind } from "../typings";
import { Parts, Endpoints } from "./Constants";

export class Request {
    public readonly baseURL = "https://www.googleapis.com/youtube/v3/";
    public constructor(public readonly youtube: YouTube) {}

    public make(endpoint: string, qs: Record<string, string> = {}): Promise<Response | undefined> {
        const URI = new URL(endpoint, this.baseURL);
        URI.search = new URLSearchParams(Object.assign({ key: this.youtube.key }, qs)).toString();
        return fetch(URI.toString())
            .then(res => res.json())
            .then(res => {
                if (res.error) return Promise.reject(res.error);
                return res;
            });
    }

    public getResource(type: ResourceKind, qs: Record<string, string> = {}): Promise<Resource | undefined> {
        const search = new URLSearchParams(Object.assign({ part: Parts[type] }, qs));
        return this.make(Endpoints[type], Object.fromEntries(search))
            .then(result => {
                if (result?.items && result.items.length !== 0) return result.items[0];

                return Promise.reject(Error(`Could not find any resource in ${result!.kind}`));
            });
    }

    public getResourceByID(type: ResourceKind, id: string): Promise<Resource | undefined> {
        return this.getResource(type, { id });
    }

    public getResources(type: ResourceKind, qs: Record<string, string> = {}, count = Infinity, fetched: Resource[] = [], pageToken = ""): Promise<Resource[] | undefined> {
        if (count < 1) return Promise.reject(new Error("Cannot fetch less than 1."));

        const limit = count > 50 ? 50 : count;
        const search = new URLSearchParams(Object.assign({ part: Parts[type], pageToken, maxResults: limit }, qs));

        return this.make(Endpoints[type], Object.fromEntries(search))
            .then(result => {
                if (result?.items && result.items.length !== 0) {
                    const results = fetched.concat(result.items);

                    if (result.nextPageToken && limit !== count) return this.getResources(type, qs, count - limit, results, result.nextPageToken);
                    return results;
                }

                return Promise.reject(Error(`Could not find any resource in ${result!.kind}`));
            });
    }

    public getResourcesByID(type: ResourceKind, ids: string[], count = Infinity): Promise<Resource[] | undefined> {
        return this.getResources(type, { id: ids.join(",") }, count);
    }
}
