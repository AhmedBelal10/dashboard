import React from 'react'
import { MdOutlineCancel } from "react-icons/md";
import { useStateContext } from "../contexts/ContextProvider";
import { chatData } from '../data/dummy';

const Chat = () => {
  const { handleClick , currentColor  } = useStateContext();
  return (
    <div className='mainChat  bg-white dark:bg-[#484B52] dark:text-white border'>
      <div className='chatHeader'>
        <h4 className='font-extrabold text-xl'>Messages</h4>
        <button
            type="button"
            onClick={() => {
              handleClick(false);
            }}
            style={{ color: "rgb(153,171,180", borderRadius: "50%" }}
            className="text-2xl p-3 md:p-0 hover:drop-shadow-xl hover:bg-light-gray"
          >
            <MdOutlineCancel />
          </button>
      </div>
      <div className='chatBody'>
          {chatData.map((item , index)=>(
            <div className='chatSingle flex items-center' key={index}>
              <img src={item.image} alt="" />
              <div>
                <p className='font-extrabold'>{item.message}</p>
                <p className='chatDesc text-gray-400'>{item.desc}</p>
                <p className='text-gray-400'>{item.time}</p>
              </div>
            </div>
          ))}
          <button className='text-white' style={{backgroundColor:currentColor}}>See All Messages</button>
      </div>
    </div>
  )
}

export default Chat