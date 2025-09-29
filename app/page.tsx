import Link from "next/link";
import {GetGenres, GetMovies} from "@/lib/data.service";
import {MovieList} from "@/Components/MovieListComponent";
import {SearchParams} from "next/dist/server/request/search-params";
import {FC} from "react";
import {IGenre} from "@/models/IGenre";

type GenrePairs = Array<[number, IGenre]>;
type PageProps = {
    searchParams : Promise<SearchParams>;
}

const MoviePage:FC<PageProps> = async ({searchParams}) => {
    const sp = await searchParams;
    const page = sp.page ? Number(sp.page) : 1;
    const genre = sp.genre ? Number(sp.genre) : undefined;
    const q = sp.q ? String(sp.q) : undefined;

    const data = await GetMovies( page, genre, q );
    const genres = await GetGenres();
    const genrePairs:GenrePairs = genres.map(g => [g.id, g]);


    const qs = (p: number) => {
        const params = new URLSearchParams();
        if (genre) params.set("genre", String(genre));
        if (q) params.set("q", q);
        params.set("page", String(p));
        return `/?${params.toString()}`;
    };

    return (
        <main className="mx-auto max-w-screen-xl px-4 py-6">
            <MovieList items={data.results} genrePairs={genrePairs} />

            <div className="flex justify-center gap-3 mt-8">
                <Link
                    href={qs(Math.max(1, page - 1))}
                    aria-disabled={page <= 1}
                    tabIndex={page <= 1 ? -1 : 0}
                    className={`px-3 py-2 border rounded ${page <= 1 ? "pointer-events-none opacity-40" : ""}`}
                >
                    ← Prev
                </Link>

                <span className="px-3 py-2 text-sm">
          Page {data.page} / {data.total_pages}
        </span>

                <Link
                    href={qs(Math.min(data.total_pages, page + 1))}
                    aria-disabled={page >= data.total_pages}
                    tabIndex={page >= data.total_pages ? -1 : 0}
                    className={`px-3 py-2 border rounded ${page >= data.total_pages ? "pointer-events-none opacity-40" : ""}`}
                >
                    Next →
                </Link>
            </div>
        </main>
    );
}
export default MoviePage;