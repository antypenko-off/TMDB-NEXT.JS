
export type ImgSize = "original"|"w92"|"w154"|"w185"|"w342"|"w500"|"w780";
export const placeholder = "https://placehold.co/400x600/png?text=No+Image";

export const tmdbImg = (path?: string|null, size: ImgSize = 'w342') => {
    if (!path) return placeholder;
    const base = (process.env.TMDB_IMAGE_URL ?? 'https://image.tmdb.org/t/p').replace(/\/$/, '');
    return `${base}/${size}${path}`;
};
