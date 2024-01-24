import LightAndDarkToggle from "./sub/lightanddarktoggle";
import Links from "./sub/links";

const sidebarLinks = [
  {
    path: "/",
    icon: "/icons/dashboard.png",
  },
  {
    path: "/",
    icon: "/icons/analytics.png",
  },
  {
    path: "/",
    icon: "/icons/users.png",
  },
  {
    path: "/",
    icon: "/icons/product.png",
  },
  {
    path: "/",
    icon: "/icons/discount.png",
  },
  {
    path: "/",
    icon: "/icons/info.png",
  },
];

const endLinks = [
  {
    path: "/",
    icon: "/icons/rightarrow.png",
  },
  {
    path: "/",
    icon: "/icons/settings.png",
  },
  {
    path: "/",
    icon: "/icons/logout.png",
  },
];
const SideBar = () => {
  return (
    <>
      <aside className="w-16 md:w-20 border min-h-screen absolute top-0 left-0 flex flex-col">
        <div className="p-3 md:p-5">
          <img src="/Vector.png" alt="dashboard logo" width={40} />
        </div>
        <ul className="flex flex-col items-center justify-center gap-y-4 mb-5">
          {sidebarLinks.map((link, index) => (
            <Links key={index} links={link} />
          ))}
        </ul>
        <LightAndDarkToggle />
        <ul className="flex flex-col items-center justify-center gap-y-4 mb-5 mt-auto">
          {endLinks.map((link, index) => (
            <Links key={index} links={link} />
          ))}
        </ul>
      </aside>
    </>
  );
};

export default SideBar;
