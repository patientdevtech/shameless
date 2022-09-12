import { SearchIcon } from "@heroicons/react/outline"
import { DotsHorizontalIcon, VideoCameraIcon } from "@heroicons/react/solid"
import Contact from './Contact'


const contacts =[
  { src: "https://links.papareact.com/f0p", name: "Brutus Maximus" },
  { src: "", name: "Paris Erickson" },
  { src: "", name: "Ivan Galvan" },  

]


// Contacts on right hand side
function Connections() {
  return (
    <div className="hidden lg:flez flex-col w-60 p-2 mt-5">
      <div className="flex justify-between items-center text-gray-500 mb-5">
        <h2 className="text-xl">Contacts</h2>
        <div className="flex space-x-2">
          <VideoCameraIcon className="h-6" />
          <SearchIcon className="h-6" />
          <DotsHorizontalIcon className="h-6" />
        </div>
      </div>

      {contacts.map((contact) => (
        <Contact key={ contact.src } src={ contact.src } name={ contact.name } />
      ))}
    </div>
  )
}

export default Connections