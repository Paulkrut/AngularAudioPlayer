export class Track {
    trackId: number;
    artistName: string;
    collectionName: string;
    trackName: string;
    previewUrl: string;
    artworkUrl100: string;
    releaseDate: string;
    trackCount: number;
    trackNumber: number;
    trackTimeMillis: number;
    primaryGenreName: string;

    public constructor(init?:Partial<Track>) {
        Object.assign(this, init);
    }

}