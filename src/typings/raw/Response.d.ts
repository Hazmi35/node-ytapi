import { Etag, ResponseKinds } from ".";
import { Resource } from "./Resource";

export interface Response {
    kind: ResponseKinds;
    etag: Etag;
    nextPageToken?: string;
    prevPageToken?: string;
    pageInfo?: {
        totalResults: number;
        resultsPerPage: number;
    };
    items: Resource[];
}
