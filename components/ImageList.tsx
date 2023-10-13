"use client";

import * as React from "react"
import { Progress } from "@/components/ui/progress"
import { motion, scrollInfo } from "framer-motion";
import Image from "next/image";
import getBlur from "@/lib/getBlur";

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
    // blurDataUrl: string
};


// export function ProgressDemo() {
//   const [progress, setProgress] = React.useState(13)

//   React.useEffect(() => {
//     const timer = setTimeout(() => setProgress(66), 500)
//     return () => clearTimeout(timer)
//   }, [])

//   return <Progress value={progress} className="w-[60%]" />
// }


export default function ImageList(images: ImageListProps) {
    

    const leftColumnItems = images.images.filter((_, index) => index % 2 === 0);
    const rightColumnItems = images.images.filter((_, index) => index % 2 !== 0);

    const [progress, setProgress] = React.useState(13)

    React.useEffect(() => {
        const timer = setTimeout(() => setProgress(66), 500)
        return () => clearTimeout(timer)
    }, [])

    return (
        <div className="p-4 items-center justify-center md:flex md:space-x-4">
            <div className="flex-1 flex flex-col md:space-y-4">
            { leftColumnItems.map((img: any, index: any) => (
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
                        alt={img.description}            
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
            <div className="flex-1 flex flex-col md:space-y-4">
            { rightColumnItems.map((img: any, index: any) => (
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
                        alt={img.description}
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
            
        </div>
    )
}

{/* <div className="grid auto-rows-auto items-center justify-center gap-4 md:grid-cols-2 p-4">
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
        </div> */}