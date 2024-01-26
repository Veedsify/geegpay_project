import { useModeContext } from "../../libs/context";
import SellerTrendsChart from "../charts/seller_trends";

const SalesTrends = () => {
  const { mode } = useModeContext();
  return (
    <div
      className={`duration-500 transition-all ${
        mode === "light" ? "bg-white" : "dark-mode"
      } border rounded-xl shadow-sm p-4 col-span-2 xl:col-span-3 xl:mb-0`}
    >
      <div className="flex items-center justify-between mb-6 gap-1">
        <h1
          className={`font-[600] text-base md:text-2xl  ${
            mode === "light" ? "text-black" : "text-white"
          }`}
        >
          Sales Trends
        </h1>
        <div className="flex items-center gap-2 md:gap-4 flex-wrap justify-end">
          <p
            className={`hidden sm:block
          ${mode === "light" ? "text-black" : "text-white"}
          `}
          >
            Sort By
          </p>
          <select
            name="sort"
            id="sort"
            className={`md:p-2 p-1 rounded-3xl border outline-none ml-auto duration-500 transition-all  ${
              mode === "light" ? "bg-white text-black" : "dark-mode text-white"
            }`}
          >
            <option value="this_week">This Week</option>
            <option value="this_month">This Month</option>
            <option value="this_year">This Year</option>
          </select>
        </div>
      </div>
      <SellerTrendsChart />
    </div>
  );
};

export default SalesTrends;
