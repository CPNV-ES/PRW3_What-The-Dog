import MenuHamburgerSVG from "../assets/menu-hamburger.svg";

export const Header = () => {
  return (
    <header className="flex p-2 bg-[#041f29]">
      <h1 className="font-bold text-white">Dashboard</h1>
      <button className="ml-auto sm:hidden">
        <MenuHamburgerSVG width={24} height={24} />
      </button>
    </header>
  );
};
