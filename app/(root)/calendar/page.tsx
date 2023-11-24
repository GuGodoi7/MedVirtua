"use client";
import { IVaccine } from "@/types";
import Link from "next/link";
import { useRef } from "react";
import vaccines from "@/api/vaccines";

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

const Calendar = () => {
    const lastMonth = useRef<number>();
    const lastYear = useRef<number>();

    const isMonthEqual = (v: IVaccine) => {
        if (v.month !== lastMonth.current || v.year !== lastYear.current) {
            lastMonth.current = v.month;
            lastYear.current = v.year;
            return (
                <p className="text-sm text-black/50 mt-10">
                    {v.monthName} / {v.year}
                </p>
            );
        } else {
            return <></>;
        }
    };

    return (
        <div className="flex flex-col items-center gap-y-10">
            {vaccines.map((v) => (
                <Link
                    key={v.id}
                    className="flex flex-col items-center gap-y-10"
                    href={`/calendar/info/${v.id}`}
                >
                    {isMonthEqual(v)}
                    <CardDate {...v} />
                </Link>
            ))}
        </div>
    );
};

export default Calendar;
