import SellerTrendsChart from "../charts/seller_trends";

const SalesTrends = () => {
  return (
    <div className="bg-white border rounded-xl shadow-sm p-4 col-span-2 xl:col-span-3 xl:mb-0">
      <div className="flex items-center justify-between mb-6 gap-1">
        <h1 className="font-[600] text-base md:text-2xl">Sales Trends</h1>
        <div className="flex items-center gap-2 md:gap-4 flex-wrap justify-end">
          <p>Sort By</p>
          <select
            name="sort"
            id="sort"
            className="md:p-2 p-1 rounded-3xl border outline-none ml-auto"
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
