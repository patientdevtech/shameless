import Image from "next/image";
import HeaderIcon from "./HeaderIcon";
import {
  BellIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import {
  SearchIcon,
} from "@heroicons/react/outline";
import { useSession, signOut } from "next-auth/client"


function Header() {
    // const [session, loading] = useSession();
    const [session] = useSession();

  return (
    <div className="sticky top-0 z-50 bg-white flex items-center p-3 lg-px-3 shadow-md">
     
        {/* left */}
        <div className="flex items-center sm:space-x-2 ">
                
                {/* userpic */}
                <Image
                onClick={signOut}
                className="rounded-full cursor-pointer"
                src={session.user.image}
                width="30"
                height="30"
                layout="fixed"
                />
                <p className="hidden lg:inline-flex text-med whitespace-nowrap font-bold pr-3">Connected Forever-ever</p>
                <ViewGridIcon className="icon" />
                <ChatIcon className="icon" />
                <BellIcon className="icon" />
                <ChevronDownIcon className="icon" />
                <Image
                src="https://imgur.com/LJOCFln.png"
                width={30}
                height={30}
                layout="fixed"
                />
        </div>

        {/* center */}
        <div className="flex justify-center flex-grow">
            <div className="flex space-x-6 md:space-x-2">
            <HeaderIcon active Icon={HomeIcon} />
            <HeaderIcon Icon={UserGroupIcon} />
        </div>

        {/* right */}
        <div className="flex items-center justify-end">
        <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
          <SearchIcon className="h-6 text-gray-600" />
          <input
            className="hidden md:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink"
            type="text"
            placeholder="search connected-forever-ever"
          >   
          </input>
        </div>
      </div>  
    </div>
   </div>
  );
}

export default Header;

