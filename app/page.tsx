import React from 'react'
import ExploreButton from "@/Components/Shared/ExploreButton";
import EventCard from "@/Components/Shared/EventCard";
import  {events} from "@/lib/constents";
// import * as events from "node:events";

const Page = () => {
  return (
     <section>
       <h1 className={'text-center'}>The Hub For Every Event <br/> You Can`t mess</h1>
       <p className={'text-center mt-5'}>Hackathons, Meetups, and Conferences, All In One Place </p>
       <ExploreButton />
       <div className={'mt-20 space-y-7'}>
         <h3>Featured Events</h3>
         <ul className={'events'}>
           {events.map(((event,index) => (
               <EventCard key={index} {...event} />
           )))}
         </ul>
       </div>
     </section>
  )
}
export default Page
