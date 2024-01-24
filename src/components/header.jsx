import { useEffect, useRef, useState } from "react";
import { ChevronDownIcon, LucideMenu } from "lucide-react";
import MyCalendar from "./sub/calender";
const Header = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showCalendar, setCalendar] = useState(false);

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };
  const toggleCalendar = () => {
    setCalendar(!showCalendar);
  };

  // WINDOWS CLOSE
  const myRef = useRef();
  const clRef = useRef();
  const clComp = useRef();

  const handleClick = (event) => {
    if (myRef.current && !myRef.current.contains(event.target) && clComp.current && !clComp.current.contains(event.target)) {
      setCalendar(false);
    }
    if (clRef.current && !clRef.current.contains(event.target)) {
      setShowNotifications(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <header className="min-h-[88px] flex items-center p-4 md:p-9 border-b mb-6">
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
          <p
            ref={myRef}
            onClick={toggleCalendar}
            className="flex gap-2 py-2 items-center cursor-pointer"
          >
            <img src="/icons/calender.png" alt="Calendar Icon" />
            <p className="select-none text-[14px]">November 15, 2023</p>
          </p>
          {showCalendar && (
            <div
              className="absolute right-0 mt-2 bg-white rounded-md shadow-lg py-2"
              ref={clComp}
            >
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
              ref={clRef}
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
        <div className="xl:hidden sm:grid hidden ml-4 border-gray-500 place-items-center border rounded-full p-1">
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
