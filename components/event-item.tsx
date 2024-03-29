"use client"

import { Button } from "./ui/button";

interface TicketLinkProps {
    date: string;
    city: string;
    location: string;
    eventLink: string;
    ticketLink: string;
}

const EventItem: React.FC<TicketLinkProps> = ({
    date,
    city,
    location,
    eventLink,
    ticketLink,
}) => {
    return (
        <div className="bg-neutral-800/10 hover:bg-neutral-600/10 flex flex-row justify-between items-center p-2 rounded-sm">
            {/* info */}
            <div className="flex flex-col select-none">
                <div className="text-sm font-light">
                    {date}
                </div>
                <div className="flex flex-row gap-x-0.5 items-center">
                    <div className="font-bold text-md">
                        {city}
                    </div>
                    <p>/</p>
                    <div className="font-light text-sm">
                        {location}
                    </div>

                </div>
            </div>

            {/* links */}
            <div className="flex flex-row gap-2 items-center">
                {/* {eventLink} */}
                <div className="hover:cursor-pointer">
                    <Button variant={"outline"} size={"sm"} onClick={() => window.open(eventLink, '_ blank')}>
                        RSVP
                    </Button>
                </div>

                {/* {ticketLink} */}
                <Button size={"sm"} onClick={() => window.open(ticketLink, '_ blank')}>
                    BUY
                </Button>  
            </div>
        </div>);
}

export default EventItem;