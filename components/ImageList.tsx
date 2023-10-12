"use client";

import { motion, scrollInfo } from "framer-motion";
import Image from "next/image";

type ImageListProps = {
    images: {
        id: string;
        title: string | null;
        description: string | null;
        link: string | null;
        tags: {
            name: string;
        }[];
    }[];
};

export default function ImageList(images: ImageListProps) {
    console.log('imageList images',images.images)
    
    return (
        <div className="grid auto-rows-auto items-center justify-center gap-4 md:grid-cols-2 p-4">
            { images.images.map((img: any, index: any) => (
                <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.35 }}
                    
                > 
                    <Image 
                        src={img.link}
                        width={600}
                        height={600}
                        alt="my image"
                    />
                    <motion.p
                        className="text-white font-medium tracking-wider">
                            {img.title}
                            
                    </motion.p>
                    <motion.p
                        className=" text-gray-500 font-light">
                            {img.description}

                    </motion.p>
                </motion.div>
            ))}
        </div>
    )
}