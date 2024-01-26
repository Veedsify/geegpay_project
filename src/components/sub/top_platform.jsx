import { Link } from "react-router-dom";
import { useModeContext } from "../../libs/context";

const TopPlatform = () => {
  const { mode } = useModeContext();
  return (
    <div
      className={`duration-500 transition-all ${
        mode === "light" ? "bg-white text-black" : "bg-[#03141d] text-white"
      } border rounded-xl shadow-sm p-4 col-span-2`}
    >
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-[600]">Top Platform</h1>
        <Link to="/" className="text-[#34CAA5]">
          See All
        </Link>
      </div>
      <div>
        <div className="mb-4">
          <h2 className="mb-2 font-[600] text-lg">Book Bazaar</h2>
          <div
            className={`relative ${
              mode === "light" ? "bg-[#F5F5F5]" : "bg-[#5e5e5ea3]"
            } h-3 rounded-lg overflow-hidden mb-2`}
          >
            <div className="absolute bg-[#6160DC] h-full left-0 top-0 w-1/2 rounded-lg"></div>
          </div>
          <div className="flex items-center gap-1 justify-between">
            <h2 className="mb-2 font-[400] text-lg text-[#525252]">
              $2,500,000
            </h2>
            <p>50%</p>
          </div>
        </div>
        <div className="mb-4">
          <h2 className="mb-2 font-[600] text-lg">Book Bazaar</h2>
          <div
            className={`relative ${
              mode === "light" ? "bg-[#F5F5F5]" : "bg-[#5e5e5ea3]"
            } h-3 rounded-lg overflow-hidden mb-2`}
          >
            <div className="absolute bg-[#54C5EB] h-full left-0 top-0 w-[40%] rounded-lg"></div>
          </div>
          <div className="flex items-center gap-1 justify-between">
            <h2 className="mb-2 font-[400] text-lg text-[#525252]">
              $1,800,000
            </h2>
            <p>40%</p>
          </div>
        </div>
        <div className="mb-4">
          <h2 className="mb-2 font-[600] text-lg">Book Bazaar</h2>
          <div
            className={`relative ${
              mode === "light" ? "bg-[#F5F5F5]" : "bg-[#5e5e5ea3]"
            } h-3 rounded-lg overflow-hidden mb-2`}
          >
            <div className="absolute bg-[#FFB74A] h-full left-0 top-0 w-[25%] rounded-lg"></div>
          </div>
          <div className="flex items-center gap-1 justify-between">
            <h2 className="mb-2 font-[400] text-lg text-[#525252]">
              $1,200,000
            </h2>
            <p>25%</p>
          </div>
        </div>
        <div className="mb-4">
          <h2 className="mb-2 font-[600] text-lg">X Store</h2>
          <div
            className={`relative ${
              mode === "light" ? "bg-[#F5F5F5]" : "bg-[#5e5e5ea3]"
            } h-3 rounded-lg overflow-hidden mb-2`}
          >
            <div className="absolute bg-[#FF4A55] h-full left-0 top-0 w-[25%] rounded-lg"></div>
          </div>
          <div className="flex items-center gap-1 justify-between">
            <h2 className="mb-2 font-[400] text-lg text-[#525252]">
              $1,600,000
            </h2>
            <p>25%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopPlatform;
