"use client";

import type { FC } from "react";
import MoviesListCard from "@/Components/MoviesListCardComponent";
import type { IMovie } from "@/models/IMovie";
import type { IGenre } from "@/models/IGenre";
import styles from "./MovieListComponent.module.css";

type Props = {
    items: IMovie[];
    genrePairs: [number, IGenre][];
};

export const MovieList: FC<Props> = ({ items, genrePairs }) => {
    const genreById = new Map<number, IGenre>(genrePairs);

    return (
        <div className={styles.masonry} role="list">
            {items.map((m) => (
                <div className={styles.masonryItem} role="listitem" key={m.id}>
                    <div className="mb-4">
                        <MoviesListCard movie={m} genreById={genreById} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MovieList;
