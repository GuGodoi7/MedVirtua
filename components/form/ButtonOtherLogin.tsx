import { ReactNode } from "react"

interface IButtonProps{
    icon?: string | ReactNode
    text?: string
}

const ButtonOtherLogin = ({icon, text}: IButtonProps) => {
    return (
        <button className={"bg-white border border-border_color shadow-md shadow-zinc-300 md:hover:bg-zinc-300 rounded-md h-[40px] flex items-center w-full justify-center active:scale-[0.95] max-w-sm"}>
            {text}
            {icon}
        </button>
    )
}

export default ButtonOtherLogin
