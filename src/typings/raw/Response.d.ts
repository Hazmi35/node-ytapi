import { Etag, responseKinds } from ".";

export interface Response {
    kind: responseKinds;
    etag: Etag;
    nextPageToken?: string;
    prevPageToken?: string;
    pageInfo?: {
        totalResults: number;
        resultsPerPage: number;
    };
    // TODO: Create typings for raw resource
    items: Resource[];
}
