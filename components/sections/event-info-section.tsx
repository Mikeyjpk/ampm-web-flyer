import Image from "next/image";
import instagramTile from "@/public/images/instagram-tile.jpg"

const EventInfo = () => {

    const lineBreak = () => {
        return (
            <div className="bg-primary/30 w-28 h-1 rounded-sm"></div>
        )
    }

    return ( 
        <div className="flex flex-col items-start gap-y-3 py-10 px-3 select-none">
            {/* HEADING */}
            <div className="flex flex-col">
                <div className="font-bold text-xl">
                    New Bloom Fest Official Afterparty
                </div>
                <div>
                    Presented by AM//PM
                </div>
            </div>
            {lineBreak()}
            {/* SUBTITLE */}
            <div>
                Emo, Pop-Punk, Rock & Alternative DJs all night
                Burdekin Hotel // 2 Oxford St Darlinghurst
                Saturday March 16th // Tickets on sale now
            </div>
            {lineBreak()}
            <div className="flex flex-col gap-y-6">
                {/* info block one */}
                <div>
                    Want to kick on after New Bloom Fest? AM//PM is 
                    taking over The Burdekin and bringing the fest 
                    back fromThe Roundhouse for some well deserved 
                    kickons from the first ever New Bloom Fest.
                </div>
                {/* info block two */}
                <div>
                    We&apos;re rounding up our best DJ&apos;s and throwing some 
                    extra new wave emo on the playlist to mark the occasion.
                </div>
            </div>
            <div className="flex flex-col gap-y-6 py-1">
                <div>
                    🌼Level 1: Emo, Pop-Punk & Alternative Anthems  
                </div>
                <div>
                    🌼Level 2: New Wave Emo, Requests and deeper cuts
                </div>
            </div>
            <div>
                Whether you&apos;re attending the fest or just want to party, 
                we&apos;ll be kicking off from 9:00PM &apos;til late
            </div>
            {/* Image */}
            <Image src={instagramTile} alt="instagram tour flyer" className="pt-4"/>
 
        </div>
     );
}
 
export default EventInfo;