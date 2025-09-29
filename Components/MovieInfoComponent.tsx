"use client";
import type { FC } from "react";
import {useRouter} from "next/navigation";
import {IMovieDetails} from "@/models/IMovieDetails";
import PosterPreview from "@/Components/PosterPreviewComponent";
import StarsRating from "@/Components/StarsRatingComponent";
import GenreBadge from "@/Components/GenreBadgeComponent";
import {formatDate, formatRuntime, getYear} from "@/lib/formats";


type MovieInfoProps = { movie: IMovieDetails };

const MovieInfo: FC<MovieInfoProps> = ({ movie }) => {
    const year = getYear(movie.release_date)
    const navigate = useRouter();
    const runtime = formatRuntime(movie.runtime)
    const release = formatDate(movie.release_date)

    return (
        <section className="relative min-h-[100svh] overflow-hidden  ">
            <div
                className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950  "
                aria-hidden
            />
            <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
                <div className="grid gap-5 md:grid-cols-[220px,1fr] lg:grid-cols-[260px,1fr] items-start">
                    <div className="justify-self-center w-[220px] sm:w-[240px] md:w-[220px] lg:w-[260px] drop-shadow-xl py-[16px]">
                        <PosterPreview path={movie.poster_path || movie.backdrop_path} alt={movie.title} size="w500" />
                    </div>

                    <div className="rounded-2xl bg-white/85 backdrop-blur-md shadow-xl p-4 sm:p-6 lg:p-7">
                        <div className="flex flex-wrap items-center gap-2">
                            <h1 className="text-2xl sm:text-3xl font-semibold leading-snug">
                                {movie.title} {year ? `(${year})` : ""}
                            </h1>
                        </div>
                        {movie.tagline ? (
                            <p className="mt-1 italic text-gray-600">“{movie.tagline}”</p>
                        ) : null}

                        <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-gray-700">
                            <StarsRating value={movie.vote_average} precision={0.1} sizePx={20} />
                            <span className="text-gray-700">{movie.vote_average.toFixed(1)}/10</span>
                            <span className="text-gray-500">• {movie.vote_count.toLocaleString()} votes</span>
                            {runtime && <span className="text-gray-500">• {runtime}</span>}
                            {release && <span className="text-gray-500">• {release}</span>}
                            <span className="text-gray-500">• {movie.status}</span>
                        </div>


                        <div className="mt-3 flex flex-wrap gap-1">
                            {movie.genres.map((g) => (
                                <GenreBadge key={g.id} genre={g} />
                            ))}
                        </div>

                        <p className="mt-4 text-gray-900 text-sm sm:text-base leading-relaxed">
                            {movie.overview || "No description"}
                        </p>

                        <div className="mt-5 flex flex-wrap gap-2">
                            {movie.homepage && (
                                <a
                                    href={movie.homepage}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 shadow-sm hover:bg-gray-50"
                                >
                                    🔗 Homepage
                                </a>
                            )}
                            {movie.imdb_id && (
                                <a
                                    href={`https://www.imdb.com/title/${movie.imdb_id}/`}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 shadow-sm hover:bg-gray-50"
                                >
                                    🎬 IMDb
                                </a>
                            )}

                        </div>

                        <div className="mt-4">
                            <button
                                type="button"
                                onClick={() => window.history.length > 2 ? navigate.back() : navigate.push("/")}
                                className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white/80 px-3 py-1.5
                       text-sm text-gray-800 shadow-sm backdrop-blur hover:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <span aria-hidden>←</span>
                                <span>Back</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MovieInfo;
