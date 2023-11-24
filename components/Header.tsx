"use client";
import Link from "next/link";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { FaHome, FaCalendar, FaRegNewspaper } from "react-icons/fa";
import { IoPersonCircleOutline } from "react-icons/io5";
import { usePathname } from "next/navigation";
import { FaFileSignature } from "react-icons/fa";

const Header = () => {
    const [open, setOpen] = useState(false);
    const path = usePathname();

    const headerLinks = [
        {
            icon: <FaHome />,
            name: "Home",
            link: "/",
        },
        {
            icon: <FaRegNewspaper />,
            name: "Noticias",
            link: "/news",
        },
        {
            icon: <FaCalendar />,
            name: "Calendário",
            link: "/calendar",
        }
    ];

    return (
        <header className="flex justify-between items-center px-10 py-5 lg:max-w-6xl mx-auto relative lg:flex-row-reverse border-b border-text/20">
            <IoMenu
                className="w-10 h-10 lg:hidden cursor-pointer"
                onClick={() => {
                    setOpen((prev) => (prev ? false : true));
                }}
            />
            <div className="hidden lg:flex items-center gap-x-1">
                <Link href={"/login"} className="p-2 hover:bg-text hover:text-white rounded-md">Login</Link>
                /
                <Link href={"/sign_up"} className="p-2 hover:bg-text hover:text-white rounded-md">Cadastro</Link>
            </div>
            <div className="flex items-center gap-x-1">
                <p className="font-semibold text-xl">
                    Med<span className="text-highlight">Virtua</span>
                </p>
            </div>
            <nav className="hidden lg:flex justify-center gap-x-10 py-2">
                {headerLinks.map((l) => (
                    <Link href={l.link}
                        key={l.name}
                        className={`${
                            path === l.link ? "bg-highlight text-white" : ""
                        } flex items-center gap-x-2 lg:gap-x-1 p-2 rounded-md md:hover:text-highligh cursor-pointer`}
                    >   
                        {l.icon}
                        {l.name}
                    </Link>
                ))}
                
            </nav>
            <nav    
                className={`absolute p-10 z-10 rounded-b-xl bg-white scale-y-0
            transition-transform duration-100 ${open && "scale-y-100"} lg:hidden
            origin-top w-60 md:hover:cursor-pointer top-full left-0 h-fijt gap-y-4 flex flex-col`}
            >
                {headerLinks.map((l) => (
                    <Link key={l.name}
                        className={`md:hover:pl-3 ${
                            path === l.link ? "bg-highlight text-white" : ""
                        } rounded-md p-2 flex items-center gap-x-4`} href={l.link}>
                        {l.icon}{l.name}
                    </Link>
                ))}
                <Link href={"/login"} className="md:hover:pl-3 rounded-md p-2 flex items-center gap-x-4">
                    <IoPersonCircleOutline/>
                    Login
                </Link>
                <Link href={"/sign_up"} className="md:hover:pl-3 rounded-md p-2 flex items-center gap-x-4">
                    <FaFileSignature/>
                    Cadastro
                </Link>
            </nav>
        </header>
    );
};

export default Header;
