import StoryCard from "./StoryCard"
const stories = [
    {
        name: "Patient Devtech",
        src: "",
        profile: "https://imgur.com/qmDwxqs.png",
    },
    {
        name: "Planner Friend",  
        src: "",
        profile: "https://imgur.com/r0n6msN.png",
    },    
    {
        name: "Famous Friend",
        src: "",
        profile: "https://imgur.com/mGX739w.png",
    },
    {
        name: "Car Pics Friend",
        src: "",
        profile: "https://imgur.com/SEcPvDJ.png",
    },
    {
        name: "Plant Friend",
        src: "",
        profile: "https://imgur.com/MvwillM.png",
    },
    {
        name: "Party Friend",
        src: "",
        profile: "https://imgur.com/bGMczBx.png",
    },
    {
        name: "Goody-Goody Friend",
        src: "",
        profile: "https://imgur.com/pY9B0Cx.png",
    },
    {
        name: "OverShare Friend",
        src: "",
        profile: "https://imgur.com/QcyTZFP.png",
    },
    {
        name: "Thaaaat Friend",
        src: "",
        profile: "https://imgur.com/xR9idiv.png",
    },
      {
        name: "Billy G",
        src: "https://links.papareact.com/4u4",
        profile: "https://links.papareact.com/zvy",
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