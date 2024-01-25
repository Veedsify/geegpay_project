import { useState } from "react";
import {
  ChevronDownIcon,
  LucideMenu,
  LucideSearch,
  X,
  LucideUser,
  LucideSettings,
  LucideLogOut,
} from "lucide-react";
import MyCalendar from "./sub/calender";
import { useCalendarContext } from "../libs/calendarcontext";
import { useSearchBarContext, useSideBarContext } from "../libs/context";
import { Link } from "react-router-dom";
const Header = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showCalendar, setCalendar] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const { selectedDate } = useCalendarContext();
  const { active, setActive } = useSideBarContext();
  const { setSearchActive } = useSearchBarContext();

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
    setCalendar(false);
    setShowProfile(false);
  };
  const toggleCalendar = () => {
    setCalendar(!showCalendar);
    setShowNotifications(false);
    setShowProfile(false);
  };

  const toggleProfile = () => {
    setShowProfile(!showProfile);
    setCalendar(false);
    setShowNotifications(false);
  };

  const toggleSideBar = () => {
    setActive();
  };

  const toggleSearchOpen = () => {
    setSearchActive(true);
  };
  return (
    <header className="min-h-[88px] flex items-center p-4 md:p-7 2xl:p-9 border-b mb-6">
      <nav className="flex items-center w-full gap-1">
        <span className="text-base sm:text-2xl font-[600]">Dashboard</span>
        <form action="/" className="ml-auto mr-4 px-4 hidden lg:block">
          <label
            htmlFor="search"
            className="flex items-center gap-2 p-2 rounded-full bg-white xl:w-[349px] border"
          >
            <img src="/icons/search.png" alt="Search Icon" />
            <input
              type="search"
              name="search"
              id="search"
              className="outline-none bg-none w-full"
              placeholder="Search"
            />
          </label>
        </form>
        {/* Calendar */}
        <div className="mr-2 px-4 hidden lg:block relative">
          <div
            onClick={toggleCalendar}
            className="flex gap-2 py-2 items-center cursor-pointer"
          >
            <img src="/icons/calender.png" alt="Calendar Icon" />
            <p className="select-none text-[14px]">
              {selectedDate.toLocaleString("default", {
                month: "long",
                year: "numeric",
                day: "numeric",
              })}
            </p>
          </div>
          {showCalendar && (
            <div className="absolute right-0 mt-2 bg-white rounded-md shadow-lg py-2">
              <MyCalendar />
            </div>
          )}
        </div>
        <ul className="mr-2 px-3 hidden xl:flex items-center gap-x-8 ">
          <li className="relative">
            <img
              src="/icons/notification_icon.png"
              alt="Notification Icon"
              className="cursor-pointer"
              onClick={toggleNotifications}
            />
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2">
                <div className="p-2 text-sm hover:bg-[#34CAA5] cursor-pointer mb-2">
                  Notification 1
                </div>
                <div className="p-2 text-sm hover:bg-[#34CAA5] cursor-pointer mb-2">
                  Notification 2
                </div>
                <div className="p-2 text-sm hover:bg-[#34CAA5] cursor-pointer">
                  Notification 3
                </div>
              </div>
            )}
          </li>
          <li className="relative border p-1 rounded-full">
            <div
              className="flex items-center gap-x-3  cursor-pointer"
              onClick={toggleProfile}
            >
              <img
                src="/icons/profile.png"
                alt="Profile Icon"
                className="cursor-pointer flex-1"
              />
              <div className="text-right flex-1 select-none cursor-pointer">
                <p className="font-[600] leading-4">Justin Bergson</p>
                <p className="text-sm">Justin@gmail.com</p>
              </div>
              <div className="text-right flex-1">
                <ChevronDownIcon />
              </div>
            </div>
            {showProfile && (
              <div className="absolute right-0 mt-4 w-48 bg-white rounded-md shadow-lg py-2">
                <div className="p-2 text-sm hover:bg-[#34CAA5] cursor-pointer mb-2 hover:text-white">
                  <Link to="" className="flex items-center gap-2">
                    <LucideUser />
                    Profile
                  </Link>
                </div>
                <div className="p-2 text-sm hover:bg-[#34CAA5] cursor-pointer mb-2 hover:text-white">
                  <Link to="" className="flex items-center gap-2">
                    <LucideSettings />
                    Settings
                  </Link>
                </div>
                <div className="p-2 text-sm hover:bg-[#34CAA5] cursor-pointer hover:text-white">
                  <Link to="" className="flex items-center gap-2">
                    <LucideLogOut />
                    Logout
                  </Link>
                </div>
              </div>
            )}
          </li>
        </ul>
        {/* MENU BUTTON */}
        <span
          className="ml-auto block lg:hidden cursor-pointer mr-3"
          onClick={toggleSearchOpen}
        >
          <LucideSearch size={25} />
        </span>
        <span
          className="block md:hidden cursor-pointer"
          onClick={toggleSideBar}
        >
          {active ? <X size={30} /> : <LucideMenu size={30} />}
        </span>

        {/* MOBILE MENU PROFILE*/}
        <div className="xl:hidden sm:grid hidden ml-4 border-gray-500 place-items-center border rounded-full p-1 cursor-pointer">
          <img
            src="/icons/profile.png"
            alt="Profile Icon"
            className="cursor-pointer"
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
