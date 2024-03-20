import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"
import Foreground from "./Foreground";

export default function Card({data, reference}) {
  return (
    <>
    <motion.div drag  dragConstraints={reference}  whileDrag={{scale:1.1}}  dragElastic={0.1}  dragTransition={{ bounceStiffness: 100, bounceDamping: 30 }}  className="relative flex-shrink-0 w-60 h-72 rounded-[40px] bg-green-100/90 px-8 py-10 overflow-hidden">
         <FaRegFileAlt className=""/>
         <p className="text-sm leading-tight mt-5 font-semibold ">{data.desc}</p>
         <div className="footer absolute bottom-0 w-full left-0 ">
            <div className="flex items-center justify-between py-3 px-8 mb-3">
                <h5>{data.filesize}</h5>
                <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center ">
                    {data.close ? <IoClose size="1em" color="white" /> : <LuDownload size="1em" color="white"/>}
                </span>
            </div>
            {
                data.tag.isOpen && ( 
                    <div className={`tag w-full py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center text-white`}>
                       <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3> 
                    </div>
                ) 
            }
            
         </div>
    </motion.div>
    </>
  )
}
