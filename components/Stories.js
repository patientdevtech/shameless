import StoryCard from "./StoryCard"
const stories = [
    // {
    //     name: "Patient Devtech",
    //     src: "👸",
    //     profile: "",
    // },
    // {
    //     name: "Planner Friend",  
    //     src: "🤓",
    //     profile: "",
    // },    
    // {
    //     name: "Famous Friend",
    //     src: "🤩",
    //     profile: "",
    // },
    // {
    //     name: "Empath Friend",
    //     src: "🥲",
    //     profile: "",
    // },
    // {
    //     name: "Workaholic Friend",
    //     src: "🤖",
    //     profile: "",
    // },
    // {
    //     name: "Party Friend",
    //     src: "🥳",
    //     profile: "",
    // },
    // {
    //     name: "Goody-Goody Friend",
    //     src: "",
    //     profile: "/🧐",
    // },
    // {
    //     name: "OverShare Friend",
    //     src: "😩",
    //     profile: "",
    // },
    // {
    //     name: "Thaaaat Friend",
    //     src: "🥴",
    //     profile: "",
    // },
    {
        name: "Billy G",
        src: "https://links.papareact.com/4u4",
        profile: "https://links.papareact.com/zvy",
    },
    {
        name: "Billy G",
        src: "https://links.papareact.com/4u4",
        profile: "https://links.papareact.com/zvy",
    }, 
    {
        name: "Billy G",
        src: "https://links.papareact.com/4u4",
        profile: "https://links.papareact.com/zvy",
    },
    {
        name: "Billy G",
        src: "https://links.papareact.com/4u4",
        profile: "https://links.papareact.com/zvy",
    },
    {
        name: "B G",
        src: "https://links.papareact.com/4u4",
        profile: "https://imgur.com/P7lFBCc",
    },
]

function Stories() {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
       {stories.map((story) => (
            <StoryCard 
                key={story.src}
                name={story.name} 
                src={story.src} 
                profile={story.profile} 
            />
        ))}
    </div>
  )
}

export default Stories