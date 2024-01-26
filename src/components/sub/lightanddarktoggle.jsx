import { useState } from "react";
import { useModeContext } from "../../libs/context";

const LightAndDarkToggle = () => {
  const { setMode,mode } = useModeContext();
  const [order, setOrder] = useState(mode === "light" ? false : true);

  const toggleTheme = () => {
    setMode(order ? "light" : "dark");
    setOrder(!order);
  };

  return (
    <div
      className="px-3 md:px-4 cursor-pointer select-none mb-6"
      onClick={toggleTheme}
    >
      <div className="flex flex-col gap-y-3 items-center justify-center border shadow-sm p-1  rounded-full">
        <img
          src="/icons/lightmode.png"
          alt="Light Mode"
          className={`duration-300 transition-all rounded-full border ${
            mode === "dark" ? "order-2" : ""
          }`}
        />
        <img src="/icons/darkmode.png" alt="Light Mode" />
      </div>
    </div>
  );
};

export default LightAndDarkToggle;
