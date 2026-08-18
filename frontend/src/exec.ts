import type { backend } from "../wailsjs/go/models";
import type { TrackMetadata } from "./types/api";

export function craetePlaylist(tracks: TrackMetadata[], history: backend.HistoryItem[]) {
    let playlistLine = '#EXTM3U\n';
    for (const track of tracks) {
        const trackInfo = history.find((item) => item.spotify_id === track.spotify_id)
        if (trackInfo?.path) {
            playlistLine = playlistLine.concat(trackInfo.path.replace('/media/Media/Music/Singles/', '../Singles/'), '\n')
        }
    }
    console.log(playlistLine);
}
