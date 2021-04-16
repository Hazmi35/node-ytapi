import { Response } from "./Response";
import { Resource } from "./Resource";

export type Etag = string;
export type ResponseKinds = "youtube#videoListResponse";
export type ResourceKinds = "youtube#video";
export interface SearchItemID {
    kind: string;
    videoId?: string;
    channelId?: string;
    playlistId?: string;
}
export { Response, Resource };
