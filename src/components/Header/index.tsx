import Login from "./components/Login";
import Logo from "./components/Logo";

const Header = () => {
  return <div className="fixed w-full bg-white flex justify-between items-center px-6 py-2 z-10 ">
    <Logo />
    <Login />
  </div>;
};

export default Header;
