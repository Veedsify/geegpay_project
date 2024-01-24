import { useState } from "react";
import { ChevronDownIcon, LucideMenu } from "lucide-react";
const Header = () => {
  const [showNotifications, setShowNotifications] = useState(false);

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  return (
    <header className="min-h-[88px] flex items-center p-9 border-b mb-6">
      <nav className="flex items-center w-full">
        <span className="text-2xl font-[600]">Dashboard</span>
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
              className="outline-none bg-none"
              placeholder="Search"
            />
          </label>
        </form>
        {/* Calendar */}
        <form action="" className="mr-2 px-4 hidden lg:block ">
          <label
            htmlFor="calendar"
            className="flex gap-2 items-center cursor-pointer"
          >
            <img src="/icons/calender.png" alt="Calendar Icon" />
            <p className="select-none text-[14px]">November 15, 2023</p>
          </label>
          <input type="date" name="calendar" id="calendar" className="hidden" />
        </form>
        <ul className="mr-2 px-3 hidden xl:flex items-center gap-x-8 ">
          <li className="relative">
            <img
              src="/icons/notification_icon.png"
              alt="Notification Icon"
              className="cursor-pointer"
              onClick={toggleNotifications}
            />
            {showNotifications && (
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg">
                <div className="p-2">Notification 1</div>
                <div className="p-2">Notification 2</div>
                <div className="p-2">Notification 3</div>
              </div>
            )}
          </li>
          <li className="relative border p-1 rounded-full">
            <div className="flex items-center gap-x-3">
              <img
                src="/icons/profile.png"
                alt="Profile Icon"
                className="cursor-pointer flex-1"
              />
              <div className="text-right flex-1">
                <p className="font-[600] leading-4">Justin Bergson</p>
                <p className="text-sm">Justin@gmail.com</p>
              </div>
              <div className="text-right flex-1">
                <ChevronDownIcon />
              </div>
            </div>
          </li>
        </ul>
        {/* MENU BUTTON */}
        <span className="ml-auto block xl:hidden">
          <LucideMenu size={30} />
        </span>

        {/* MOBILE MENU PROFILE*/}
        <div className="xl:hidden ml-4 border-gray-500 grid place-items-center border rounded-full p-1">
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
