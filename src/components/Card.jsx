import React from 'react';
import { FaRegFileAlt } from "react-icons/fa";
import { BiCloudDownload } from "react-icons/bi";
import { useState } from 'react';
import { AiOutlineCloseSquare } from "react-icons/ai";
import { motion } from "framer-motion"
import { SiCachet } from 'react-icons/si';

function Card  ({data,reference})  {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} dragElastic={0.1} className=" relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-700 text-white py-10 px-5 overflow-hidden">
        <FaRegFileAlt /> 
        <p className='text-sm leading-tight mt-5 font-semibold'>{data.desc}</p>
        <div className="footer absolute bottom-0  w-full h-16 left-0 py-3  ">
            <div className='flex items-center justify-between py-3 px-8 mb-3'>
                <h5>{data.filesize}</h5>
                <span className='w-7  h-7 px-1 bg-zinc-500  rounded-full flex items-center justify-center'>
                    {data.close ?<AiOutlineCloseSquare/> : <BiCloudDownload size="5em" color='#fff'/>}
                <BiCloudDownload size="5em" color='#fff'/>
                </span>
            </div>
            {
                data.tag.isOpen &&(
                    <div className={`tag w-full py-4 ${data.tag.tagColor==="blue" ? "bg-blue-600":"bg-green-600"} flex items-center justify-center`}>
                <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
            </div>
                ) }
            
            </div>
    </motion.div>
    

  )
}

export default Card
