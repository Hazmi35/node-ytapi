import { Etag, ResponseKind } from ".";
import { Resource } from "./Resource";

export interface Response {
    kind: ResponseKind;
    etag: Etag;
    nextPageToken?: string;
    prevPageToken?: string;
    pageInfo?: {
        totalResults: number;
        resultsPerPage: number;
    };
    items?: Resource[];
}
