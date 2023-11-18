import Button from "@/components/Button";
import ButtonOtherLogin from "@/components/form/ButtonOtherLogin";
import InputDefault from "@/components/form/InputDefault";
import Image from "next/image";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";

const Page = () => {
    return (
        <div className="flex items-center h-screen justify-center gap-x-32">
            <section className="flex flex-col justify-center items-center h-screen  lg:max-w-lg ">
                <div className="flex items-center gap-x-1">
                    <div className="bg-zinc-300 w-10 aspect-square rounded-full " />
                    <span className="font-bold hidden md:block">
                        Med<span className="text-highlight ">Virtua</span>
                    </span>
                </div>
                <section className="flex flex-col items-center w-full md:max-w-md">
                    <form className="w-full mb-10 mt-10 space-y-5 ">
                        <InputDefault type="text" text="Email" />
                        <InputDefault type="password" text="Senha" />
                        <InputDefault type="password" text="Confirme a senha" />
                    </form>
                    <Button text="Cadastrar" />
                    <p className="text-sm mt-10">
                        Já faz parte da MedVirtua? <br />
                        <Link
                            href={"#"}
                            className="text-highlight underline underline-offset-2"
                        >
                            Faça o login
                        </Link>
                    </p>
                </section>
            </section>
            <section className=" hidden xl:block">
                <Image
                    src="/images/login_drawing.png"
                    alt="login drawing"
                    width={500}
                    height={1000}
                    className="object-cover "
                />
            </section>
        </div>
    );
};

export default Page;
