const Button = ({text}: {text: string}) => {
    return (
        <button className="w-[219px] h-[40px] active:scale-[0.95] bg-highlight rounded-md text-white font-bold">
            {text}
        </button>
    )
}

export default Button
