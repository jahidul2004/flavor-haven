import { NavLink } from "react-router-dom";
import { RiContactsLine, RiHome9Line } from "react-icons/ri";
import { LuLayoutDashboard } from "react-icons/lu";
import { CgMenuRound } from "react-icons/cg";
import { BsShop } from "react-icons/bs";
import { LiaSignOutAltSolid } from "react-icons/lia";
import { AiOutlineLogin } from "react-icons/ai";

const NavBar = () => {
    const links = (
        <>
            <li>
                <NavLink to={"/"}>
                    <RiHome9Line />
                    HOME
                </NavLink>
            </li>
            <li>
                <NavLink to={"/menu"}>
                    <CgMenuRound />
                    OUR MENU
                </NavLink>
            </li>
            <li>
                <NavLink to={"/order"}>
                    <BsShop />
                    ORDER
                </NavLink>
            </li>
            <li>
                <NavLink to={"/login"}>
                    <AiOutlineLogin />
                    LOGIN
                </NavLink>
            </li>
            <li>
                <p>
                    <LiaSignOutAltSolid />
                    SIGN OUT
                </p>
            </li>
        </>
    );
    return (
        <div className="navbar md:sticky md:top-0 z-10 bg-[#111828] md:bg-[#000000] text-white flex justify-between items-center">
            <div>
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="text-black menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                    >
                        {links}
                    </ul>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <a className="text-xl md:text-3xl font-bold text-[#bc8408]">
                        FLAVOR HAVEN
                    </a>
                    <p className="tracking-[5px] md:tracking-[12px]">
                        RESTAURANT
                    </p>
                </div>
            </div>
            <div className="hidden lg:flex">
                <ul className="menu menu-horizontal px-1">{links}</ul>

                <div className="flex border-2 p-[2px] border-[#bc8408] rounded-lg gap-4 items-center justify-center h-[50px] w-[50px]">
                    <img
                        className="rounded-lg w-full h-full"
                        src={"https://simgbb.com/avatar/M4MLWRbdJrf.jpg"}
                        alt=""
                    />
                </div>
            </div>
            <div className="flex md:hidden border-2 p-[2px] border-[#bc8408] rounded-lg gap-4 items-center justify-center h-[50px] w-[50px]">
                <img
                    className="rounded-lg w-full h-full"
                    src={"https://simgbb.com/avatar/M4MLWRbdJrf.jpg"}
                    alt=""
                />
            </div>
        </div>
    );
};

export default NavBar;
