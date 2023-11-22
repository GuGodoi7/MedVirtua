import Link from "next/link";
import { IoIosSearch } from "react-icons/io";

const SearchInput = ({ extraStyle }: { extraStyle?: string }) => {
    return (
        <form
            className={`border border-text/50 pl-2 flex items-center justify-between w-72 ${extraStyle} overflow-hidden rounded-sm`}
        >
            <input
                type="text"
                className="outline-none flex-grow w-full"
                placeholder="Pesquisar"
            />
            <button
                type="submit"
                className="border-l border-text/50 p-2 hover:bg-text hover:text-white"
            >
                <IoIosSearch className="w-5 h-5" />
            </button>
        </form>
    );
};

const NewsContainer = ({ extraStyle }: { extraStyle?: string }) => {
    return (
        <div
            className={`w-96 lg:w-80 border border-text/50 overflow-hidden rounded-md lg:relative ${extraStyle}`}
        >
            <div className="bg-zinc-500 w-full h-48" />
            <section
                className="flex flex-col p-2 overflow-y-hidden
            lg:absolute lg:top-2/3"
            >
                <span className="lg:text-white">Nome</span>
                <span className="lg:text-white text-sm text-text/75 font-light">
                    Descrição
                </span>
            </section>
        </div>
    );
};

const News = () => {
    return (
        <div className="max-w-sm mx-auto lg:max-w-6xl">
            <section className="w-full mt-10 lg:text-center space-y-10">
                <h1 className="text-lg lg:text-xl lg:font-bold">
                    Veja o que aconteceu <br />
                    no mundo da saúde
                </h1>
                <SearchInput extraStyle="mx-auto lg:w-96" />
            </section>
            <section className="lg:flex lg:mt-10 lg:flex-wrap lg:gap-x-5 lg:justify-center">
                {Array(5)
                    .fill(0)
                    .map((_, i) => (
                        <Link key={i} href="#">
                            <NewsContainer extraStyle="mx-auto mt-10" />
                        </Link>
                    ))}
            </section>
        </div>
    );
};

export default News;
