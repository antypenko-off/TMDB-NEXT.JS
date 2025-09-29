
'use client';

import type { FC } from 'react';
import { useRouter } from 'next/navigation';

import type { IMovie } from '@/models/IMovie';
import StarsRating from '@/Components/StarsRatingComponent';
import GenreBadge from '@/Components/GenreBadgeComponent';
import PosterPreview from "@/Components/PosterPreviewComponent";
import {IGenre} from "@/models/IGenre";


type MoviesListCardProps = {
    movie: IMovie;
    genreById: Map<number, IGenre>;
};

const MoviesListCard: FC<MoviesListCardProps> = ({ movie, genreById }) => {
    const router = useRouter();
    const year = movie.release_date ? new Date(movie.release_date).getFullYear() : undefined;

    return (
        <article className="rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
            <div className="cursor-pointer" onClick={() => router.push(`/movie/${movie.id}`)}>
                <PosterPreview path={movie.poster_path || movie.backdrop_path} alt={movie.title} size="w342" />
            </div>

            <div className="p-4 grid gap-2">
                <h3 className="m-0 text-base md:text-lg font-semibold leading-tight line-clamp-2" title={movie.title}>
                    {movie.title}
                </h3>
                <div className="text-xs md:text-sm text-gray-500">{year ?? '—'}</div>
                <p className="m-0 text-sm md:text-base text-gray-800 line-clamp-3 md:line-clamp-4">
                    {movie.overview || 'No description'}
                </p>
                <div className="mt-1">
                    <StarsRating value={movie.vote_average} />
                </div>
                <div className="mt-1 flex flex-wrap gap-1">
                    {movie.genre_ids.map((id) => {
                        const g = genreById.get(id);
                        return g ? <GenreBadge key={id} genre={g} /> : null;
                    })}
                </div>
            </div>
        </article>
    );
};

export default MoviesListCard;
