
'use client';

import type { FC } from "react";

import GenreMenu from "@/Components/GenreMenu";
import UserInfo from "@/Components/UserInfoComponent";
import type { IGenre } from "@/models/IGenre";
import {useURLSearch} from "@/hooks/useURLSearch";
import {useSearchQuery} from "@/hooks/useSearchQuery";

const Header: FC<{ genres: IGenre[] }> = ({ genres }) => {
    const { query, setQuery, onSubmit } = useSearchQuery();
    const { resetPath } = useURLSearch();
    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
            <div className="max-w-screen-xl mx-auto px-4 py-3 flex flex-wrap items-center gap-3">
                <button onClick={resetPath} className="text-xl font-bold tracking-tight cursor-pointer">Pinball</button>

                <div className="shrink-0">
                    <GenreMenu genres={genres} />
                </div>

                <form onSubmit={onSubmit} className="order-last w-full sm:order-none sm:flex-1">
                    <input
                        value={query}
                        onChange={(e)=>setQuery(e.target.value)}
                        placeholder="Search movies…"
                        className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </form>

                <UserInfo/>
            </div>
        </header>
    );
};

export default Header;
