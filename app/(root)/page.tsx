import Banner from "@/components/Banner";
import Button from "@/components/Button";

const Home = () => {
    return (
        <div>
            <Banner />
            <section className="mx-auto max-w-[320px] lg:max-w-4xl space-y-10 md:text-center">
                <h2 className="text-[2rem] max-w-xs lg:max-w-md md:mx-auto text-text font-bold">
                    Tenha todas as suas vacinas em um só lugar
                </h2>
                <p className="text-text max-w-xs font-medium md:mx-auto lg:max-w-md">
                    Cadastre-se ou faça o login para ter acesso a um cartão de
                    vacinas virtual, onde você poderá não só marcar suas
                    vacinações mas ser avisado sobre épocas de vacina
                </p>
                <Button
                    link="/sign_up"
                    text="cadastrar"
                    extraStyle="mt-10 lg:max-w-md w-full"
                />
            </section>
        </div>
    );
};

export default Home;
