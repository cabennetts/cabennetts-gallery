'use client';

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
    error,
    reset,
} : {
    error: Error;
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.log(error);
    }, [error]);

    return (
        <main className="content__main">
            <h2>Something went wrong!</h2>
            <button onClick={
                //attempt to recover by trying to re-render the segment
                () => reset()
            }>
                Try again
            </button>
            <p>Or go back to <Link href="/">Home</Link></p>
        </main>
    )
}