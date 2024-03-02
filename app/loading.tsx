import loading from "@/public/loading.gif"
import Image from "next/image"

export default function Loading() {
    return (
        <div className="flex justify-center items-center text-white">
           <Image src={loading} alt="loading gif"/>
        </div>
        
    )
}