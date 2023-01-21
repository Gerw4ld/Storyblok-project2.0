import {storyblokEditable} from "@storyblok/react";
import Image from "next/image";

const HeroBanner = ({blok}) => {
    return (
        <div
            className="bg-red flex justify-center items-center overflow-hidden relative max-h-[480px]"{...storyblokEditable(blok)}>
            {blok.image.filename && blok.image.alt &&
                <Image width={"1280"} height={"1280"} src={blok.image.filename} alt={blok.image.alt}
                       className={"h-full w-full object-cover flex-shrink-0"} loading={"eager"}/>}

            <div className={"absolute top-0 bottom-0 left-0 right-0 z-50 flex justify-center items-center text-center text-white flex-col"}>
                <h1>{blok.title}</h1>
                <p>{blok.text}</p>
                <button>{blok.button}</button>
            </div>
        </div>
    )
};

export default HeroBanner;