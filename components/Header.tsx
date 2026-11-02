export default function Header() {
    return (
        <header className={"flex justify-between items-center h-20 bg-sky-300"}>
            <h1 className={"text-3xl m-8 text-white font-mono"}>
                Mini Harvard Art Gallery
            </h1>

            <h2 className={"text-2xl m-8 text-white font-serif italic"}>
                What will you discover next?
            </h2>
        </header>
    );
}