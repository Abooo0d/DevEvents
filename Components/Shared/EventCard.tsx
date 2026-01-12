import React from 'react'
import Link from "next/dist/client/link";
import {Image} from "next/dist/client/image-component";
interface Props {
  title: string,
  image: string,
}
const EventCard = ({title,image}:Props) => {
  return (
      <Link href={'/events'}>
        <Image src={image} alt={title} id={'event-card'} width={410} height={300} className={'poster'} />
        <p className={'title'}>{title}</p>
      </Link>
  )
}
export default EventCard
