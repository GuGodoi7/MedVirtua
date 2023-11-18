"use client";

import { useState } from "react";

interface IInputDefaultProps {
    text: string;
    type: string;
    trackEmail?: {
        email: string;
        setEmail: (string: string) => void;
    };
    trackPass?: {
        password?: string;
        setPassword?: (string: string) => void;
    };
}

const InputDefault = ({
    text,
    type,
    trackPass,
    trackEmail,
}: IInputDefaultProps) => {
    const [seePassword, setSeePassword] = useState<boolean>(false);

    return (
        <div className="w-full relative">
            <label className="text-sm block" htmlFor="formInput">
                {text}
            </label>
            <input
                id="formInput"
                type={
                    type === "password"
                        ? seePassword
                            ? "text"
                            : "password"
                        : type
                }
                required
                placeholder="Informe o seu email"
                className="p-2 w-full  text max-w-md border-border_color border-2 outline-none rounded-md"
                value={
                    type === "text" ? trackEmail?.email : trackPass?.password
                }
                onChange={(event) => {
                    type === "text"
                        ? trackEmail?.setEmail(event.target.value)
                        : trackPass?.setPassword!(event.target.value);
                }}
            />
            {type === "password" && (
                <input
                    type="checkbox"
                    defaultChecked={seePassword}
                    onClick={() =>
                        setSeePassword((prev) =>
                            prev === false ? true : false
                        )
                    }
                    className="absolute right-2 top-9"
                />
            )}
        </div>
    );
};

export default InputDefault;
