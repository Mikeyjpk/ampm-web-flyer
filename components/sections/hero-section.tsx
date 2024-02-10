import Image from "next/image";

import heroImage from "@/public/images/instagram-tile.jpg"

const HeroSection = () => {
    return ( 
    <div className="">
        <Image 
            src={heroImage} 
            alt="instagram tour flyer"
            className="relative"
        />
    </div> );
}
 
export default HeroSection;