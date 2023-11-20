"use client";
import Link from "next/link";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";

const Header = () => {
    const [open, setOpen] = useState(false);

    const headerLinks = [
        {
            name: "Home",
            link: "/",
        },
        {
            name: "Login",
            link: "/login",
        },
        {
            name: "Cadastro",
            link: "/sign_up",
        },
        {
            name: "Área do Candidato",
            link: "#",
        }
    ];

    return (
        <header className="flex justify-between items-center px-10 py-5 lg:max-w-6xl mx-auto relative">
            <IoMenu
                className="w-10 h-10 lg:hidden cursor-pointer"
                onClick={() => {
                    setOpen((prev) => (prev ? false : true));
                }}
            />
            <div className="flex items-center gap-x-1">
                <p className="font-semibold text-xl">
                    Med<span className="text-highlight">Virtua</span>
                </p>
            </div>
            <nav className="hidden lg:block">
                <ul className=" flex justify-center gap-x-10 py-2">
                    {headerLinks.map((l) => (
                        <li key={l.name} className=" md:hover:text-highlight">
                            <Link href={l.link}>{l.name}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="bg-zinc-300 w-10 font-bold aspect-square rounded-full" />
            <ul
                className={`absolute p-10 z-10 rounded-b-xl bg-white scale-y-0
            transition-transform duration-100 ${open && "scale-y-100"} lg:hidden
            origin-top w-80 md:hover:cursor-pointer top-full left-0 h-fit`}
            >
                {headerLinks.map((l) => (
                    <li
                        key={l.name}
                        className="md:hover:pl-3 md:hover:text-highlight"
                    >
                        <Link href={l.link}>{l.name}</Link>
                    </li>
                ))}
            </ul>
        </header>
    );
};

export default Header;
