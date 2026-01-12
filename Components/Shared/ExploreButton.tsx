'use client';
import React from 'react'
import {Image} from "next/dist/client/image-component";

const ExploreButton = () => {
  return (
      <button type={"button"} className={'mt-7 mx-auto'} id={'explore-btn'} onClick={()=> {
        console.log('Explore Button')}}
      >
        ExploreButton
        <a href="#events">
          Explore Events
          <Image src={'/icons/arrow-down.svg'} alt={"arrow-down"} width={24} height={24}   />
        </a>
      </button>
  )
}
export default ExploreButton
