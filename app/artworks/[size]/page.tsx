'use server';
import {Artwork} from "@/types/Artwork";
import {fetchData} from "@/lib/fetchData";


export default async function Artworks() {
    const artworks: Artwork[] = await fetchData();

    return (
        <>
            {
                artworks.map(artwork =>
                    <img key={artwork.id} src={artwork.primaryimageurl} className={"w-50 mt-10"}/>
                )
            }
        </>
    );
}