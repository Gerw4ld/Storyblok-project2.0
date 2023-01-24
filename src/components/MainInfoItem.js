import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";
import {render} from "storyblok-rich-text-react-renderer";

const MainInfoItem = ({ blok }) => (
    <div className="column feature" {...storyblokEditable(blok)}>
            <Image width={"400"} height={"400"} key={blok.image._uid} src={blok.image.filename} alt={blok.image.alt}
                   className={"h-full w-full object-cover flex-shrink-0"} loading={"eager"}/>
        {blok.title}
        {render(blok.text)}
    </div>
);

export default MainInfoItem;