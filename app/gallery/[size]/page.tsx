import {Suspense} from "react";
import {getArtworks} from "@/api/getArtworks";
import ArtworkListView from "@/components/ArtworkListView";


export default async function Gallery({params}: {params: Promise<{size: string}>}) {
    const {size} = await params;
    const artworks = await getArtworks(Number(size));

    return (
        <Suspense fallback={<p>loading...</p>}>
            <ArtworkListView artworks={artworks}/>
        </Suspense>
    );
}