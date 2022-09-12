import Stories from './Stories'
import Inputbox from './Inputbox'
import Posts from './Posts'

function Feed() {
  return (
    <div className="flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 overlow-y-auto scrollbar-hide">
        <div className="mx-auto max-w-md md:max-w-lg:max-w-2xl">
          <Stories />
          <Inputbox />
          <Posts />
        </div>    
    </div>
  )
}

export default Feed