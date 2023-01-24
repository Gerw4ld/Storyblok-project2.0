import {storyblokEditable} from "@storyblok/react";
import {render} from "storyblok-rich-text-react-renderer";

const TextField = ({blok}) => {
    let backgroundColor = blok.color.color

    return (
        <div style={{background: backgroundColor}}
             className="flex flex-col justify-center" {...storyblokEditable(blok)}>
            <div className="p-4">
                <div>
                    {blok.title}
                </div>
                <div>
                    {render(blok.text)}
                </div>
                <div className="p-2">
                    <button
                        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">{blok.button}</button>
                </div>
            </div>
        </div>
    )
}

export default TextField