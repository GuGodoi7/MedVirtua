import { IComent, IVaccine } from "@/types";

const coment: IComent[] = [
    {
        content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe consequuntur sint reprehenderit! Dolores illo vel numquam minima ipsa quibusdam in voluptatem, ea expedita tempore molestiae fugit nemo laborum impedit laudantium.",
        date: "12/12/2023",
        name: "José",
        id: 1,
        vaccineId: 3,
    },
];

const vaccines = [
    {
        id: 1,
        name: "Raiva",
        day: 12,
        month: 11,
        monthName: "Novembro",
        year: 2023,
        madeBy: "Marcos",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe consequuntur sint reprehenderit! Dolores illo vel numquam minima ipsa quibusdam in voluptatem, ea expedita tempore molestiae fugit nemo laborum impedit laudantium.",
        place: "Metro Trianon-Masp",
    },
    {
        id: 2,
        name: "Gripe",
        day: 12,
        month: 11,
        monthName: "Novembro",
        year: 2023,
        madeBy: "Marcos",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe consequuntur sint reprehenderit! Dolores illo vel numquam minima ipsa quibusdam in voluptatem, ea expedita tempore molestiae fugit nemo laborum impedit laudantium.",
        place: "Metro Trianon-Masp",
    },
    {
        id: 3,
        name: "Dengue",
        day: 12,
        month: 12,
        monthName: "Dezembro",
        year: 2023,
        madeBy: "Marcos",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe consequuntur sint reprehenderit! Dolores illo vel numquam minima ipsa quibusdam in voluptatem, ea expedita tempore molestiae fugit nemo laborum impedit laudantium.",
        place: "Metro Trianon-Masp",
        coments: coment,
    },
] as IVaccine[];

export default vaccines;
