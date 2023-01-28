import {storyblokEditable} from "@storyblok/react";
import {render} from "storyblok-rich-text-react-renderer";
import Image from "next/image";

const Interest = ({blok}) => {
    return (
        <div id={blok.anchor} className="sm:grid sm:grid-cols-2" {...storyblokEditable(blok)}>
            <div className="flex flex-col items-center justify-center p-9">
                {render(blok.text)}
            </div>
            <div>
                <Image width={"560"} height={"560"} src={blok.image.filename} alt={blok.image.alt}
                       className="h-full w-full object-cover flex-shrink-0" loading={"eager"}/>
            </div>
        </div>
    )
}
export default Interest