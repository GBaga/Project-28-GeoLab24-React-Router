import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav className="flex items-center justify-between flex-wrap bg-gray-900 p-6">
        <div className="w-fit flex items-center flex-shrink-0 text-white mr-6">
          <NavLink to="/">
            <img
              className="h-10"
              src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
              alt=""
            />
          </NavLink>
        </div>
        <NavLink to="/product">
          <div className="text-white font-semibold text-xl tracking-tight">
            New Products
          </div>
        </NavLink>
        <div className=" block lg:flex lg:items-center lg:w-auto">
          <div>
            <NavLink
              to="/"
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            >
              Return to the HomePage
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
