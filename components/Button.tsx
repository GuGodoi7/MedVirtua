import Link from "next/link";

interface IButton {
    type?: "button" | "reset" | "submit" | undefined;
    text: string;
    extraStyle?: string;
    color?: string;
    link?: string;
}

const Button = ({ type, text, link, color, extraStyle }: IButton) => {
    return (
        <Link href={link ? link : "#"}>
            <button
                type={type ?? "button"}
                className={`w-[219px] h-[40px] active:scale-[0.95] ${
                    color ? color : "bg-highlight"
                } rounded-md text-white font-bold ${extraStyle}`}
            >
                {text}
            </button>
        </Link>
    );
};

export default Button;
