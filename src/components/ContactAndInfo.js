import {storyblokEditable} from "@storyblok/react";
import {render} from "storyblok-rich-text-react-renderer";

const ContactAndInfo = ({blok}) => {
    return (
        <div className="sm:grid sm:grid-cols-2" {...storyblokEditable(blok)}>
            <div className="grid grid-cols-2">
                <div>
                    {render(blok.textLeft)}
                </div>
                <div>
                    {render(blok.textRight)}
                </div>

            </div>
            <div>
                <iframe src={blok.maps} width={400} height={400}></iframe>
            </div>
        </div>
    )
}

export default ContactAndInfo