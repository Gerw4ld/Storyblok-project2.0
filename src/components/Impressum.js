import {storyblokEditable} from "@storyblok/react";
import {render} from "storyblok-rich-text-react-renderer";

const Impressum = ({blok}) => {

    return (
        <div className={`px-6 flex flex-col ${blok.textPosition}`} {...storyblokEditable(blok)}>
            {render(blok.text)}
        </div>
    )
}
export default Impressum