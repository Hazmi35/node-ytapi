import { ResourceKinds, SearchItemID } from ".";

export interface Resource {
    kind: ResourceKinds;
    etag: Etag;
    id: string | SearchItemID;
    snippet: any[];
}
