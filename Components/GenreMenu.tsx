'use client';

import type { ChangeEvent } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { IGenre } from "@/models/IGenre";

export default function GenreMenu({ genres }: { genres: IGenre[] }) {
    const router = useRouter();
    const pathname = usePathname();
    const sp = useSearchParams();

    const activeGenre = sp.get("genre") ?? "";

    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const val = e.target.value;
        const next = new URLSearchParams(sp.toString());
        if (!val) next.delete("genre");
        else next.set("genre", val);
        next.set("page", "1");
        router.push(`${pathname}?${next.toString()}`);
    };

    return (
        <label className="flex items-center gap-2 text-sm text-gray-700">
            <span className="whitespace-nowrap">Genre:</span>
            <select
                className="w-[140px] sm:w-[180px] rounded-md border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                value={activeGenre}
                onChange={onChange}
            >
                <option value="">All genres</option>
                {genres.map(g => (
                    <option key={g.id} value={g.id}>{g.name}</option>
                ))}
            </select>
        </label>
    );
}
