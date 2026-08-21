import type { backend } from "../wailsjs/go/models";
import type { TrackMetadata } from "./types/api";

export function craetePlaylist(tracks: TrackMetadata[], history: backend.HistoryItem[]) {
    const pathArray = [];
    for (const track of tracks) {
        const trackInfo = history.find((item) => item.spotify_id === track.spotify_id)
        if (trackInfo?.path) {
            pathArray.push(trackInfo.path);
        }
    }
    return pathArray;
}
