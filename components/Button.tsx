interface IButton {
    type?: "button" | "reset" | "submit" | undefined;
    text: string;
    extraStyle?: string;
    color?: string;
}

const Button = ({ type, text, color, extraStyle }: IButton) => {
    return (
        <button
            type={type ?? "button"}
            className={`w-[219px] h-[40px] active:scale-[0.95] ${
                color ? color : "bg-highlight"
            } rounded-md text-white font-bold ${extraStyle}`}
        >
            {text}
        </button>
    );
};

export default Button;
