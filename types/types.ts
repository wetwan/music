export interface Playlist {
    name: string;
    image: string;
    id: string;
}

export interface MusicProp {
    artist: string[];
    image: string;
    name: string;
    id: string;
    file: string;
    mix?: string[];
    type?: string;
    album?: string
}
export interface AlbumProp {
    name: string;
    artist: string[] | string;
    id: string;
    image: string;
    is?: boolean

}

export interface PopularNightClubProp {
    name: string;
    country: string;
    image: string;
    id: string;
    city?: string
}
export interface PopularCountryProp {
    country: string;
    image: string;
    id: string;
}

