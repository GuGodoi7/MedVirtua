const Footer = () => {
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
                    <p className="text-black/60 text-sm md:text-md lg:hover:underline lg:hover:underline-offset-2">
                        Calendário de vacinas
                    </p>
                    <p className="text-black/60 text-sm md:text-md lg:hover:underline lg:hover:underline-offset-2">
                        Tratamentos
                    </p>
                    <p className="text-black/60 text-sm md:text-md lg:hover:underline lg:hover:underline-offset-2">
                        Clinicas
                    </p>
                    <p className="text-black/60 text-sm md:text-md lg:hover:underline lg:hover:underline-offset-2">
                        Mapa das doenças
                    </p>
                </div>
                <div className="text-right md:text-start md:border-l-2 border-black/60 md:pl-16">
                    <h2 className="font-semibold text-text mb-2">Equipe</h2>
                    <p className="text-black/60 text-sm md:text-md lg:hover:underline lg:hover:underline-offset-2">
                        Amorgan Lopes ...
                    </p>
                    <p className="text-black/60 text-sm md:text-md lg:hover:underline lg:hover:underline-offset-2">
                        Gustavo ...
                    </p>
                    <p className="text-black/60 text-sm md:text-md lg:hover:underline lg:hover:underline-offset-2">
                        Matheus ...
                    </p>
                    <p className="text-black/60 text-sm md:text-md lg:hover:underline lg:hover:underline-offset-2">
                        Melissa ...
                    </p>
                    <p className="text-black/60 text-sm md:text-md lg:hover:underline lg:hover:underline-offset-2">
                        Roberto ...
                    </p>
                </div>
            </section>
        </footer>
    );
};

export default Footer;
