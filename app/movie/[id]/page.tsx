

import {GetMovieDetails} from "@/lib/data.service";
import MovieInfo from "@/Components/MovieInfoComponent";




export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const movie = await GetMovieDetails(id);

    return <MovieInfo movie={movie} />;
}
