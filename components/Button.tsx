import Link from "next/link";

interface IButton {
    type?: "button" | "reset" | "submit" | undefined;
    text: string;
    extraStyle?: string;
    color?: string;
    link?: string;
    size?: string;
}

const Button = ({ type, text, link, color, extraStyle, size }: IButton) => {
    return (
        <Link href={link ? link : "#"}>
            <button
                type={type ?? "button"}
                className={`${size ? size : "w-52 h-10"} active:scale-[0.95] ${
                    color ? color : "bg-highlight"
                } rounded-md text-white font-bold ${extraStyle}`}
            >
                {text}
            </button>
        </Link>
    );
};

export default Button;
