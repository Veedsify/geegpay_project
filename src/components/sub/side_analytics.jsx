const SideAnalytics = () => {
  return (
    <div className="grid grid-cols-2 col-span-2 gap-2 md:gap-6">
      <div className="bg-white border rounded-xl shadow-sm p-4">
        <div className="flex mb-4 justify-between items-center flex-wrap">
          <img src="/icons/analytics/order.png" alt="Order icon" />
          <img src="/icons/ordergraph.png" alt="" />
        </div>
        <h2 className="mb-2">Total Order</h2>
        <h1 className="text-lg md:text-2xl font-bold mb-2">234</h1>
        <div className="flex items-center gap-4 flex-wrap">
          <span className="p-1 rounded-lg bg-[#34CAA51F] text-[#34CAA5] flex items-center">
            <img src="/icons/trending-up-green.png" alt="Up icon" />
            <span className="text-xs">23.5%</span>
          </span>
          <p className="text-xs md:text-sm">vs. previous month</p>
        </div>
      </div>
      <div className="bg-white border rounded-xl shadow-sm p-4">
        <div className="flex mb-4 justify-between items-center flex-wrap">
          <img src="/icons/analytics/refund.png" alt="" />
          <img src="/icons/redgraph.png" alt="" />
        </div>
        <h2 className="mb-2">Total Refund</h2>
        <h1 className="text-lg md:text-2xl font-bold mb-2">270</h1>
        <div className="flex items-center gap-4 flex-wrap">
          <span className="p-1 rounded-lg  bg-[#ed534e30] text-[#ED544E] flex items-center">
            <img src="/icons/trending-up-red.png" alt="Up icon" />
            <span className="text-xs">23.5%</span>
          </span>
          <p className="text-xs md:text-sm">vs. previous month</p>
        </div>
      </div>
      <div className="bg-white border rounded-xl shadow-sm p-4">
        <div className="flex mb-4 justify-between items-center flex-wrap">
          <img src="/icons/analytics/averagesales.png" alt="" />
          <img src="/icons/redgraph.png" alt="" />
        </div>
        <h2 className="mb-2">Average Sales</h2>
        <h1 className="text-lg md:text-2xl font-bold mb-2">1567</h1>
        <div className="flex items-center gap-4 flex-wrap">
          <span className="p-1 rounded-lg bg-[#ed534e30] text-[#ED544E] flex items-center">
            <img src="/icons/trending-up-red.png" alt="Up icon" />
            <span className="text-xs">23.5%</span>
          </span>
          <p className="text-xs md:text-sm">vs. previous month</p>
        </div>
      </div>
      <div className="bg-white border rounded-xl shadow-sm p-4">
        <div className="flex mb-4 justify-between items-center flex-wrap">
          <img src="/icons/analytics/income.png" alt="" />
          <img src="/icons/ordergraph.png" alt="" />
        </div>
        <h2 className="mb-2">Total Income</h2>
        <h1 className="text-lg md:text-2xl font-bold mb-2">$350.000</h1>
        <div className="flex items-center gap-4 flex-wrap">
          <span className="p-1 rounded-lg bg-[#34CAA51F] text-[#34CAA5] flex items-center">
            <img src="/icons/trending-up-green.png" alt="Up icon" />
            <span className="text-xs">23.5%</span>
          </span>
          <p className="text-xs md:text-sm">vs. previous month</p>
        </div>
      </div>
    </div>
  );
};

export default SideAnalytics;
