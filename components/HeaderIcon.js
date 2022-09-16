function HeaderIcon({ Icon, active }) {
  return (
    <div className="flex items-center cursor-pointer md:px-8 sm:h-12 md:hover:bg-pink-200 rounded-xl active:border-b-2 active:border-pink-400 group">
      <Icon className={`h-5 text-gray-600 text-center sm:h-7 mx-auto group-hover:text-pink-400 ${active && "text-pink-400" }`}/>
    </div>
  );
}

export default HeaderIcon;


