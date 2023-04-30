import React, { forwardRef } from "react";
import { BanknotesIcon, ChatBubbleBottomCenterIcon, EllipsisHorizontalIcon, HandThumbUpIcon, ArrowUturnRightIcon, TrashIcon, UserIcon } from "@heroicons/react/24/outline";

const Post = forwardRef(
  ({ displayName, text, personal, onClick }, ref) => {

    return (
      <div ref={ref} className="border-b-2 border-gray-300">
        <div className="flex mx-4 my-4">
          <div className="h-16 w-16 mr-2"><UserIcon className="h-14 w-14 bg-slate-300 text-white rounded-full p-2" /></div>
          <div className="w-full">
            <div className="flex justify-between">
              <div>
              {personal ? (
                <p className="font-bold xl:text-lg text-sm"> You </p>
              ) : ("")}
              {!personal ? (
                <p className="font-bold xl:text-lg text-sm">{displayName}</p>
              ) : ("")}
                {/* <p className="font-bold xl:text-lg text-sm">{displayName}</p> */}
              </div>
              <EllipsisHorizontalIcon className="h-6 w-6 cursor-pointer" />
            </div>

            <div className="my-4 mx-2">
              <p>{text}</p>
            </div>

            <div className="flex mx-2 justify-between">
              <HandThumbUpIcon className="postBtn" />
              <ChatBubbleBottomCenterIcon className="postBtn" />
              <ArrowUturnRightIcon className="postBtn" />
              {personal ? (
                <TrashIcon className="postBtn" onClick={onClick} />
              ) : ("")}
              {!personal ? (
                <BanknotesIcon className="postBtn" onClick={onClick} />
              ) : ("")}
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default Post;
