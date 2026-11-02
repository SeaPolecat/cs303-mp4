'use client';
import {useState} from "react";
import {TextField, Button} from "@mui/material";
import {useRouter} from "next/navigation";


export default function Home() {
    const [size, setSize] = useState(0);

    const router = useRouter();

    function test() {
        if (!isNaN(size)) {
            router.push('/artworks/5');
        }
    }

    return (
        <div className={"flex flex-col items-center justify-center bg-sky-200 w-fit m-auto mt-10 rounded-2xl p-10"}>
            <h1 className={"text-2xl m-5 text-gray-500 font-serif"}>How many artworks?</h1>

            <p className={"text-red-600"}>{isNaN(size) ? 'Please enter a number' : ''}</p>

            <TextField
                variant={"filled"}
                placeholder={"Enter a number"}
                onChange={e => setSize(Number(e.target.value))}
            />

            <Button onClick={() => test()}>GO!</Button>
        </div>
    );
}