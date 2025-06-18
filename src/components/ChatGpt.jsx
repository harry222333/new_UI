import React from "react";
import myImage from "../assets/ChatGpt.png";
import { BsLayoutSidebar, BsChatRightText } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import { MdOutlinePhotoLibrary } from "react-icons/md";
import { IoPlayCircleOutline } from "react-icons/io5";
import { AiOutlineProduct } from "react-icons/ai";
import { BiDonateHeart } from "react-icons/bi";
import { LuMessageCircleDashed, LuStar } from "react-icons/lu";
import {
  FaSmile,
  FaPaperclip,
  FaImage,
  FaMicrophone,
  FaPaperPlane,
} from "react-icons/fa";

function ChatGpt() {
  return (
    <div className="flex h-screen">
      <div className="bg-neutral-900 w-[20%] h-screen p-4 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-center mb-6">
            <img
              src={myImage}
              alt="ChatGPT Icon"
              className="w-7 h-7 rounded-4xl"
            />
            <BsLayoutSidebar className="text-white text-xl w-5 h-5 rounded-md" />
          </div>

          <div className="flex items-center gap-2 mt-8 ml-2">
            <BsChatRightText className="text-white text-[15px]" />
            <h1 className="text-white">New chat</h1>
          </div>

          <div className="flex items-center gap-2 mt-4 ml-1">
            <IoIosSearch className="text-white text-[20px]" />
            <h1 className="text-white">Search chats</h1>
          </div>

          <div className="flex items-center gap-2 mt-4 ml-2">
            <MdOutlinePhotoLibrary className="text-white text-[15px]" />
            <h1 className="text-white">Library</h1>
          </div>

          <div className="flex items-center gap-2 mt-8 ml-1">
            <IoPlayCircleOutline className="text-white text-[20px]" />
            <h1 className="text-white">Sora</h1>
          </div>

          <div className="flex items-center gap-2 mt-4 ml-2">
            <AiOutlineProduct className="text-white text-[15px]" />
            <h1 className="text-white">GPTs</h1>
          </div>
        </div>

        <div className="border-t border-white/20 mt-4 pt-2 ml-2 mb-2">
          <div className="flex items-center gap-2">
            <BiDonateHeart className="text-white text-[15px]" />
            <h1 className="text-white">Upgrade plan</h1>
          </div>
          <p className="text-white text-[13px] ml-6">
            More access to the best models
          </p>
        </div>
      </div>

      <div className="bg-neutral-800 w-[80%] h-screen flex flex-col">
        <div className="flex justify-between text-white text-xl p-3">
          <h1 className="text-white text-[20px] font-bold">ChatGpt</h1>

          <div className="flex gap-2 h-7 px-3 rounded-2xl bg-blue-900 items-center justify-center">
            <LuStar className="text-[15px]" />
            <h1 className="text-white text-[14px] font-medium">Get Plus</h1>
          </div>

          <div className="flex gap-3">
            <LuMessageCircleDashed className="text-white text-[20px]" />
            <h1 className="border-2 h-6 w-6 rounded-full text-center text-[13px] bg-neutral-900 leading-5">
              H
            </h1>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 flex justify-center items-center">
          <div className="flex flex-col items-center gap-4 w-full max-w-2xl">
            <p className="text-white text-3xl font-medium text-center">
              How can i help, Hamza?
            </p>

            <div className="w-full bg-neutral-700 rounded-3xl p-3 flex flex-col">
              <input
                type="text"
                placeholder="Ask anything"
                className="w-full bg-transparent outline-none text-white placeholder-gray-400 mb-2"
              />

              <div className="text-white justify-between flex p-2">
                <div className="flex gap-3">
                  <FaSmile className="cursor-pointer" />
                  <FaPaperclip className="cursor-pointer" />
                  <FaImage className="cursor-pointer" />
                </div>

                <div
                  className="flex gap-3
                "
                >
                  <FaMicrophone className="cursor-pointer" />
                  <FaPaperPlane className="cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatGpt;
