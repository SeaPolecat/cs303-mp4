'use server';
const BASE_URL = 'https://api.harvardartmuseums.org/object';
const API_KEY = process.env.API_KEY;


export async function fetchData() {
    const res = await fetch(
        `${BASE_URL}?sort=random&fields=url,primaryimageurl&q=url:*%20AND%20imagepermissionlevel:0&hasimage=1&size=5&apikey=${API_KEY}`,
    );
    const data = await res.json();

    console.log(data.records)

    return data.records
}