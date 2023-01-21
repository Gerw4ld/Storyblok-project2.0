import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";

const HeroBanner = ({ blok }) => {
    return (
        <div {...storyblokEditable(blok)}>
            <h1>{blok.title}</h1>
            <p>{blok.text}</p>
            <p>{blok.button}</p>
            {blok.image.filename && blok.image.alt &&
                <Image width={"1280"} height={"1280"} src={blok.image.filename} alt={blok.image.alt}
                       className={"h-full w-full object-cover absolute"} loading={"eager"}/>}
        </div>


    )
};

export default HeroBanner;