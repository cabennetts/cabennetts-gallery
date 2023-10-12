import Link from "next/link";

export default function NotFound() {
    return (
        <main>
            <section className="content__main">
                <p className="text-3xl font-bold text-center">Sorry, the requested album does not exist</p>
                <Link className="p-4 text-xl text-center" href="/">Back to Home</Link>
            </section>
        </main>
    )
}