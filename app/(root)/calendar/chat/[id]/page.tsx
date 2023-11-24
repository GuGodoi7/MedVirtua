"use client";
import chat from "@/api/chats";
import Button from "@/components/Button";
import SendMessageInput from "@/components/form/SendMessageInput";
import Message from "@/components/Message";
import { useParams } from "next/navigation";

const ChatPoster = () => {
    const { id: vaccineId } = useParams();
    const validChats = chat.filter(
        (c) => c.vaccineId === JSON.parse(vaccineId[0])
    );

    return (
        <div className="max-w-sm w-full h-screen flex flex-col md:max-w-md  mx-auto py-10">
            <section className="space-y-5">
                <Button
                    link={`/calendar/info/${vaccineId}`}
                    text="Voltar"
                    size="w-16 h-10"
                    extraStyle="text-sm"
                />
                <p className="text-sm text-center text-text/50">Pergunte</p>
            </section>
            <section className="w-full h-full flex flex-col justify-between flex-grow">
                <div
                    className={`overflow-hidden flex-grow flex w-full ${
                        validChats.length !== 0
                            ? "justify-end"
                            : "justify-center"
                    } flex-col py-4 gap-y-4`}
                >
                    {validChats.length !== 0 ? (
                        validChats.map((c) => <Message {...c} key={c.id} />)
                    ) : (
                        <h1 className="text-center text-lg mt-10 font-bold text-text/50">
                            {/* // TODO: adicionar texto  */}
                        </h1>
                    )}
                </div>
                <SendMessageInput />
            </section>
        </div>
    );
};

export default ChatPoster;
