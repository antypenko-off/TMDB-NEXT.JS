import Image from "next/image";
import {ImgSize, tmdbImg} from "@/lib/tmdb.images";


const sizeToWH: Record<ImgSize, { w: number; h: number }> = {
    original: { w: 780, h: 1170 },
    w92:  { w: 92,  h: 138 },
    w154: { w: 154, h: 231 },
    w185: { w: 185, h: 278 },
    w342: { w: 342, h: 513 },
    w500: { w: 500, h: 750 },
    w780: { w: 780, h: 1170 },
};

export default function PosterPreview({
                                          path,
                                          alt,
                                          size = "w342",
                                      }: { path?: string | null; alt: string; size?: ImgSize }) {
    const { w, h } = sizeToWH[size] ?? sizeToWH.w342;

    return (
        <Image
            src={tmdbImg(path, size)}
            priority={true}
            alt={alt}
            width={w}
            height={h}
            className="w-full aspect-[2/3] object-cover rounded-t-lg"
        />
    );
}
