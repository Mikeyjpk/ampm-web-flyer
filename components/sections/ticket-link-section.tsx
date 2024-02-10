import EventItem from "../event-item";

const eventInfo = {
    eventLink: 'http://www.facebook.com' ,
    sydney: {
        date: 'Thur, 28th March',
        city: 'Sydney',
        location: 'Burdekin Hotel',
        ticketLink: 'https://www.eventbrite.com.au/'
    },
    brisbane: {
        date: 'Sat, April 6th',
        city: 'Brisbane',
        location: 'The Brightside',
        ticketLink: 'https://www.eventbrite.com.au/'
    },
    melbourne: {
        date: 'Sat, April 13th',
        city: 'Melbourne',
        location: 'Inflation Nightclub',
        ticketLink: 'https://www.eventbrite.com.au/'
    },
}

const TicketSection = () => {
    return ( 
        <div className="flex flex-col gap-y-6 py-3">
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
    );
}
 
export default TicketSection;