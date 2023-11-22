"use client";
import { useEffect, useState } from "react";

const equipe = [
    {
        name: "Amorgan ...",
        fullName: "Amorgan Mendes Lopes",
    },
    {
        name: "Gustavo ...",
        fullName: "Gustavo Godoi da Silva",
    },
    {
        name: "Matheus ...",
        fullName: "Melissa de Oliveira Pecoraro",
    },
    {
        name: "Melissa ...",
        fullName: "Matheus Chagas de Moraes Sampaio",
    },
    {
        name: "Roberto ...",
        fullName: "Roberto Menezes dos Santos",
    },
];

const servicos = [
    {
        text: "Calendário de vacinas",
    },
    {
        text: "Tratamentos",
    },
    {
        text: "Clinicas",
    },
    {
        text: "Mapa das doenças",
    },
];

const Footer = () => {
    const [windowSize, setWindowSize] = useState<number>(
        typeof window !== "undefined" ? window.innerWidth : 0
    );

    useEffect(() => {
        window.addEventListener("resize", () => {
            setWindowSize(
                typeof window !== "undefined" ? window.innerWidth : 0
            );
        });
    });

    return (
        <footer className="mt-10 p-10 max-w-6xl mx-auto">
            <div className="flex items-center gap-x-1">
                <div className="bg-zinc-300 w-10 font-bold aspect-square rounded-full" />
                <p className="font-semibold">
                    Med<span className="text-highlight">Virtua</span>
                </p>
            </div>
            <p className="text-text mt-10">
                Nos siga em nossas <br />
                redes sociais
            </p>
            <div className="flex gap-x-2 mt-5">
                <div className="bg-zinc-300 w-10 font-bold aspect-square rounded-full" />
                <div className="bg-zinc-300 w-10 font-bold aspect-square rounded-full" />
                <div className="bg-zinc-300 w-10 font-bold aspect-square rounded-full" />
                <div className="bg-zinc-300 w-10 font-bold aspect-square rounded-full" />
                <div className="bg-zinc-300 w-10 font-bold aspect-square rounded-full" />
            </div>
            <section className="flex justify-between mt-10 md:justify-start gap-x-16">
                <div>
                    <h2 className="font-semibold text-text mb-2">Serviços</h2>
                    {servicos.map((s) => (
                        <p
                            key={s.text}
                            className="text-black/60 text-sm md:text-md lg:hover:underline lg:hover:underline-offset-2"
                        >
                            {s.text}
                        </p>
                    ))}
                </div>
                <div className="text-right md:text-start md:border-l-2 border-black/60 md:pl-16">
                    <h2 className="font-semibold text-text mb-2">Equipe</h2>
                    {equipe.map((e) => (
                        <p
                            key={e.fullName}
                            className="text-black/60 text-sm md:text-md lg:hover:underline lg:hover:underline-offset-2"
                        >
                            {windowSize < 767 ? e.name : e.fullName}
                        </p>
                    ))}
                </div>
            </section>
        </footer>
    );
};

export default Footer;
