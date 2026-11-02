import {Artwork} from "@/types/Artwork";
import {fetchData} from "@/lib/fetchData";


export default async function ArtworkListView({size}: {size: number}) {
    const artworks: Artwork[] = await fetchData(size);

    return (
        <>
            <h1>hi</h1>
        </>
    );
}