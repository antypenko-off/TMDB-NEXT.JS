"use server";

import {tmdb} from "@/lib/tmdb.service";
import {IGenre} from "@/models/IGenre";
import {IMovieResponse} from "@/models/IMovie";
import {IMovieDetails} from "@/models/IMovieDetails";


export async function GetGenres(): Promise<IGenre[]> {
    const data = await tmdb(`/genre/movie/list`, { next: { revalidate: 86400, tags: ["genres"] } });
    return data.genres;
}

export async function GetMovies(page?: number, genre?: number, q?: string ): Promise<IMovieResponse> {
    const path = q ?
        `/search/movie?query=${q}&page=${String(page ?? 1)}`
        : `/discover/movie?page=${String(page ?? 1)}${genre ? `&with_genres=${genre}` : ""}`;

    const revalidate =q ? 60 : 600;
    return  await tmdb(path, { next: { revalidate, tags: ["movies"] } });
}

export async function GetMovieDetails(id: string | number): Promise<IMovieDetails> {
    return tmdb(`/movie/${id}`, { next: { revalidate: 3600, tags: [`movie-${id}`] } });
}
