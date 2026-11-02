import {Artwork} from "@/types/Artwork";
import Link from "next/link";


export default function ArtworkView({artwork}: {artwork: Artwork}) {
    return (
        <Link href={artwork.url} target="_blank">
            <img
                className={"border-gray-800 border-8 border-double hover:opacity-80 transition"}
                src={artwork.primaryimageurl}
            />
        </Link>
    )
}