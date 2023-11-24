"use client";
import { useEffect } from "react";
import { IoIosSend } from "react-icons/io";

const SendMessageInput = () => {
    useEffect(() => {
        if (typeof window !== "undefined") {
            window.scrollTo({
                top: document.documentElement.clientHeight - 500,
                behavior: "smooth",
            });
        }
    }, []);

    return (
        <form className="p-2 flex justify-between items-center w-full bottom-10">
            <input
                type="text"
                className="border border-text/50 rounded-sm p-2"
                placeholder="Tire sua duvida"
            />
            <button className="hover:text-white hover:bg-text active:scale-95 border border-text/50 p-2 rounded-sm">
                <IoIosSend className="w-6 h-6" />
            </button>
        </form>
    );
};

export default SendMessageInput;
