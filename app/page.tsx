'use client';
import {useState} from "react";
import {TextField} from "@mui/material";
import {useRouter} from "next/navigation";


export default function Home() {
    const [size, setSize] = useState(0);
    const router = useRouter();

    function goToGallery() {
        if (!isNaN(size) && size > 0 && size <= 100) {
            router.push(`/gallery/${size}`);
        }
    }

    return (
        <div className={"flex flex-col items-center justify-center bg-amber-200 w-fit m-auto mt-40 rounded-2xl px-10 py-8"}>
            <h1 className={"text-2xl text-amber-900 font-mono italic mb-10"}>
                How many artworks?
            </h1>

            <p className={"text-gray-500"}>
                {!isNaN(size) && size > 0 && size <= 100 ? '' : 'Enter a number between 1-100'}
            </p>

            <TextField
                variant={"filled"}
                placeholder={"Enter a number"}
                onChange={e => setSize(Number(e.target.value))}
            />

            <button
                className={"bg-sky-300 hover:bg-sky-400 transition text-xl text-white rounded-xl font-mono cursor-pointer py-2 px-5 mt-10"}
                onClick={() => goToGallery()}
            >
                Create My Gallery!
            </button>
        </div>
    );
}