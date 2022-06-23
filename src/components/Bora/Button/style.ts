import tw from "tailwind-styled-components";
import "../../../styles/tailwind.css";
import { FaArrowRight } from 'react-icons/fa';


export const ButtonLink = tw.a`
  flex
  group
  min-h-[3.5rem]
  rounded-2xl
  justify-center
  items-center
  bg-dark-gray
  text-white
`

export const FaArrowRightIcon = tw(FaArrowRight)`
inline
transition-all
opacity-0
group-hover:opacity-100
group-hover:translate-x-[-50%]
group-hover:ml-[1em]
`

export const ButtonLabel = tw.p`
text-lg
font-bold
font-sans
`
