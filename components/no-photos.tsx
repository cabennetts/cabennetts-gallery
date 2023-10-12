'use client';
import { motion } from "framer-motion";
export function NoPhotos() {
    return (
        <motion.div 
            className="flex items-center justify-center text-center space-y-4 pt-6 px-6" 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
        >
            <h1 className="uppercase tracking-wider tracking text-xl text-white font-light">Editing photos, check back later!</h1>
        </motion.div>
    )
}