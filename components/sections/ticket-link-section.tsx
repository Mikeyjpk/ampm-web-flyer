import EventItem from "../event-item";
import { eventInfo } from "@/utilities/event-info-look-up"

const TicketSection = () => {
    return (
        <div className="flex flex-col gap-y-3 mx-3 py-2.5">
            <div className="flex flex-col items-center pb-1">
                <div className="font-bold text-2xl">
                    AM//PM
                </div>
                <div className="font-bold text-xl">
                    EMO NIGHT REGIONAL TOUR 2024
                </div>
                <div className="text-sm">
                    W/ Diamond Construct
                </div>
            </div>
            <div className="flex flex-col gap-y-3 pt-3 pb-4">
                <EventItem
                    date={eventInfo.newcastle.date}
                    city={eventInfo.newcastle.city}
                    location={eventInfo.newcastle.location}
                    eventLink={eventInfo.newcastle.eventLink}
                    ticketLink={eventInfo.newcastle.ticketLink}
                />
                <EventItem
                    date={eventInfo.sydney.date}
                    city={eventInfo.sydney.city}
                    location={eventInfo.sydney.location}
                    eventLink={eventInfo.sydney.eventLink}
                    ticketLink={eventInfo.sydney.ticketLink}
                />
                <EventItem
                    date={eventInfo.canberra.date}
                    city={eventInfo.canberra.city}
                    location={eventInfo.canberra.location}
                    eventLink={eventInfo.canberra.eventLink}
                    ticketLink={eventInfo.canberra.ticketLink}
                />
                <EventItem
                    date={eventInfo.penrith.date}
                    city={eventInfo.penrith.city}
                    location={eventInfo.penrith.location}
                    eventLink={eventInfo.penrith.eventLink}
                    ticketLink={eventInfo.penrith.ticketLink}
                />
                <EventItem
                    date={eventInfo.albury.date}
                    city={eventInfo.albury.city}
                    location={eventInfo.albury.location}
                    eventLink={eventInfo.albury.eventLink}
                    ticketLink={eventInfo.albury.ticketLink}
                />
                <EventItem
                    date={eventInfo.melbourne.date}
                    city={eventInfo.melbourne.city}
                    location={eventInfo.melbourne.location}
                    eventLink={eventInfo.melbourne.eventLink}
                    ticketLink={eventInfo.melbourne.ticketLink}
                />
                <EventItem
                    date={eventInfo.brisbane.date}
                    city={eventInfo.brisbane.city}
                    location={eventInfo.brisbane.location}
                    eventLink={eventInfo.brisbane.eventLink}
                    ticketLink={eventInfo.brisbane.ticketLink}
                />
                <EventItem
                    date={eventInfo.goldCoast.date}
                    city={eventInfo.goldCoast.city}
                    location={eventInfo.goldCoast.location}
                    eventLink={eventInfo.goldCoast.eventLink}
                    ticketLink={eventInfo.goldCoast.ticketLink}
                />
            </div>
        </div>
    );
}

export default TicketSection;