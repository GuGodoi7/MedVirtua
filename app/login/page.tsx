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
                <div className="bg-zinc-300 w-10 aspect-square rounded-full mb-20" />
                <section className="flex flex-col items-center w-full md:max-w-md">
                    <ButtonOtherLogin icon={<FaGoogle className="h-5 w-5" />} />
                    <form className="w-full mt-10 space-y-5 ">
                        <InputDefault type="text" text="Email" />
                        <InputDefault type="password" text="Password" />
                    </form>
                    <Link
                        href={"#"}
                        className="text-highlight mb-10 text-sm self-end mt-5 underline-offset-2 underline"
                    >
                        Esqueceu a sua senha?
                    </Link>
                    <Button text="Logar" />
                    <p className="text-sm mt-10">
                        Ainda não faz parte da MedVirtua? <br />
                        <Link
                            href={"#"}
                            className="text-highlight underline underline-offset-2"
                        >
                            Crie uma conta
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
