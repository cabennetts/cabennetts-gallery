"use client"
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export function Content() {

    return (
        <>
        <section>
            <motion.div 
                className="flex flex-col p-4"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <Image src="/copy.svg" width={600} height={300} alt="My name (Caleb Bennetts) displayed on my images" />
            </motion.div>    
        </section>
        <section>
            
            <motion.h1 
                className="text-xl font-light tracking-wide px-6"
                initial={{ opacity: 0.5, x: -75 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5 }}
            >
                Photographing on and off since 2016. Currently interested in capturing Automotive, Travel, and Lifestyle.
            </motion.h1>
        </section>
        </>
    )

}