import Image from "next/image";
import instagramTile from "@/public/images/flyer-one.jpg"

const EventInfo = () => {

    const lineBreak = () => {
        return (
            <div className="bg-primary/30 w-28 h-1 rounded-sm"></div>
        )
    }

    return (
        <div className="flex flex-col items-start gap-y-3 mx-4 pt-4 select-none">
            {/* Title */}
            <div>
                AM//PM is taking Emo Night on tour in April-May for a huge 8 date run across 
                the east coast with Diamond Construct. We&apos;re packing the balloons & the fireball 
                and taking the sad party on the road.
            </div>

            <div>
                With a stacked band lineup + DJ&apos;s playing all the best Emo & Pop-Punk Anthems, 
                we&apos;ll have you screaming for the business of misery & making a bunch of MMRS with us &apos;til late!
            </div>

            {lineBreak()}
            <div>
                Bands: Diamond Construct + supports TBA
            </div>
            <div>
                DJ&apos;s: AM//PM DJ&apos;s + friends 
            </div>
            {lineBreak()}

            <div>
                EMO NIGHT SOUNDS LIKE:
            </div>
            <div className="mx-2">
                My Chemical Romance ⋆ Panic! At The Disco ⋆ Bring Me The Horizon ⋆ Fall Out Boy ⋆ 
                The Used ⋆ Blink 182 ⋆ A Day To Remember ⋆ Yellowcard ⋆ All Time Low ⋆ 3OH!3 ⋆ 
                Metro Station ⋆ Paramore ⋆ Taking Back Sunday ⋆ AFI ⋆ Escape The Fate ⋆ Underoath ⋆ 
                Falling In Reverse ⋆ Hawthorne Heights ⋆ Neck Deep ⋆ Cobra Starship ⋆ Sum 41 ⋆ 
                The All-American Rejects ⋆ Good Charlotte ⋆ Simple Plan ⋆ 30 Seconds To Mars ⋆ 
                Jimmy Eat World ⋆ Pierce The Veil ⋆ Sleeping With Sirens 
            </div>
            <div>
                + every emo, pop-punk & rock & metal banger ever // hit us with your requests
            </div>
            <div className="text-xs">
                UPCOMING PARTIES / PHOTOS / SOCIALS / SPOTIFY PLAYLIST: <a href="https://hoo.be/ampm" className="hover:text-red-900 text-sm font-bold">https://hoo.be/ampm</a>
            </div>

            {/* Image */}
            <Image src={instagramTile} alt="instagram tour flyer" className="p-4" />

        </div>
    );
}

export default EventInfo;