import { cn } from "@/lib/utils";
import { anton } from "@/app/fonts/font"

const TitleSection = () => {
    return ( 
        <div className="flex justify-center pb-2 pt-3">
            <span className={cn(anton.className, "text-3xl tracking-wider")}>
                TICKETS ON SALE NOW
            </span>
        </div> 
    );
}
 
export default TitleSection;