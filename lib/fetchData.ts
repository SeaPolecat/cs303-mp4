'use server';
const BASE_URL = 'https://api.harvardartmuseums.org/object';
const API_KEY = process.env.API_KEY;


export async function fetchData(size: number) {
    const res = await fetch(
        `${BASE_URL}?sort=random&fields=url,primaryimageurl&q=url:*%20AND%20primaryimageurl:*&size=${size}&apikey=${API_KEY}`,
    );
    const data = await res.json();

    return data.records
}
