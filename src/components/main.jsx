import Header from "./header";
import LastOrders from "./sub/lastorders";
import SalesTrends from "./sub/sales_trends";
import SideAnalytics from "./sub/side_analytics";
import TopPlatform from "./sub/top_platform";

const MainContent = () => {
  return (
    <div className="md:pl-20 pl-16">
      <Header />
      <div className="grid grid-cols-2 xl:grid-cols-5 p-3 md:p-6 gap-6">
        <SalesTrends />
        <SideAnalytics />
      </div>
      <div className="grid grid-cols-2 xl:grid-cols-5 gap-6 px-3 md:px-6">
        <LastOrders />
        <TopPlatform />
      </div>
    </div>
  );
};

export default MainContent;
