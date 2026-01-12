import React from 'react'
import ExploreButton from "@/Components/Shared/ExploreButton";
import Navbar from "@/Components/Sections/Navbar";
import EventCard from "@/Components/Shared/EventCard";

const Page = () => {
  const events = [
    {image:'/images/event1.png',title:'Event 1'},
    {image:'/images/event2.png',title:'Event 2'},
    {image:'/images/event2.png',title:'Event 2'},
  ]
  return (
     <section>
       <h1 className={'text-center'}>The Hub For Every Event <br/> You Can`t mess</h1>
       <p className={'text-center mt-5'}>Hackathons, Meetups, and Conferences, All In One Place </p>
       <ExploreButton />
       <div className={'mt-20 space-y-7'}>
         <h3>Featured Events</h3>
         <ul className={'events'}>
           {events.map(((event,index) => (
               <EventCard key={index} image={event.image} title={event.title}/>
           )))}
         </ul>
       </div>
     </section>
  )
}
export default Page
