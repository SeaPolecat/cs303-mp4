import {Suspense} from "react";
import {getArtworks} from "@/lib/getArtworks";
import ArtworkListView from "@/components/ArtworkListView";


export const dynamic = 'force-static';


export default async function Gallery({params}: {params: Promise<{size: string}>}) {
    const {size} = await params;
    const artworks = await getArtworks(size);

    return (
        <Suspense fallback={<p>loading...</p>}>
            <ArtworkListView artworks={artworks}/>
        </Suspense>
    );
}