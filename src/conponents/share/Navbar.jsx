import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

    const menu = <>
        <li className="text-xl font-semibold">
            <NavLink to='/' className={({ isActive }) =>
                isActive ? "text-white bg-orange-500 px-3 py-2 rounded" : "hover:bg-gray-700 hover:text-white px-3 py-2 rounded"
            }>Home</NavLink>
        </li>
        <li className="text-xl font-semibold">
            <NavLink to='/about' className={({ isActive }) =>
                isActive ? "text-white bg-orange-500 px-3 py-2 rounded" : "hover:bg-gray-700 hover:text-white px-3 py-2 rounded"
            }>About</NavLink>
        </li>
        <li className="text-xl font-semibold">
            <NavLink to='/blog' className={({ isActive }) =>
                isActive ? "text-white bg-orange-500 px-3 py-2 rounded" : "hover:bg-gray-700 hover:text-white px-3 py-2 rounded"
            }>Blog</NavLink>
        </li>
        <li className="text-xl font-semibold">
            <NavLink to='/faq' className={({ isActive }) =>
                isActive ? "text-white bg-orange-500 px-3 py-2 rounded" : "hover:bg-gray-700 hover:text-white px-3 py-2 rounded"
            }>FAQ</NavLink>
        </li>

    </>
    return (
        <div className="navbar bg-base-200 shadow-sm container mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {menu}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost text-xl inline-block">Book<span className="text-orange-500">Shop</span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menu}
                </ul>
            </div>
            <div className="navbar-end space-x-2">
                <a className="btn bg-orange-500 text-white">Buy Book</a>
                <a className="btn bg-orange-500 text-white">Sign In</a>
            </div>
        </div>
    );
};

export default Navbar;