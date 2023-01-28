import {StoryblokComponent, storyblokEditable} from "@storyblok/react";

const MenuContainer = ({blok}) => {
    return (
        <div className="" {...storyblokEditable(blok)}>
            <ul className="flex justify-around">
                {blok.items.map((nestedBlok) => (
                    <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid}/>
                ))}
            </ul>
        </div>
    )
}

export default MenuContainer;