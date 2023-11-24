import { IChat } from "@/types";

// TODO: excluir essa linha
interface IChatProps extends IChat {}

const Message = ({ message, name }: IChatProps) => {
    return (
        <div className="text-sm rounded-sm p-2 text-right inline-block self-end max-w-[200px] border-text/50 border">
            <span className="font-bold text-text/90">{name}</span>
            <p className="font-normal text-text/90">{message}</p>
        </div>
    );
};

export default Message;
