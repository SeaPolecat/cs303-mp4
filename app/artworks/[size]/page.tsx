'use server';
import {Artwork} from "@/types/Artwork";
import {fetchData} from "@/lib/fetchData";
import {useParams} from "next/navigation";


export default async function Gallery() {
    const params = useParams();
    const size = params.size;

    const artworks: Artwork[] = await fetchData();

    return (
        <>
        </>
    );
}
