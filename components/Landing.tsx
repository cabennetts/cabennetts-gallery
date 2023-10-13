"use client"
import Link from "next/link";
import { myAlbums } from "../app/albums";
import { motion } from "framer-motion";
export function Landing() {

    return (  
        <section className="flex flex-col p-4">

        {myAlbums.map((album, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.15 }}
                    className=" min-w-fit"
                >
                    <Link href={`/album/${album.tag}`}>
                        <p className="uppercase text-5xl my-6 font-normal leading-6 tracking-widest">{album.name}</p>
                    </Link>
            </motion.div>
            ))}
        </section>
    )
}