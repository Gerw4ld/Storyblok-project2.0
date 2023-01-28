import {StoryblokComponent, storyblokEditable} from "@storyblok/react";

const Team = ({blok}) => {
    return (
        <div className="sm:py-6" id={blok.anchor} {...storyblokEditable(blok)}>
            {blok.title}
            <div className="grid sm:grid-cols-3 sm:pt-3">
                {blok.employee.map((nestedBlok) => (
                <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid}/>
            ))}
            </div>
        </div>
    )
}
export default Team