'use client';
import {Artwork} from "@/types/Artwork";
import ArtworkView from "@/components/ArtworkView";
import Link from "next/link";


export default function ArtworkListView({artworks}: {artworks: Artwork[]}) {
    return (
        <>
            <div className={"text-center mt-10"}>
                <Link
                    href={'/'}
                    className={"text-amber-900 hover:text-amber-600 transition text-xl font-mono underline"}
                >
                    Back
                </Link>
                <h2 className={"text-amber-900 text-l font-serif italic m-5"}>
                    Click on an artwork to learn more
                </h2>
            </div>

            <p className={"text-red-600 text-center"}>
                {artworks.length > 0 ? '' : 'Sorry, an error occurred!'}
            </p>

            <div className={"grid grid-cols-3 gap-10 mx-20 my-10"}>
                {
                    artworks.map(artwork =>
                        <ArtworkView key={artwork.id} artwork={artwork}/>
                    )
                }
            </div>
        </>
    );
}