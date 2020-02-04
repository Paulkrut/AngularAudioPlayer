export class Track {
    artistName: string;
    trackName: string;
    previewUrl: string;
    artworkUrl100: string;
    trackTimeMillis: number;

    public constructor(init?:Partial<Track>) {
        Object.assign(this, init);
    }

}
