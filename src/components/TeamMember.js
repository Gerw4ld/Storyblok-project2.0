import {storyblokEditable} from "@storyblok/react";
import Image from "next/image";

const TeamMember = ({blok}) => (
    <div className="flex flex-col self-center items-center" {...storyblokEditable(blok)}>
        <div className="h-4/6 w-4/6">
            <Image width={"400"} height={"400"} key={blok.image._uid} src={blok.image.filename} alt={blok.image.alt}
                   className="h-full w-full object-cover flex-shrink-0 rounded-full" loading={"eager"}/>
        </div>
        <div className="h-full w-full">
            <div>{blok.name}</div>
            <div>{blok.role}</div>
        </div>
    </div>
)

export default TeamMember