
import { PopularCountryProp, PopularNightClubProp } from "@/types/types";
import image1 from "../assets/images/image1.jpeg";
import image2 from "../assets/images/image2.jpeg";
import image4 from "../assets/images/image4.jpeg";
import image5 from "../assets/images/image5.png";
import image6 from "../assets/images/image6.jpeg";
import image13 from "../assets/images/img1.jpg";
import image12 from "../assets/images/img12.jpg";
import image10 from "../assets/images/img3.jpg";
import image11 from "../assets/images/img4.jpg";
import image14 from "../assets/images/img5.jpg";
import image7 from "../assets/images/img6.jpg";
import image15 from "../assets/images/img7.jpg";


export const popularNightClub: PopularNightClubProp[] = [
    { name: 'night 1', country: 'contry 1', image: image10, id: '1' },
    { name: 'night 2', country: 'contry 2', image: image12, id: '2' },
    { name: 'night 3', country: 'contry 1', image: image1, id: '3' },
    { name: 'night 4', country: 'contry 3', image: image2, id: '4' },
    { name: 'night 5', country: 'contry 4', image: image14, id: '5' },
    { name: 'night 6', country: 'contry 5', image: image7, id: '6' },
    { name: 'night 7', country: 'contry 2', image: image4, id: '7' },
]
export const popularCountry: PopularCountryProp[] = [
    { country: 'contry 1', image: image11, id: '1' },
    { country: 'contry 2', image: image13, id: '2' },
    { country: 'contry 3', image: image5, id: '3' },
    { country: 'contry 4', image: image15, id: '4' },
    { country: 'contry 5', image: image13, id: '5' },
    { country: 'contry 6', image: image6, id: '6' },
    { country: 'contry 7', image: image14, id: '7' },
]
