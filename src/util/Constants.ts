export enum Parts {
    playlistItems = "",
    channel = "contentDetails,snippet,statistics,status",
    video = "contentDetails,liveStreamingDetails,localizations,snippet,statistics,status,topicDetails",
    playlist = "",
    search = ""
}

export enum Endpoints {
    playlistItems = "playlistItems",
    channel = "channels",
    video = "videos",
    playlist = "playlists",
    search = "search"
}
