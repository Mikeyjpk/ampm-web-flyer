import Image from "next/image";
import heroImage from "@/public/images/flyer-three.jpg"

//todo: change this image, needs the borders reduced
const HeroSection = () => {
    return (
        <div>
            <Image
                src={heroImage}
                alt="instagram tour flyer"
            />
        </div>
    );
}

export default HeroSection;