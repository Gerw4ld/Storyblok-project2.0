import {storyblokEditable, StoryblokComponent} from "@storyblok/react";
import {render} from "storyblok-rich-text-react-renderer";

const MainInfo = ({blok}) => {
    return (
        <div {...storyblokEditable(blok)}>
            <div className="text-left">
                <h2>{blok.title}</h2>
                {render(blok.text)}
            </div>
            <div className="grid grid-cols-3">
                {blok.columns.map((nestedBlok) => (
                    <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid}/>
                ))}</div>
        </div>
    );
};

export default MainInfo;