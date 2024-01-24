import { useState } from "react";

const LightAndDarkToggle = () => {
  const [order, setOrder] = useState(false);

  const toggleTheme = () => {
    setOrder(!order);
  };

  return (
    <div className="px-3 md:px-4 cursor-pointer select-none" onClick={toggleTheme}>
      <div className="flex flex-col gap-y-3 items-center justify-center border bg-white shadow-sm p-1  rounded-full">
        <img
          src="/icons/lightmode.png"
          alt="Light Mode"
          className={`duration-300 transition-all rounded-full border ${order ? "order-2" : ""}`}
        />
        <img src="/icons/darkmode.png" alt="Light Mode" />
      </div>
    </div>
  );
};

export default LightAndDarkToggle;
