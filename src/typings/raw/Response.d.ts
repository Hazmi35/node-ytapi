import { Etag, responseKinds } from ".";
import { Resource } from "./Resource";

export interface Response {
    kind: responseKinds;
    etag: Etag;
    nextPageToken?: string;
    prevPageToken?: string;
    pageInfo?: {
        totalResults: number;
        resultsPerPage: number;
    };
    items: Resource[];
}
