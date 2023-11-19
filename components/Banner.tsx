import Button from "./Button";

const Banner = () => {
    return (
        <div className="bg__banner flex flex-col py-28">
            <div className=" max-w-[290px] mx-auto lg:justify-between flex items-center lg:p-10 lg:max-w-6xl lg:gap-x-20 flex-col lg:flex-row">
                <section>
                    <p className="text-[1.5rem] text-center lg:text-left lg:text-[2rem] lg:font-bold text-white opacity-75 mb-5">
                        Se atenha ao:
                    </p>
                    <h1 className="text-[3rem] lg:text-[5rem] text-white leading-10 font-bold">
                        NOVEMBRO
                    </h1>
                    <p className="text-text text-end text-[3rem] lg:text-[5rem] lg:leading-tight leading-10 font-bold">
                        AZUL
                    </p>
                </section>
                <section className="lg:text-center">
                    <p className="text-white mt-16 lg:text-[1.5rem] font-medium">
                        Encontre os locais para realizar as consultas com a
                        MedVirtua
                    </p>
                    <Button
                        color="bg-[#001898]"
                        text="Encontrar locais"
                        extraStyle="mt-5"
                    />
                </section>
            </div>
        </div>
    );
};

export default Banner;
