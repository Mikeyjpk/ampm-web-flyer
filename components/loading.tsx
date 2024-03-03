import loading from "@/public/images/Thumbnail_AMPM.jpg"
import Image from "next/image"

export default function Loading() {
    return (
        <div className="flex justify-center items-center text-white">
           <Image src={loading} alt="ampm logo loading thumbnail"/>
        </div>
        
    )
}