'use server';
import {validate} from "@/lib/validate";


const URL = 'https://api.harvardartmuseums.org/object?sort=random&fields=url,primaryimageurl&q=url:*%20AND%20imagepermissionlevel:0&hasimage=1';
const API_KEY = process.env.API_KEY;


export async function getArtworks(size: string) {

    // don't call the API if the user puts an insensible value in the URL
    if (!validate(size)) {
        return []
    }

    try {
        const res = await fetch(`${URL}&size=${size}&apikey=${API_KEY}`);
        const data = await res.json();

        // data contains a list of artwork URLs called "records"
        return data.records;

    } catch(err) {
        console.error(`ERROR: ${err}`);
        return []
    }
}