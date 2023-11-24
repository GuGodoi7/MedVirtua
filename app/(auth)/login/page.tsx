"use client";

import Button from "@/components/Button";
import InputDefault from "@/components/form/InputDefault";
import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";

const Page = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    return (
        <div className="flex items-center h-screen justify-center gap-x-32">
            <section className="flex flex-col justify-center items-center h-screen w-full lg:max-w-md">
                <div className="flex items-center gap-x-1 mb-2">
                    <span className="font-bold hidden md:block text-xl">
                        Med<span className="text-highlight ">Virtua</span>
                    </span>
                </div>
                <section className="max-w-sm flex flex-col items-center w-full md:max-w-lg">
                    <form
                        className="w-full mt-10 space-y-5 flex flex-col items-center"
                        onSubmit={handleLogin}
                    >
                        <InputDefault
                            type="text"
                            text="Email"
                            trackEmail={{
                                email: email,
                                setEmail: setEmail,
                            }}
                        />
                        <InputDefault
                            trackPass={{
                                password: password,
                                setPassword: setPassword,
                            }}
                            type="password"
                            text="Senha"
                        />
                        <Link
                            href={"#"}
                            className="block text-highlight mb-10 text-sm self-end mt-5 underline-offset-2 underline"
                        >
                            Esqueceu a sua senha?
                        </Link>
                        <Button text="Logar" type={"submit"} />
                    </form>
                    <p className="text-sm mt-10">
                        Ainda não faz parte da MedVirtua? <br />
                        <Link
                            href={"sign_up"}
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
