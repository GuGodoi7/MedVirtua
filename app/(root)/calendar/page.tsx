"use client";
import Link from "next/link";
import { useRef, useState } from "react";

type IVaccine = {
  name: string;
  day: number;
  month: number;
  monthName: string;
  year: number;
  madeBy: string;
  id: number
};

const CardDate = (v: IVaccine) => {
    return (
        <div className="border border-text/50 rounded-md overflow-hidden w-72">
            <section className="w-full text-white bg-light-blue p-2">
                <p>Vacina: {v.name}</p>
                <p className="text-sm">
            Data: {v.day}/{v.month}/{v.year}
                </p>
            </section>
            <section className="p-2 text-sm space-x-2">
                <span className="text-black/60">Por: </span>
                <span>{v.madeBy}</span>
            </section>
        </div>
    );
};

const vaccines = [
    {
        id: 1,
        name: "Raiva",
        day: 12,
        month: 11,
        monthName: "Novembro",
        year: 2023,
        madeBy: "Marcos",
    },
    {
        id: 2,
        name: "Gripe",
        day: 12,
        month: 11,
        monthName: "Novembro",
        year: 2023,
        madeBy: "Marcos",
    },
    {
        id: 3,
        name: "Dengue",
        day: 12,
        month: 12,
        monthName: "Dezembro",
        year: 2023,
        madeBy: "Marcos",
    }
];

const Calendar = () => {
    const lastMonth = useRef<number>();
    const lastYear = useRef<number>();

    const isMonthEqual = (v: IVaccine) => {
        if(v.month !== lastMonth.current || v.year !== lastYear.current)
        {
            lastMonth.current = v.month
            lastYear.current = v.year
            return (
                <p className="text-sm text-black/50 mt-10">
                    {v.monthName} / {v.year}
                </p>
            )
        }else{
            return <></>
        }
    }

    return (
        <div className="flex flex-col items-center gap-y-10">
            {vaccines.map((v) => 
                (
                    <Link key={v.id} className="flex flex-col items-center gap-y-10" href="#">
                        {isMonthEqual(v)}
                        <CardDate  {...v} />
                    </Link>
                )
            )}
        </div>
    );
};

export default Calendar;
