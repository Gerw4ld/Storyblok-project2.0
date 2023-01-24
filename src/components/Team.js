import {StoryblokComponent, storyblokEditable} from "@storyblok/react";

const Team = ({blok}) => {
    return (
        <div {...storyblokEditable(blok)}>
            {blok.title}
            <div className="grid sm:grid-cols-3">
                {blok.employee.map((nestedBlok) => (
                <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid}/>
            ))}
            </div>
        </div>
    )
}
export default Team