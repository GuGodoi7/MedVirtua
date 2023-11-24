export interface INews {
    id: number
    title: string;
    date: string;
    urlToImage: string;
    url: string;
}

export interface IComent{
    name: string
    date: string
    content: string
    vaccineId: number
    id: number
}

export interface IVaccine  {
    name: string;
    day: number;
    month: number;
    monthName: string;
    year: number;
    madeBy: string;
    id: number;
    place: string;
    description: string;
    coments?: IComent[]
};
