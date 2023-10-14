import Link from "next/link"

export default function Socials() {

    return (
        <main className="bg-black text-white flex min-h-screen flex-col px-6 pt-24 text-4xl font-normal">
            <h1 className="text-5xl">Instagram</h1>
            <Link href="https://www.instagram.com/cabennetts.gallery/" className="font-light">@cabennetts.gallery</Link>
        </main>
    )
}