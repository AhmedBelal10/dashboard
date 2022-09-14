import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { useStateContext } from "../contexts/ContextProvider";
import { userProfileData } from "../data/dummy";
import avatar from "../data/avatar.jpg";

const UserProfile = () => {
  const { handleClick , currentColor } = useStateContext();
  return (
    <div className="mainChat mainUser bg-white dark:bg-[#484B52] dark:text-white border">
      <div className="chatHeader">
        <h4 className="font-extrabold text-xl">User Profile</h4>
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
      <div className="profileData flex mt-8 items-center">
        <img src={avatar} alt="" />
        <div>
          <h4 className="font-extrabold text-xl">Ahmed Belal</h4>
          <p className="text-gray-400 mt-3">Admin</p>
          <p className="text-gray-400">email@shop.com</p>
        </div>
      </div>
      <div className="chatBody userBody ">
        {userProfileData.map((item, index) => (
          <div className="chatSingle flex items-center hover:drop-shadow-xl hover:bg-light-gray cursor-pointer" key={index}>
            <div className={`p-3 mr-5 rounded-md`} style={{backgroundColor:item.iconBg , color:item.iconColor}}>{item.icon}</div>
            <div >
              <p className="font-extrabold">{item.title}</p>
              <p className="chatDesc userDisc mt-0 text-gray-400">{item.desc}</p>
            </div>
          </div>
        ))}
        <button className=" text-white" style={{backgroundColor:currentColor}}>Logout</button>
      </div>
    </div>
  );
};

export default UserProfile;
