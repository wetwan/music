import { AlbumProp, MusicProp, Playlist } from "@/types/types";
import image1 from "../assets/images/image1.jpeg";
import image2 from "../assets/images/image2.jpeg";
import image3 from "../assets/images/image3.jpeg";
import image4 from "../assets/images/image4.jpeg";
import image5 from "../assets/images/image5.png";
import image6 from "../assets/images/image6.jpeg";
import image13 from "../assets/images/img1.jpg";
import image8 from "../assets/images/img11.jpg";
import image12 from "../assets/images/img12.jpg";
import image9 from "../assets/images/img2.jpg";
import image10 from "../assets/images/img3.jpg";
import image11 from "../assets/images/img4.jpg";
import image14 from "../assets/images/img5.jpg";
import image7 from "../assets/images/img6.jpg";
import image15 from "../assets/images/img7.jpg";
import song1 from "../assets/songs/song1.mp3";
import song2 from "../assets/songs/song2.mp3";
import song3 from "../assets/songs/song3.mp3";

export const yourMix: Playlist[] = [
    { name: "your mix 1", image: image1, id: "1" },
    { name: "your mix 2", image: image2, id: "2" },
    { name: "your mix 3", image: image6, id: "3" },
    { name: "your mix 4", image: image4, id: "4" },
];
export const mood = [
    { name: "dance", image: image3, id: "1" },
    { name: "love", image: image5, id: "2" },
    { name: "sad", image: image2, id: "3" },
    { name: "party", image: image1, id: "4" },
    { name: "sleep", image: image7, id: "5" },
];
export const myArtist = [
    { name: "artist 1", image: image8 },
    { name: "artist 2", image: image9 },
    { name: "artist 3", image: image10 },
    { name: "artist 4", image: image11 },

];
export const topArtist = [
    { name: "artist 1", image: image8 },
    { name: "artist 6", image: image11 },
    { name: "artist 7", image: image10 },
    { name: "artist 4", image: image8 },
    { name: "artist 5", image: image9 },
    { name: "artist 6", image: image12 },
];
export const artist = [
    { name: "artist 1", image: image5 },
    { name: "artist 2", image: image9 },
    { name: "artist 3", image: image10 },
    { name: "artist 4", image: image11 },
    { name: "artist 7", image: image11 },
    { name: "artist 8", image: image10 },
    { name: "artist 9", image: image8 },
    { name: "artist 5", image: image9 },
    { name: "artist 6", image: image12 },
];
export const albums: AlbumProp[] = [
    { name: "album 1", artist: ['artist 1', 'artist 7'], id: '1', image: image2 },
    { name: "album 2", artist: ['artist 2', 'artist 9', 'artist 1'], id: '2', image: image9 },
    { name: "album 3", artist: ['artist 3', 'artist 9', 'artist 1'], id: '3', image: image10 },
    { name: "album 4", artist: ['artist 3', 'artist 2', 'artist 1'], id: '4', image: image11 },
    { name: "album 7", artist: ['artist 4', 'artist 5'], id: '5', image: image11 },
    { name: "album 8", artist: ['artist 5', 'artist 7', 'artist 1'], id: '6', image: image10 },
    { name: "album 9", artist: ['artist 1', 'artist 6'], id: '7', image: image8 },
    { name: "album 5", artist: ['artist 4', 'artist 8', 'artist 1'], id: '8', image: image9 },
    { name: "album 6", artist: ['artist 6', 'artist 8', 'artist 2'], id: '9', image: image12 },
];


export const musics: MusicProp[] = [
    {
        artist: ["artist 1"],
        image: image13,
        name: "floewer",
        id: "1",
        file: 'https://prod-1.storage.jamendo.com/download/track/2161171/mp32/',
        mix: ["your mix 1"],
        type: "dance",
        album: 'album 1'
    },
    {
        artist: ["artist 2", 'artist 1'],
        image: image14,
        name: "blinding lights",
        id: "2",
        file: 'https://prod-1.storage.jamendo.com/download/track/1886257/mp32/',
        mix: ["your mix 2", 'your mix 1'],
        type: "love ",
    },
    {
        artist: ["artist 5", 'artist 1', 'artist 2'],
        image: image15,
        name: "blinding",
        id: "3",
        file: 'https://prod-1.storage.jamendo.com/download/track/2135375/mp32/',
        mix: ["your mix 2", 'your mix 1'],
        type: "love",
        album: 'album 2'
    },
    {
        artist: ["artist 7", 'artist 4', 'artist 3'],
        image: image1,
        name: "new",
        id: "4",
        file: 'https://prod-1.storage.jamendo.com/download/track/2135275/mp32/',
        mix: ["your mix 1", 'your mix 2'],
        type: "sad",
        album: 'album 4'
    },

    {
        artist: ["artist 8", 'artist 6', 'artist 9'],
        image: image11,
        name: "new is new",
        id: "6",
        file: song1,
        mix: ["your mix 4", 'your mix 3'],
        type: "sleep",
        album: 'album 6'
    },

];

export const recents = [
    {
        artist: ["artist 9", 'artist 8', 'artist 7', 'artist 6', 'artist 5', 'artist 4', 'artist 3', 'artist 2', 'artist 1'],
        image: image3,
        name: "for is new is new",
        id: "7",
        file: song3,
        mix: ["your mix 2", 'your mix 3', 'your mix 4', 'your mix 1'],
        type: "love",

    }, {
        artist: ["artist 7", 'artist 4', 'artist 4'],
        image: image10,
        name: "wetwan",
        id: "5",
        file: song2,
        mix: ["your mix 1", 'your mix 3'],
        type: "party",
        album: 'album 5'
    },

    {
        artist: ["artist 2", 'artist 1'],
        image: image14,
        name: "blinding lights",
        id: "2",
        file: 'https://prod-1.storage.jamendo.com/download/track/1886257/mp32/',
        mix: ["your mix 2", 'your mix 1'],
        type: "love ",
    },

];


