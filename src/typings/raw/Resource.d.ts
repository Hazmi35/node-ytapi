import { SearchItemID } from ".";

export interface Resource {
    kind: Kinds;
    etag: Etag;
    id: string | SearchItemID;
    snippet: any[];
}
