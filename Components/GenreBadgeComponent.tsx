import Link from "next/link";
import {IGenre} from "@/models/IGenre";



export default function GenreBadge({ genre }: { genre: IGenre }) {
    return (
        <Link
            href={{ pathname: "/", query: { genre: genre.id, page: 1 } }}
            title={genre.name}
            className="mr-1 inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs text-gray-700 hover:bg-gray-100"
        >
            {genre.name}
        </Link>
    );
}
