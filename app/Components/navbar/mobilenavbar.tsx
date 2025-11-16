"use clint"
import { IconLayoutSidebarLeftCollapseFilled, IconX } from "@tabler/icons-react";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { motion } from "motion/react";
import Link  from "next/link"; 

export const MobileBar = () => {
    const [open, setOpen] = useState(false); 
    const links = [
        {
            title : "Home", 
            ref : "/"
        }, 
        {
            title : "Services", 
            ref : "/services"
        }, 
        {
            title : "Our work",
            ref : "/work"
        },
        {
            title : "Contact", 
            ref : "/contact"
        }
    ]
    return (
        <div className="md:hidden relative inset-0">
            <button onClick={() => {
                setOpen(!open)
            }}>
                {open? <IconX className="text-red-500 text-3xl" size={32}/> : <IconLayoutSidebarLeftCollapseFilled  className="text-amber-700" size={32}/>}
            </button>
            <AnimatePresence>
            {open && 
            <motion.div 
            initial={{opacity : 0, x : 10}}
            animate= {{opacity : 1, x: 0}}
            exit={{opacity: 0, x : 10}}
            transition={{delay: 0.1, duration : 0.2}}
            className="absolute flex flex-col right-0 bg-white gap-5 w-xs border-2 p-4">
                {links.map((each, index) => 
                    <Link key={index} href={each.ref}><motion.span
                        initial= {{opacity : 0, x : 10}}
                        animate={{opacity: 1, x :20 }}
                        exit={{opacity: 0, x : 10}}
                        transition={{duration : index * 0.1}}
                        className="hover:font-bold"
                        >{each.title}
                        </motion.span>
                    </Link>
                )}

            </motion.div> }
            </AnimatePresence>
        </div>
    )
}