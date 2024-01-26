import MainContent from "./components/main";
import SideBar from "./components/sidebar";
import { useModeContext } from "./libs/context";

const Dashboard = () => {
  const { mode } = useModeContext();
  return (
    <>
      <div
        className={`duration-500 transition-all ${
          mode === "light" ? "bg-white" : "dark-mode"
        }`}
      >
        <div className="max-w-[1440px] mx-auto relative">
          <SideBar />
          <MainContent />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
