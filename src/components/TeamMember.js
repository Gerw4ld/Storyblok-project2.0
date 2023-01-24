import {storyblokEditable} from "@storyblok/react";
import Image from "next/image";

const TeamMember = ({blok}) => (
    <div className="flex flex-col" {...storyblokEditable(blok)}>
        <Image width={"400"} height={"400"} key={blok.image._uid} src={blok.image.filename} alt={blok.image.alt}
               className={"h-full w-full object-cover flex-shrink-0"} loading={"eager"}/>
        <div>{blok.name}</div>
        <div>{blok.role}</div>
    </div>
)

export default TeamMember