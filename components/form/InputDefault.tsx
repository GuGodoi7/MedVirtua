"use client"

import { useState } from "react";

const InputDefault = ({text, type}: {text: string, type: string}) => {
    const [seePassword, setSeePassword] = useState<boolean>(false)
    
    return (
        <div className="w-full relative">
            <label className="text-sm block" htmlFor="formInput">{text}</label>
            <input 
                id="formInput" 
                type={type === "password" ? seePassword ? "text" : "password" : type}
                required 
                placeholder="Informe o seu email" 
                className="p-2 w-full  text max-w-md border-border_color border-2 outline-none rounded-md"/>
            {type === "password" && <input type="checkbox" defaultChecked={seePassword} onClick={() => setSeePassword(prev => prev === false ? true : false)}
                className="absolute right-2 top-9" />}
        </div>
    )
}

export default InputDefault
