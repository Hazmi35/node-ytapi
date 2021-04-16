import { ResourceKind, SearchItemID } from ".";

export interface Resource {
    kind: ResourceKind;
    etag: Etag;
    id: string | SearchItemID;
    snippet: any[];
}
