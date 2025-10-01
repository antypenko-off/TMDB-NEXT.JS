

import {GetMovieDetails} from "@/lib/data.service";
import MovieInfo from "@/Components/MovieInfoComponent";
import {Metadata} from "next";



export async function generateMetadata(
    { params }: { params: Promise<{ id: string }> }
): Promise<Metadata> {
    const { id } = await params;
    const movie = await GetMovieDetails(id);
    return {
        title: `${movie.title} (${new Date(movie.release_date).getFullYear()})`,
        description: movie.overview || "Movie details from TMDB",
        openGraph: {
            title: movie.title,
            description: movie.overview || "",
            images: movie.poster_path
                ? [`https://image.tmdb.org/t/p/w500${movie.poster_path}`]
                : [],
        },
    };
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const movie = await GetMovieDetails(id);

    return <MovieInfo movie={movie} />;
}
