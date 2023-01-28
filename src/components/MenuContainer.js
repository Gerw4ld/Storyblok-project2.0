import {StoryblokComponent, storyblokEditable} from "@storyblok/react";

const MenuContainer = ({blok}) => {
    return (
        <div className="pb-3" {...storyblokEditable(blok)}>
            <ul className="flex justify-around overflow-y-auto">
                {blok.items.map((nestedBlok) => (
                    <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid}/>
                ))}
            </ul>
        </div>
    )
}

export default MenuContainer;