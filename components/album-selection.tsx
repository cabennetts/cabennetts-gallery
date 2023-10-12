"use client" 

import { motion } from "framer-motion";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import { myAlbums } from "@/app/albums";
import Link from "next/link";
import { Button } from "./ui/button";

export default function AlbumSelection() {

    return (
        <motion.div 
            className="text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3 }}
        >
            <ScrollArea className="w-screen ">
                <div className="flex">
                    {myAlbums.map((album, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.15 }}
                            className=" min-w-fit"
                        >
                            <Button variant="ghost">
                                <Link href={`/album/${album.tag}`}>
                                    <p className="uppercase ">{album.name}</p>
                                </Link>
                            </Button>
                        </motion.div>
                    ))}
                </div>
                <ScrollBar orientation="horizontal" />
            </ScrollArea>
        </motion.div>
    )
}