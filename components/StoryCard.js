import Image from "next/image";

function StoryCard({ name, src, profile }) {
  return (
    <div className="relative h-14 w-14 md:h-20 md:w-20 lg:h-50 lg:w-25 cursor-pointer overflow-x p-3">
        <Image 
            className="absolute opacity-0 lg:opacity-90 rounded-full z-50 top-10"
            src={profile}
            width={40}
            height={40}
            layout="fixed"
            objectFit="cover"
        />
        {/* <Image 
            className="object-cover filter birghtness-75 rounded-full lg:rounded-2xl"
            src={src}
            layout="fill"
        /> */}
    </div>
  )
}

export default StoryCard