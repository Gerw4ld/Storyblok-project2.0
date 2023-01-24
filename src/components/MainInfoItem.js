import {storyblokEditable} from "@storyblok/react";
import Image from "next/image";
import {render} from "storyblok-rich-text-react-renderer";
import {useState} from "react";

const MainInfoItem = ({blok}) => {

    const [showText, setShowText] = useState(false);
    return (
        <div className="column feature" {...storyblokEditable(blok)}>
            <div className="p-8" onClick={() => setShowText(!showText)}>
                <Image width={"400"} height={"400"} key={blok.image._uid} src={blok.image.filename}
                       alt={blok.image.alt}
                       className={"h-full w-full object-cover flex-shrink-0"} loading={"eager"}/>
                {blok.title}
            </div>

            {showText ? render(blok.text) : null}
        </div>
    )
}

export default MainInfoItem;