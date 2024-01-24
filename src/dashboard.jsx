import MainContent from "./components/main";
import SideBar from "./components/sidebar";

const Dashboard = () => {
  return (
    <>
      <div
        className="max-w-[1440px] mx-auto relative"
      >
        <SideBar />
        <MainContent />
      </div>
    </>
  );
};

export default Dashboard;
