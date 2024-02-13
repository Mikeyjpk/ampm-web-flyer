import EventItem from "../event-item";
import { eventInfo } from "@/utilities/event-info-look-up"

const TicketSection = () => {
    return ( 
        <div className="flex flex-col gap-y-3 mx-4 py-2.5">
            <div className="flex flex-col items-center">
                <div className="font-bold text-xl">
                    New Bloom Fest Official Afterparty
                </div>
                <div className="text-sm text-muted-foreground">
                    Presented by AM//PM
                </div>
            </div>
            <div className="flex flex-col gap-y-4 py-3">
                <EventItem 
                    date={eventInfo.sydney.date} 
                    city={eventInfo.sydney.city} 
                    location={eventInfo.sydney.location} 
                    eventLink={eventInfo.eventLink} 
                    ticketLink={eventInfo.sydney.ticketLink} 
                />
                <EventItem 
                    date={eventInfo.brisbane.date} 
                    city={eventInfo.brisbane.city} 
                    location={eventInfo.brisbane.location} 
                    eventLink={eventInfo.eventLink} 
                    ticketLink={eventInfo.brisbane.ticketLink} 
                />
                <EventItem 
                    date={eventInfo.melbourne.date} 
                    city={eventInfo.melbourne.city} 
                    location={eventInfo.melbourne.location} 
                    eventLink={eventInfo.eventLink} 
                    ticketLink={eventInfo.melbourne.ticketLink} 
                />
            </div> 
        </div>
    );
}
 
export default TicketSection;