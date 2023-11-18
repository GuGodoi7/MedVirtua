import Button from "./Button";

const Banner = () => {
    return (
        <div className="bg__banner flex flex-col py-28">
            <div className=" max-w-[290px] mx-auto flex flex-col items-center">
                <p className="text-[1.5rem] text-white opacity-75 mb-5">
                    Se atenha ao:
                </p>
                <h1 className="text-[3rem] text-white leading-10 font-bold">
                    NOVEMBRO
                </h1>
                <p className="text-text self-end text-[3rem] leading-10 font-bold">
                    AZUL
                </p>
                <p className="text-white mt-16 text-center font-medium">
                    Encontre os locais para realizar as consultas com a
                    MedVirtua
                </p>
                <Button
                    color="bg-[#001898]"
                    text="Encontrar locais"
                    extraStyle="mt-5"
                />
            </div>
        </div>
    );
};

export default Banner;
