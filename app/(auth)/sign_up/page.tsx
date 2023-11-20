"use client";

import Button from "@/components/Button";
import InputDefault from "@/components/form/InputDefault";
import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";

const Page = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSignup = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

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
                    <form
                        onSubmit={handleSignup}
                        className="w-full mt-10 gap-y-5 flex flex-col items-center"
                    >
                        <InputDefault
                            trackEmail={{
                                email: email,
                                setEmail: setEmail,
                            }}
                            type="text"
                            text="Email"
                        />
                        <InputDefault
                            trackPass={{
                                password: password,
                                setPassword: setPassword,
                            }}
                            type="password"
                            text="Senha"
                        />
                        <InputDefault
                            trackPass={{
                                password: confirmPassword,
                                setPassword: setConfirmPassword,
                            }}
                            type="password"
                            text="Confirme a senha"
                        />
                        <Button
                            text="Cadastrar"
                            type="submit"
                            extraStyle="mt-5"
                        />
                    </form>
                    <p className="text-sm mt-10">
                        Já faz parte da MedVirtua? <br />
                        <Link
                            href={"/login"}
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
