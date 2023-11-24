"use client"
import { useParams } from "next/navigation"
import { vaccines } from "@/api/vaccines"
import { IComent, IVaccine } from "@/types"
import Button from "@/components/Button"
import Image from "next/image"

const Comentario = ({name, date, content}: IComent) => {
    return (
        <div className="space-y-3 bg-zinc-200 rounded-md px-2 py-3 max-w-sm">
            <div className="text-sm flex gap-x-10">
                <span>{name}</span>
                <span className="text-text/50">{date}</span>
            </div>
            <p className="text-xs">{content}</p>
        </div>
    )
}

const VaccineInfo = () => {
    const {id: vaccineId} = useParams()
    const vaccine = vaccines.find(v => v.id === JSON.parse(vaccineId[0])) as IVaccine

    if (!vaccine){
        return (
            <h1 className="text-center text-lg mt-10 font-bold text-text/50">
                Vacina não encontrada
            </h1>
        )
    }
    
    return (
        <div className="w-full flex flex-col py-10 items-center max-w-sm mx-auto gap-y-10 md:max-w-md">
            <section className="w-full flex justify-between items-center">
                <span className="text-sm text">Criado por: {vaccine.madeBy}</span>
                <Button text="tirar duvida" size="w-24 h-10" extraStyle="text-xs font-bold"/>
            </section>
            <section className="w-full space-y-10">
                <div>
                    <h2 className="font-bold">Vacina: {vaccine.name}</h2>
                    <p className="text-sm font-bold">Data: <span className="font-normal">{vaccine.day}/{vaccine.month}/{vaccine.year}</span></p>
                </div>
                <div className="text-sm space-y-3">
                    <p>Descrição</p>
                    <p className="text-xs">{vaccine.description}</p>
                </div>
            </section>
            <section className="space-y-5 w-full">
                <div className="space-y-3">
                    <p className="text-sm font-bold">Local: <span className="font-medium">{vaccine.place}</span></p>
                    <Image src="https://i.blogs.es/b68133/4urb5gipmfhw3ku55p7hkkrpue/450_1000.webp" width={1000} height={1000} alt="Google maps" className="w-full aspect-auto border-2 rounded-md"/>
                </div>
                <div className="flex justify-around">
                    <Button size="w-32 h-8" extraStyle="text-xs font-bold" text="Compartilhar"/>
                    <Button size="w-32 h-8" extraStyle="text-xs font-bold" text="Salvar"/>
                </div>
            </section>
            <section className="w-full text-sm space-y-5">
                <p>Comentarios</p>
                {
                    vaccine.coments ?(
                        vaccine.coments.map(c => <Comentario key={c.id} {...c}/>)):
                        (<h2 className="font-bold text-text/50 text-center">
                            Nenhum comentário ainda
                        </h2>)
                }
                
            </section>
        </div>
    )
}

export default VaccineInfo
