import Image from 'next/image';
import logo from '../images/logo.png';
import {
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
  SearchIcon
} from '@heroicons/react/solid';

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-indigo-800 shadow-md p-3 md:px-8 py-6">
      {/* Left */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src={logo}
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* Middle */}
      <div className="flex items-center md:border-2 border-indigo-900 rounded-full py-2 md:shadow-sm">
        <input
          className=" flex-grow pl-5 bg-transparent outline-none text-sm text-gray-100"
          type="text"
          placeholder="Search here!"
        />
        <SearchIcon className="hidden md:inline-flex h-8 bg-green-500 rounded-full p-1 cursor-pointer md:mx-2" />
      </div>
      {/* Right */}
      <div className="flex items-center space-x-4 justify-end text-gray-300">
        <p className="hidden md:inline">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex items-center space-x-2 border-2 border-indigo-900 rounded-full p-2 shadow-sm">
          <MenuIcon className="h-6 cursor-pointer" />
          <UserCircleIcon className="h-6 cursor-pointer" />
        </div>
      </div>
    </header>
  );
}

export default Header;
