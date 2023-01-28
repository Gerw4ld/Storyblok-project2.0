import {storyblokEditable} from "@storyblok/react";
import {render} from "storyblok-rich-text-react-renderer";
import {useState} from "react";

const Impressum = ({blok}) => {
    const [showText, setShowText] = useState(false);

    return (
        <div id={blok.anchor} className={`p-6 flex flex-col ${blok.textPosition}`} {...storyblokEditable(blok)}>
            <p className="cursor-pointer hover:bg-gray-100" onClick={() => setShowText(!showText)}>{blok.title}</p>
            <div>
                { showText ?render(blok.text): null}
            </div>
        </div>
    )
}
export default Impressum