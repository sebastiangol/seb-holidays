import Image from 'next/image';
import logo from '../images/logo.png';
import {
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
  SearchIcon
} from '@heroicons/react/solid';
import { useState } from 'react';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/dist/client/router';

function Header({ placeholder }) {
  const router = useRouter();

  const [searchInput, setSearchInput] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection'
  };

  const handleSelect = ranges => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const resetInput = () => {
    setSearchInput('');
  };

  const search = () => {
    router.push({
      pathname: '/search',
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests
      }
    });
  };

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-indigo-800 shadow-md p-3 md:px-8 py-6">
      {/* Left */}
      <div
        className="relative flex items-center h-10 cursor-pointer my-auto"
        onClick={() => router.push('/')}
      >
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
          value={searchInput}
          onChange={e => setSearchInput(e.target.value)}
          className=" flex-grow pl-5 bg-transparent outline-none text-sm text-gray-100"
          type="text"
          placeholder={placeholder || 'Search here!'}
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

      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto bg-indigo-800 mt-2">
          <DateRangePicker
            className="text-black bg-indigo-800"
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={['#d710e8']}
            onChange={handleSelect}
            color={['#d710e8']}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of Guests
            </h2>
            <UsersIcon className="h-5" />
            <input
              value={noOfGuests}
              onChange={e => setNoOfGuests(e.target.value)}
              type="number"
              min={1}
              className="w-12 pl-2 text-lg outline-none bg-indigo-800"
            />
          </div>
          <div className="flex">
            <button
              onClick={resetInput}
              className="flex-grow text-gray-400 transition hover:bg-red-500 hover:text-black duration-300 ease-out rounded-lg active:scale-95 active:bg-red-600"
            >
              Cancel
            </button>
            <button
              className="flex-grow text-gray-200 transition hover:bg-green-500 hover:text-white duration-300 ease-out rounded-lg active:scale-95 active:bg-green-600"
              onClick={search}
            >
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
