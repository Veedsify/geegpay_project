import { LucideSearch, X } from "lucide-react";
import { useModeContext, useSearchBarContext } from "../../libs/context";
const SearchModal = () => {
  const { setSearchActive, searchActive } = useSearchBarContext();
  const { mode } = useModeContext();
  const toggleSearchClose = () => {
    setSearchActive(false);
  };
  return (
    <div
      className={`fixed w-full min-h-screen ${
        mode === "light" ? "bg-black" : "bg-[#ffffff2a]"
      } bg-opacity-70 z-50 top-0 left-0 grid place-items-center duration-300 ${
        searchActive
          ? "pointer-events-auto opacity-100"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`${
          mode === "light" ? "bg-white" : "dark-mode"
        } rounded-md p-4`}
      >
        <div className="flex items-center gap-x-4 mb-8">
          <h1 className="text-lg md:text-2xl font-[600]">Search</h1>
          <span className="ml-auto cursor-pointer" onClick={toggleSearchClose}>
            <X size={30} />
          </span>
        </div>
        <div className="relative flex items-center gap-3">
          <input
            type="text"
            placeholder="Search for sales, orders and more"
            className="w-full block bg-transparent border outline-none rounded-md py-3 px-4 sm:w-52 md:w-80"
          />
          <span className="right-4 top-4 cursor-pointer">
            <LucideSearch size={25} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
